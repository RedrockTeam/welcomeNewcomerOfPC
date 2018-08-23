<template>
    <div class="kuaidi">
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
                        mainimg:require("../../assets/kuaidi/韵达，圆通，顺丰.jpg"),
                        textimg: require("../../assets/kuaidi/韵达、圆通、顺丰.png"),
                        message1: "地址：位于15栋，靠近兴业苑食堂",
                        message2: ""
                    },
                   {
                        mainimg:require("../../assets/kuaidi/京东.jpg"),
                        textimg: require("../../assets/kuaidi/京东.png"),
                        message1: "地址：在两个快递点中段",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/申通.jpg"),
                        textimg: require("../../assets/kuaidi/申通快递.png"),
                        message1: "地址：靠近楼梯",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/中通.jpg"),
                        textimg: require("../../assets/kuaidi/中通快递.png"),
                        message1: "地址：位于5栋商店旁边",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/邮政.jpg"),
                        textimg: require("../../assets/kuaidi/邮政.png"),
                        message1: "地址：老校门楼梯上公共厕所旁边的自动取货机器",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/百世.jpg"),
                        textimg: require("../../assets/kuaidi/百世快递.png"),
                        message1: "地址：阳光图文巷子向前走50米",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/快捷快递.jpg"),
                        textimg: require("../../assets/kuaidi/快捷快递、天猫超市.png"),
                        message1: "地址：阳光图文巷子向前走100米",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/天天.jpg"),
                        textimg: require("../../assets/kuaidi/天天快递.png"),
                        message1: "地址：新校门出门右拐，新世纪负一楼",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/优速.jpg"),
                        textimg: require("../../assets/kuaidi/优速快递.png"),
                        message1: "地址：新校门出门直走，往广益中学方向上行100米",
                        message2: ""
                    },
                    {
                        mainimg:require("../../assets/kuaidi/中通（静苑）品骏.jpg"),
                        textimg: require("../../assets/kuaidi/中通、品骏快递.png"),
                        message1: "地址：老校门对面，大茶杯旁边上行",
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
    .kuaidi{
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