<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/syansheng.png"></div>
            <div class="text">被宁静苑和知行苑两相环绕，算的是颇为优越的地理位置。没有富丽堂皇的过分修饰，多的是一览无余的简单明了。亲切，日常，这两个词来形容延生食堂最合适不过了，亲切的是带有两三分家长里短的味道，日常的是朝朝暮暮交错间穿梭的身影。<br>推荐菜品：冒菜，鲜榨豆浆，羊肉粉<br>人均消费：10元</div>
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
                    imgsrc: require("../../assets/shitang/y1.jpg")
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