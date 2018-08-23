<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/sdaxibei.png"></div>
            <div class="text">大西北背靠中心食堂，面朝着宁静苑4舍，同中心食堂一般，因着优越的地理位置成为了学生上课早餐首选。靠着北方师傅的一手好厨艺，虽说是地处川渝地区，但也能品味到一两点奢侈的北方滋味。不同于其他食堂的是，大西北食堂的空间较小，堂食的学生较少，更多的青睐来自于它极为迅敏的打包速度。<br>推荐菜品：羊肉泡馍，大盘鸡盖饭</div>
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
                    imgsrc: require("../../assets/shitang/d1.jpg")
                },
                {
                    imgsrc: require("../../assets/shitang/d2.jpg")
                },
                {
                    imgsrc: require("../../assets/shitang/d3.jpg")
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