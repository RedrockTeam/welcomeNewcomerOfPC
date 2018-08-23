<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/lzhixingyuan.png"></div>
            <div class="text">位于中心食堂附近的1、5、6栋是学校现存最老的寝室，每层楼设有公用的卫生间，洗澡间。但位于校园中心，上课，生活都极为便利。15、16栋寝室则在太极运动场旁边，楼下是商店和快递点，附近有红高粱和兴业苑食堂，十分便利。
1、5、6栋寝室为6人间，上下均为床铺，内部没有独立卫生间和阳台。15、16栋则为学校标准的4人间，上床下桌，配有阳台，独立卫生间。</div>
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
                    imgsrc: require("../../assets/sushe/z1.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/z2.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/z3.jpg")
                },
                {
                    imgsrc: require("../../assets/sushe/z4.jpg")
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