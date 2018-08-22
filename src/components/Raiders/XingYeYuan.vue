<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/lxingyeyuan.png"></div>
            <div class="text">屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过。内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。</div>
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
                    imgsrc: require("../../assets/sushe/x1.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/x2.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/x3.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/x4.jpg")
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