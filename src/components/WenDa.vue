<template>
    <div class="wenda">
        <div class="mengban"  v-show="divShow"></div>
        <div class="logo"></div>
        <div class="wenda-frame">
            <div class="class">
                <div :class="['all', {classactive: classActive('all')}]" @click="clickClass('all')">
                    <img src="../assets/all.png">
                </div>
                <div :class="['life', {classactive: classActive('life')}]" @click="clickClass('life')">
                    <img src="../assets/life.png">
                </div>
                <div :class="['study', {classactive: classActive('study')}]" @click="clickClass('study')">
                    <img src="../assets/study.png">
                </div>
                <div :class="['organization', {classactive: classActive('organization')}]" @click="clickClass('organization')">
                    <img src="../assets/organization.png">
                </div>
                <div :class="['activity', {classactive: classActive('activity')}]" @click="clickClass('activity')">
                    <img src="../assets/activity.png">
                </div>
            </div>
            <div class="container">
                <div class="container-header">
                    <div class="container-author">提问者</div>
                    <div class="container-content">提问内容</div>
                    <div class="container-reply">回复</div>
                    <div class="container-time">时间</div>
                </div>
                <div class="container-main">
                    <div class="question" v-for="list of showLists" :key="list.Id">
                        <div class="author">{{ list.name }}</div>
                        <div class="content">
                            <p>{{ list.content }}</p>
                        </div>
                        <div class="reply" @click="showQuestion(list.Id)"></div>
                        <div class="time">
                            <p>{{ list.time }}</p>
                        </div>
                    </div>
                </div>
                <div class="container-footer">
                    <div class="pagination">
                        <div class="button prev" @click="prevPage"></div>
                        <div class="button-list">
                            <div :class="['button', {active: page === currentPage}]" v-for="page in currentPage+4" :key="page" @click="goPage(page)"
                                v-show="isShow(page)">{{ page }}</div>
                        </div>
                        <div class="button next" @click="nextPage"></div>
                    </div>
                </div>
            </div>
            <transition enter-active-class="animated bounceIn fast" leave-active-class="animated bounceOut faster">
                <div class="popup" v-show="divShow">
                    <div class="popup-container">
                        <div class="popup-close" @click="divShow=false"></div>
                        <div class="popup-in">
                            <div class="popup-content">
                                <div class="head-img">
                                    <img :src=currentQuestion.question.headImg>
                                </div>
                                <div class="head-name">{{ currentQuestion.question.name }}</div>
                                <div class="head-content">{{ currentQuestion.question.content }}</div>
                                <div class="head-right">
                                    <div class="head-time">{{ currentQuestion.question.create_time }}</div>
                                    <div class="head-count">{{ currentQuestion.question.reply_count }}评论</div>
                                </div>
                            </div>
                            <div class="popup-comment-container">
                                <div class="popup-comment" v-for="comment of currentQuestion.comment" :key="comment.Id">
                                    <div class="head-img">
                                        <img :src=comment.headImg>
                                    </div>
                                    <div class="head-name">{{ comment.name }}</div>
                                    <div class="head-content">{{ comment.content }}</div>
                                    <div class="head-right">
                                        <div class="head-time">{{ comment.create_time }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="source">关注重邮小帮手微信公众号，即可参与提问。</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                currentPage: 1,
                totalPages: 1,
                currentClass: 'all',
                lists: [],
                showLists: [],
                currentQuestion: {
                    question: {
                        name: '',
                        content: '',
                        headImg: '',
                        create_time: '',
                        reply_count: ''
                    },
                    comment: [{
                        Id: '',
                        name: '',
                        content: '',
                        headImg: '',
                        create_time: ''
                    }]
                },
                divShow: false
            }
        },
        methods: {
            goPage(page) {
                this.currentPage = page
            },
            isShow(page) {
                if (this.currentPage >= 4 && this.currentPage - page >= 3) {
                    return false
                } else if (page > 5 && page - this.currentPage >= 3) {
                    return false
                } else if (page > this.totalPages) {
                    return false
                } else {
                    return true
                }
            },
            prevPage() {
                if (this.currentPage > 1) this.currentPage--
            },
            nextPage() {
                if (this.currentPage < this.totalPages) this.currentPage++
            },
            clickClass(className) {
                this.$router.push({
                    name: 'WenDa',
                    params: {
                        class: className,
                        page: 1
                    }
                })
            },
            classActive(name) {
                return this.$route.params.class === name ? true : false
            },
            getTotalPages() {
                return this.lists.length % 7 === 0 ? this.lists.length / 7 : parseInt(this.lists.length / 7) + 1
            },
            getShowLists(page) {
                this.showLists = this.lists.slice((page - 1) * 7, page * 7)
            },
            getApi(c) {
                axios.get(`https://wx.idsbllp.cn/game/xzbbm2018/index.php/api/search/tag/${c}`)
                    .then(res => {
                        this.lists = res.data
                        this.totalPages = this.getTotalPages()
                        this.getShowLists(this.$route.params.page)
                    })
            },
            getQuestion(id) {
                axios.get(`https://wx.idsbllp.cn/game/xzbbm2018/index.php/api/question/${id}`)
                    .then(res => {
                        this.currentQuestion = res.data
                    })
            },
            showQuestion(id) {
                this.getQuestion(id)
                this.divShow = true
                setTimeout(() => document.querySelector('.popup-comment-container').scrollTop = 0, 100)
            }
        },
        created() {
            this.currentClass = this.$route.params.class
            this.goPage(parseInt(this.$route.params.page))
            //获取api
            this.getApi('')
        },
        watch: {
            currentPage() {
                this.$router.push({
                    name: 'WenDa',
                    params: {
                        page: this.currentPage
                    }
                })
            },
            '$route' (to, from) {
                if (to.params.class === 'life') {
                    this.getApi('生活')
                } else if (to.params.class === 'study') {
                    this.getApi('学习')
                } else if (to.params.class === 'organization') {
                    this.getApi('组织')
                } else if (to.params.class === 'activity') {
                    this.getApi('活动')
                } else if (to.params.class === 'all') {
                    this.getApi('')
                }
                this.goPage(parseInt(this.$route.params.page))
                this.currentClass = this.$route.params.class
                this.getShowLists(this.$route.params.page)
            },
            currentClass() {
                this.$router.push({
                    name: 'WenDa',
                    params: {
                        class: this.currentClass
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .wenda {
        width: 832px;
        height: 1287px;
        padding: 8px 75px 0px 91px;
    }

    .logo {
        width: 836px;
        height: 462px;
        background: url('../assets/wenda-logo.png') no-repeat;
        background-size: 100% 100%;
    }

    .wenda-frame {
        width: 828px;
        height: 670px;
        margin-top: 40px;
        border: solid 4.5px #432a92;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        background: #d5fbff;
    }

    .class {
        width: 100%;
        height: 70px;
        background: #93ece6;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border-bottom: solid 4.5px #432a92;
        display: flex;
        align-items: center;
        div {
            background: #54c9f3;
            height: 50px;
            flex: 1;
            margin: 0 5px;
            border: solid 4.5px #432a92;
            cursor: pointer;
            transition: transform .3s;
            display: flex;
            justify-content: center;
            align-items: center;
            &:first-child {
                border-top-left-radius: 18px;
            }
            &:last-child {
                border-top-right-radius: 18px;
            }
            &:hover {
                transform: scale(1.08);
                background: #098ad8;
            }
        }
    }

    .container {
        width: 100%;
        height: 500px;
        background: #d5fbff;
    }

    .container-header {
        width: 100%;
        height: 60px;
        display: flex;
        padding-top: 20px;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #432a92;
        user-select: none;
        .container-author {
            width: 130px;
            padding-left: 50px;
        }
        .container-content {
            width: 300px;
            padding: 0 45px;
        }
        .container-reply {
            width: 130px;
        }
        .container-time {
            width: 100px;
        }
    }

    .container-main {
        width: 100%;
        height: 420px;
        display: flex;
        flex-flow: column;
        p {
            font-size: 14px;
        }
        .question {
            width: 100%;
            display: flex;
            align-items: center;
            flex: 1;
            border-bottom: dashed 1px #559bde;
            div {
                display: flex;
                align-items: center;
                font-size: 17px;
                color: #4393ba;
            }
            .author {
                width: 155px;
                height: 100%;
                justify-content: center;
                font-size: 14px;
            }
            .content {
                width: 400px;
                height: 100%;
                margin-right: 21px;
                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 100%;
                }
            }
            .reply {
                width: 30px;
                height: 30px;
                background: url('../assets/reply.png') no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
                transition: transform .3s;
                &:hover {
                    background: url('../assets/reply-active.png') no-repeat;
                    background-size: 100% 100%;
                    transform: scale(1.2);
                }
            }
            .time {
                width: 200px;
                p {
                    text-indent: 80px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

            }
        }
    }

    .classactive {
        background: #098ad8 !important;
    } //Pagination
    .pagination {
        width: 300px;
        height: 35px;
        display: flex;
        user-select: none;
        margin: 30px auto;
    }

    .button {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        float: left;
        font-size: 15px;
    }

    .active {
        background: url('../assets/pinkcircle.png') no-repeat;
        ;
        background-position: 8px 5px;
    }

    .next {
        margin-left: 5px;
        height: 200%;
        background: url('../assets/next.png') no-repeat;
        background-size: 100% 100%;
        width: 9%;
        height: 120%;
        margin-top: -3px;
        transition: all .3s;
        &:hover {
            background: url('../assets/next-active.png') no-repeat;
            background-size: 100% 100%;
            transform: scale(1.08);
        }
    }

    .prev {
        margin-top: -3px;
        margin-right: 10px;
        height: 200%;
        background: url('../assets/prev.png') no-repeat;
        background-size: 100% 100%;
        width: 9%;
        height: 120%;
        transition: all .3s;
        &:hover {
            background: url('../assets/prev-active.png') no-repeat;
            background-size: 100% 100%;
            transform: scale(1.08);
        }
    }

    .button-list {
        width: 67.6%;
        height: 100%;
        transform: scale(1.05);
    }

    .prev-active {
        background: url('../assets/prev-active.png') no-repeat;
        background-size: 100% 100%;
    }

    .popup {
        width: 870px;
        height: 500px;
        background: #9ce8ff;
        position: absolute;
        bottom: 180px;
        left: 70px;
        border: solid 4px #432a92;
        border-radius: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 15;
    }

    .popup-container {
        width: 820px;
        height: 450px;
        background: #d5fbff;
        border: solid 4px #432a92;
        border-radius: 18px;
    }

    .popup-close {
        width: 45px;
        height: 45px;
        background: url('../assets/close.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        right: 40px;
        top: 40px;
        cursor: pointer;
        transition: all .5s;
        &:hover {
            transform: rotate(180deg)
        }
    }

    .popup-in {
        width: 715px;
        height: 450px;
        padding-left: 40px;
    }

    .popup-content {
        width: 100%;
        height: 60px;
        padding: 10px 0 10px 0;
        display: flex;
        align-items: center;
        border-bottom: solid 2px #04598f; //background: #d5f0ff;
        box-shadow: 0 0 0 #000;
    }

    .head-img {
        width: 45px;
        height: 45px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .head-name {
        color: #03395a;
        padding-left: 5px;
        font-size: 14px;
        min-width: 60px;
    }

    .head-content {
        width: 475px;
        height: 100%;
        font-size: 13px;
        padding-left: 5px;
        overflow: hidden;
        color: #03395a;
        display: flex;
        align-items: center;
    }

    .head-right {
        width: 115px;
        height: 100%;
        position: relative;
        left: 7px;
        display: flex;
        justify-content: center;
        flex-flow: column;
    }

    .head-time,
    .head-count {
        width: 100%;
        height: 30%;
        color: #03395a;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
    }

    .popup-comment-container {
        width: 103.5%;
        max-height: 340px;
        padding: 0px 20px 0px 0;
        display: flex;
        align-items: center; //border-bottom: dotted 2px #03395a;
        overflow-y: scroll;
        display: flex;
        flex-flow: column;
    }

    .popup-comment {
        width: 100%;
        min-height: 60px;
        padding: 10px 0 10px 0;
        border-bottom: dotted 2px #04598f;
        display: flex;
        align-items: center;
        flex: none;
        transition: all .3s;
        &:hover {
            box-shadow: 4px 5px 8px 0px rgba(0, 0, 0, .2);
            border: none;
            background: rgba(178, 240, 247, .5);
        }
    } //
    ::-webkit-scrollbar {
        width: 30px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }

    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
    .mengban {
        width: 1522px;
        height: 3170px;
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        left: -260px;
        top: -1060px;
        z-index: 10;
    }
    .source {
        color: #6550a7;
        font-size: 16px;
        width: 850px;
        text-align: center;
        position: absolute;
        bottom: 13px;
        text-indent: -10px;
        user-select: none;
    }
</style>