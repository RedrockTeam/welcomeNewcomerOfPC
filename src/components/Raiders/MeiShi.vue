<template>
    <div class="meishi">
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
                        mainimg:require("../../assets/meishi/城门老火锅.jpg"),
                        textimg: require("../../assets/meishi/城门老火锅.png"),
                        message1: "地址： 新校门出门，过马路右转下山的路边",
                        message2: "简介： 辣而不燥，回味悠长。"
                    },
                    {
                        mainimg:require("../../assets/meishi/大茶杯.jpg"),
                        textimg: require("../../assets/meishi/大茶杯.png"),
                        message1: "地址： 老校门过马路左转一个斜坡旁",
                        message2: "简介： 这里的招牌奶茶如丝般顺滑，奶香味十足。"
                    },
                    {
                        mainimg:require("../../assets/meishi/果然.jpg"),
                        textimg: require("../../assets/meishi/果然.png"),
                        message1: "地址： 老校门对面",
                        message2: "简介： 满满一杯细细品味，哇噢!就是这个味道！"
                    },

                    {
                        mainimg:require("../../assets/meishi/华莱士.jpg"),
                        textimg: require("../../assets/meishi/华莱士.png"),
                        message1: "地址： 老校门对面",
                        message2: "简介： 物美价廉，种类繁多，美味可口。"
                    },
                    {
                        mainimg:require("../../assets/meishi/黄焖鸡米饭.jpg"),
                        textimg: require("../../assets/meishi/黄焖鸡米饭.png"),
                        message1: "地址： 老校门对面",
                        message2: "简介： 好吃，又实惠，配上米饭一吃，那就一个字 ，绝！"
                    },
                    {
                        mainimg:require("../../assets/meishi/蜜雪冰城.jpg"),
                        textimg: require("../../assets/meishi/蜜雪冰城.png"),
                        message1: "地址： 老校门对面",
                        message2: "简介： 这家的冰激凌很好吃哦，有抹茶，原味和混合三种口味哦~而且不贵，只要两块，物美价廉！"
                    },
                    {
                        mainimg:require("../../assets/meishi/土巴碗.jpg"),
                        textimg: require("../../assets/meishi/土巴碗.png"),
                        message1: "地址： 老校门对面左转斜坡上右边",
                        message2: "简介： 里面有各种特色套饭，炒饭和面条抄手等。"
                    },
                    {
                        mainimg:require("../../assets/meishi/万州巴斗香烤鱼.jpg"),
                        textimg: require("../../assets/meishi/万州巴斗香烤鱼.png"),
                        message1: "地址： 新校门出门右转，农业银行旁买水果的巷子里面",
                        message2: "简介： 口味奇绝、营养丰富。"
                    },
                    {
                        mainimg:require("../../assets/meishi/无届.jpg"),
                        textimg: require("../../assets/meishi/无届青年餐馆.png"),
                        message1: "地址： 老校门出门过马路左转，斜坡旁边巷子进去，柒露营串串旁边",
                        message2: "简介： 一个聚集大批文青谈人生聊梦想，以酒会友的地方。"
                    },
                    {
                        mainimg:require("../../assets/meishi/古茗.jpg"),
                        textimg: require("../../assets/meishi/古茗.png"),
                        message1: "地址：老校门对面",
                        message2: "简介：延续了古茗一贯的好味道，每一口都能品味到茶叶的清香。将现代与传统结合，不断地推陈出新，为各位学子带来季度好味。"
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
    .meishi {
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