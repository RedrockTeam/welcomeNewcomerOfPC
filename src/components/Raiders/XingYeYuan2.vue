<template>
    <div class="sushe">
        <lunbo :imglist="imglist" class="lunbo"></lunbo>
        <div class="container">
            <div class="title"><img src="../../assets/lxingyeyuan.png"></div>
            <div class="text">兴业苑食堂作为老一派的食堂，与中心食堂一样，不断沉淀自己的重庆味道，色香味俱全的家烧菜肴，总有一款美味属于家的味道。<br>推荐菜品：青椒炒肉丝，回锅肉，辣子鸡丁<br>人均消费：9元</div>
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
                    imgsrc: require("../../assets/shitang/x1.jpg")
                },
                {
                    imgsrc: require("../../assets/shitang/x2.jpg")
                },
                {
                    imgsrc: require("../../assets/shitang/x3.jpg")
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