<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/szhongxin.png"></div>
            <div class="text">与雨红莲广场毗连，又与风华操场隔道相望的它，由于与二教距离甚近，也常常是同学们打包就餐的不二选择。它以低廉的价格和繁多的种类，在同学们的心中占有绝对地位。<br>推荐菜品：早餐时段售卖的麻团，糍粑和荤素包子，糖醋里脊<br>人均消费：8元</div>
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
                    imgsrc: require("../../assets/shitang/z1.jpg")
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