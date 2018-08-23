<template>
    <div class="lifecard">
        <img :src="lifelist.mainimg" class="lifeimg" alt="图片跑丢了">
        <img :src="lifelist.textimg" alt="图片走丢了" class="lifefont">
        <p>{{lifelist.message1}}</p>
        <p>{{lifelist.message2}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            lifelist: {
                type: Object,
                default: function (){
                    return {
                        mainimg:require("../../assets/lunbo-test1.png"),
                        textimg: "",
                        message1:"简介：重庆南山一棵树观景台位于南岸区王家山脉临江半山腰处，与重庆主城区隔江相望，是重庆都市旅游的必到之地。在这里可以看见重庆城这座山水之城的起伏面貌。",
                        message2: "人均消费：10元"
                    }
                }
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less" scoped>
    .lifecard {
        width: 370px;
        height: 315px;
        background-color: #d5fbff;
        margin-top: 12px;
        margin-bottom: 6px;
        border: 3px solid #432a92;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
        overflow: hidden;
        .lifeimg {
            width: 364px;
            height: 172px;
            border: solid 3px #432a92;
        }
        p {
            margin-top: 5px;
            margin-bottom: 5px;
            font-size: 14px;
            color: #503b90;
        }
        .lifefont {
            margin-top: 10px;
        }
    }
</style>