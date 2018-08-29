<template>
    <div class="gongzhong">
        <gong-card v-for="(gongmain, index) of gonglist" :key="index" :gongmain="gongmain"></gong-card>
    </div>
</template>

<script>
    import GongCard from "../common/GongCard.vue";
    export default {
        components: {
            GongCard
        },
        data () {
            return {
                gonglist: [
                    {
                        imgsrc: require("../../assets/erweima/1.png"),
                        name: require("../../assets/gongzhongfont/重庆邮电大学.png"),
                        intro: "负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。"
                    },          
                    {
                        imgsrc: require("../../assets/erweima/2.jpg"),
                        name: require("../../assets/gongzhongfont/重邮小帮手.png"),
                        intro: "重邮影响力最大、关注量最高的新媒体平台，“重庆十大微信公众号”。先后获得“首届全国高校优秀网络栏目提名奖”、腾讯校园应用“最佳人气产品”等殊荣。"
                    },    
                    {
                        imgsrc: require("../../assets/erweima/3.jpg"),
                        name: require("../../assets/gongzhongfont/重邮青年.png"),
                        intro: "致力于为广大重邮学子提供最精彩的校园动态一一这里有最引人注目的新闻资讯|这里 有最方便实用的知识信息、逗趣感动的青春互动。"
                    },    
                    {
                        imgsrc: require("../../assets/erweima/4.jpg"),
                        name: require("../../assets/gongzhongfont/重邮微校.png"),
                        intro: "重庆邮电大学党委学生工作处运营，功能定位:学生教育管理，评奖评优，心理健康教育，学生党员教育，职业生涯规划，学业辅导，学生资助等推送。"
                    },     
                    {
                        imgsrc: require("../../assets/erweima/5.jpg"),
                        name: require("../../assets/gongzhongfont/重邮阳光校广.png"),
                        intro: "重庆邮电大学阳光校园广播台SunshineRadio官方平台。"
                    },          
                    {
                        imgsrc: require("../../assets/erweima/6.jpg"),
                        name: require("../../assets/gongzhongfont/重庆邮电大学就业中心.png"),
                        intro: "重庆邮电大学就业中心官方微信，实时发布校内招聘信息，就业动态等相关信息。"
                    },    
                    {
                        imgsrc: require("../../assets/erweima/7.png"),
                        name: require("../../assets/gongzhongfont/重庆邮电大学招生办公室.png"),
                        intro: "提供重庆邮电大学招生计划、录取分数线、招生简章、新生班级、宿舍分配情况、新生缴费情况的查询和咨询服务。"
                    },    
                    {
                        imgsrc: require("../../assets/erweima/8.jpg"),
                        name: require("../../assets/gongzhongfont/重邮小卫士.png"),
                        intro: "重庆邮电大学保卫处运营，集安全教育、安全服务、信息通报、应急处置等功能为一体旨在传播安全知识，增强师生安全防范意识，服务于校园安全稳定工作。"
                    },              
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .gongzhong {
        display: flex;
        flex-wrap: wrap;
        max-height: 720px;
        overflow-y: scroll;
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