<template>
    <div class="wenda">
        <div class="logo"></div>
        <div class="wenda-frame">
            <div class="class">
                <div class="all"></div>
                <div class="life"></div>
                <div class="study"></div>
                <div class="organization"></div>
                <div class="activity"></div>
            </div>
            <div class="container">
                <div class="container-header">
                    <div class="container-author">提问者</div>
                    <div class="container-content">提问内容</div>
                    <div class="container-reply">回复</div>
                    <div class="container-time">时间</div>
                </div>
                <div class="container-main">
                    <div
                        class="question"
                        v-for="n in 7"
                        :key="n">
                        <div class="author">小熊猫</div>
                        <div class="content"><p>小熊猫小熊猫小熊猫小熊猫小小熊猫小熊猫小熊猫小熊猫小熊猫好吃吗</p></div>
                        <div class="reply"></div>
                        <div class="time"><p>2018-8-12</p></div>
                    </div>
                </div>
                <div class="container-footer">
                    <div class="pagination">
                        <div class="button prev" 
                            @click="prevPage"></div>
                        <div class="button-list">
                            <div :class="['button', {active: page === currentPage}]"
                            v-for="page in currentPage+4"
                            :key="page"
                            @click="goPage(page)"
                            v-show="isShow(page)">{{ page }}</div>
                        </div>
                        <div class="button next" 
                            @click="nextPage"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Pagination from './Pagination'

export default {
    components: {
        //Pagination
    },
    data() {
        return {
            currentPage: 1,
            totalPages: 30
        }
    },
    methods: {
        goPage(page) {
            this.currentPage = page
        },
        isShow(page) {
            if (this.currentPage >= 4 && this.currentPage - page >= 3) {
                return false
            }
            else if (page > 5 && page - this.currentPage >= 3) {
                return false
            }
            else if (page > this.totalPages) {
                return false
            }
            else {
                return true
            }
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++
        }
    }
}
</script>

<style lang="less" scoped>
    .wenda {
        width: 832px;
        height: 1227px;
        padding: 8px 75px 60px 91px;
    }
    .logo {
        width: 836px;
        height: 462px;
        background: url('../../assets/wenda-logo.png') no-repeat;
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
            &:first-child {
                border-top-left-radius: 18px;
            }
            &:last-child {
                border-top-right-radius: 18px;
            }
            &:hover {
                transform: scale(1.08);
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
            }
            .content {
                width: 380px;
                height: 100%;
                margin-left: 20px;
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
                background: url('../../assets/reply.png') no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
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
    //Pagination
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
        // &:hover, &:active {
        //     background: rgba(60, 200, 255, 0.9);
        //     color: #fff;
        // }
    }
    .active {
        //background: rgba(60, 200, 255, 0.9);
        background: url('../../assets/pinkcircle.png') no-repeat;;
        //background-size: 100% 100%;
        background-position: 8px 5px;
        //color: #fff;
    }
    .next {
        margin-left: 5px;
        height: 200%;
        background: url('../../assets/next.png') no-repeat;
        background-size: 100% 100%;
        width: 9%;
        height: 120%;
        margin-top: -3px;
        transition: all .3s;
        &:hover {
            background: url('../../assets/next-active.png') no-repeat;
            background-size: 100% 100%;
            transform: scale(1.08);
        }
    }
    .prev {
        margin-top: -3px;
        margin-right: 10px;
        height: 200%;
        background: url('../../assets/prev.png') no-repeat;
        background-size: 100% 100%;
        width: 9%;
        height: 120%;
        transition: all .3s;
        &:hover {
            background: url('../../assets/prev-active.png') no-repeat;
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
        background: url('../../assets/prev-active.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
