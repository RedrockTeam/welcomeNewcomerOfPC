<template>
    <div class="chaoshi">
        <life-card v-for="(content, index) of lifelist" :key="index" :lifelist="content" class="life-card"></life-card>
    </div>
</template>

<script>
    import LifeCard from '../common/LifeCard'
    export default {
        data() {
            return {
                lifelist: [
                    {
                        mainimg:require("../../assets/chaoshi/永辉超市.jpg"),
                        textimg: require("../../assets/chaoshi/永辉超市.png"),
                        message1: "相对地址： 黄桷小学对面",
                        message2: "脚程简介： 新校门出门过马路，右转直走约10分钟"
                    },
                    {
                        mainimg:require("../../assets/chaoshi/新世纪超市.jpg"),
                        textimg: require("../../assets/chaoshi/新世纪超市.png"),
                        message1: "相对地址： 重庆邮电大学旁",
                        message2: "脚程简介： 新校门出门，右转"
                    },
                    {
                        mainimg:require("../../assets/chaoshi/渝芳百货商场.jpg"),
                        textimg: require("../../assets/chaoshi/渝芳百货商场.png"),
                        message1: "相对地址： 重庆邮电大学旁",
                        message2: "脚程简介： 新校门出门，左转直走。老校门出门，右转直走。"
                    },
                ]
            }
        },
        components: {
            LifeCard
        },
    }
</script>

<style lang="less" scoped>
    .chaoshi {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-height: 720px;
        overflow-y: scroll;
        .life-card {
            margin-right: 5px;
        }
    }
    ::-webkit-scrollbar {
        width: 30px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }
    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
</style>