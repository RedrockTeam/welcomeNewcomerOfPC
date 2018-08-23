<template>
    <div class="yinhang">
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
                        mainimg:require("../../assets/yinhang/农行.jpg"),
                        textimg: require("../../assets/yinhang/中国农业银行.png"),
                        message1: "地址：新校门出门右转，新世纪超市旁边",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/yinhang/邮政.jpg"),
                        textimg: require("../../assets/yinhang/中国邮政储蓄银行(黄桷垭支行).png"),
                        message1: "地址：老校门出门右转，绝味鸭脖旁边",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/yinhang/中国工商银行自助服务点.jpg"),
                        textimg: require("../../assets/yinhang/中国工商银行自助服务点.png"),
                        message1: "地址：新校门出门，左转直走，老校门出门，右转直走。",
                        message2: ""
                    },

                    {
                        mainimg:require("../../assets/yinhang/重庆农村商业银行.jpg"),
                        textimg: require("../../assets/yinhang/重庆农村商业银行.png"),
                        message1: "地址：老校门出门，过马路，右转。",
                        message2: ""
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
    .yinhang {
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