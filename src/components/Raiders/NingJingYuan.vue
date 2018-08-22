<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/lningjingyuan.png"></div>
            <div class="text">坐落在美丽的情人坡旁，是妹子们散心聊天约会的好去处；篮球、网球、羽毛球这些周围球场为大家的锻炼提供了方便，与新校区紧连，周边分布有“千喜鹤”、“延生”等食堂。
宿舍基本为6人间基本情况与22-24栋相同且有独立的阳台、卫浴，床铺是上下铺与上床下桌的混搭，人流量很少，环境比较清静。</div>
        </div>
    </div>
</template>

<script>
import lunbo from '../common/lunbo'
export default {
    components: {
        lunbo
    },
    data() {
        return {
            imglist: [
                {
                    imgsrc: require("../../assets/sushe/n1.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/n2.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/n3.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/n4.jpg")
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .sushe {
        width: 99.9%;
        height: 660px;
        padding-top: 20px;
        background: #d5fbff;
        border: solid 4px #432a92;
        border-top: none;
    }
    .lunbo {
        margin: 0 auto;
    }
    .container {
        width: 90%;
        height: 185px;
        padding: 75px 5% 0px 5%;
        overflow: hidden;
    }
    .text {
        margin-top: 10px;
        color: #503b90;
    }
</style>