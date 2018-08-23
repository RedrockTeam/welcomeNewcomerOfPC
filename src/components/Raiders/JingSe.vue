<template>
    <div class="jingse">
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
                        mainimg:require("../../assets/jingse/大金鹰.jpg"),
                        textimg: require("../../assets/jingse/大金鹰.png"),
                        message1: "路线：1、在老校门乘坐346公交车在四中站下车 2、步行至崇文路站（230米左右），搭乘384公交车在大金鹰下",
                        message2: "简介：“大金鹰”雕塑，雄居在重庆南山671米高的鹞鹰岩上。上设有观景台，凭栏远眺，重庆数十里景物尽收眼底。据说，此系目前重庆最高的观景点。"
                    },
                    {
                        mainimg:require("../../assets/jingse/黄葛古道.jpg"),
                        textimg: require("../../assets/jingse/黄葛古道.png"),
                        message1: "路线：上新街爬南山上山的一条路(搭347/346在上新街下)",
                        message2: "简介：黄葛古道,是重庆市知名度最高的一条古道,有着800年历史,曾是历代川黔商贾的必经之地,被称为重庆的“丝绸之道”。该古道始于唐朝,宋、元、明、清时期处于鼎盛时期,属巴渝十二景之一。"
                    },
                    {
                        mainimg:require("../../assets/jingse/抗日纪念博物馆.jpg"),
                        textimg: require("../../assets/jingse/重庆抗战遗址博物馆.png"),
                        message1: "路线：1、在老校门乘坐346公交车在四中站下车 2、步行至崇文路站(230米左右)，搭乘384公交车在黄山站下",
                        message2: "简介：重庆抗战遗址博物馆是集抗战遗址与原生态自然景观于一体的综合旅游和爱国主义教育基地；是一个有着丰富人文资源、自然资源和旅游资源的抗战遗址博物馆旅游景区。"
                    },

                    {
                        mainimg:require("../../assets/jingse/老君洞.jpg"),
                        textimg: require("../../assets/jingse/老君洞.png"),
                        message1: "路线：位于黄桷古道边",
                        message2: "简介：老君洞道观是重庆主城区最大最主要的宫观，也是重庆市的重要道观。数百年来，每逢初一、十五或清明、中元等传统节日，香客朝香，游人登高，香火一时胜极。道观内香烟氤氲缭绕，山路上行人络绎不绝。"
                    },
                    {
                        mainimg:require("../../assets/jingse/南滨路.jpg"),
                        textimg: require("../../assets/jingse/南滨路.png"),
                        message1: "路线：1、从南坪步行到达南坪东路站 2、乘坐375路到达海棠烟雨广场站（也可乘坐373路）3、步行到达南滨路",
                        message2: "简介：南滨路处于重庆市的中心地位，它北临长江，背依南山，可观最美渝中夜景；历史悠久的巴渝文化、大禹文化、码头文化、抗战遗址文化如珍珠般遍布沿线。"
                    },
                    {
                        mainimg:require("../../assets/jingse/南之山.jpg"),
                        textimg: require("../../assets/jingse/南之山书店.png"),
                        message1: "路线：1、在老校门乘坐346公交车在四中站下车 2、步行至崇文路站，搭乘384公交车在南山植物园下车 3、最后步行",
                        message2: "简介：南山之上，一间看得见风景的书店，对于南之山书店的主人来说：“阅读，电影，音乐，绘画，美景，美食都是生活中最美好一部分，阅读不应和其它我们热爱的东西分离。"
                    },
                    {
                        mainimg:require("../../assets/jingse/涂山湖.jpg"),
                        textimg: require("../../assets/jingse/涂山湖.png"),
                        message1: "路线：新校门出去，向二外的方向。",
                        message2: "简介：湖东是错落有致的植被，构成“翠堤画屏”之春；毗邻二外的北面，凸显“荷塘月色”之夏；西面的黄桷垭文化广场延伸到湖边，体现“林木深秋”之秋；南面以大堤坝和游园为平台，形成冬日清晨“白雾青黛”之东"
                    },
                    {
                        mainimg:require("../../assets/jingse/一棵树.jpg"),
                        textimg: require("../../assets/jingse/一棵树观景台.png"),
                        message1: "路线：老校门搭347/346到四中站下，步行1.2公里到一棵树观景台",
                        message2: "简介：重庆南山一棵树观景台位于南岸区王家山脉临江半山腰处，与重庆主城区隔江相望，是重庆都市旅游的必到之地。在这里可以看见重庆城这座山水之城的起伏面貌。"
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
     .jingse {
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