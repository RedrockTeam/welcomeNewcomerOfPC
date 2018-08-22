<template>
    <div class="lifecard">
        <img :src="lifelist.mainimg" class="lifeimg">
        <p class="lifefont">{{lifelist.textimg}}</p>
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
                        textimg: "南山一棵树风景区",
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
        .lifeimg {
            width: 370px;
            height: 172px;
            margin-bottom: 17px; 
            margin-bottom: 5px;
        }
        p {
            margin-top: 5px;
            margin-bottom: 5px;
            font-size: 14px;
            color: #6256a3;
        }
        .lifefont {
            font-size: 18px;
            margin: 0;
        }
    }
</style>