<template>
    <div class="training">
        <div class="title">
            <img src="../assets/fttraining.png">
        </div>
        <!-- <tab :tabList="list" class="tabl"></tab> -->
        <!-- <tab :tabList="list"></tab> -->
        <!-- <div class="title"></div> -->
        <training-tab></training-tab>
        <div class="left-tube"></div>
        <div class="right-tube"></div>
        <div class="left-bottom"></div>
        <div class="right-bottom"></div>
        <div class="bottom-chilun1"></div>
        <div class="bottom-chilun2"></div>
    </div>
</template>

<script>
import Tab from '../components/common/Tab.vue'
import YearVideo from '../components/training/YearVideo'
import TrainingTips from '../components/training/TrainingTips.vue'
import TrainingContent from '../components/training/TrainingContent.vue'
import ArmyDiscipline from '../components/training/ArmyDiscipline.vue'
import TrainingTab from '../components/training/TrainingTab'

export default {
    components: {
        Tab,
        TrainingTab
    },
    data() {
        return {
            list : [
                {
                    title: "历年视频",
                    component: YearVideo
                },
                {
                    title: "军训小贴士",
                    component: TrainingTips
                },
                {
                    title: "训练内容",
                    component: TrainingContent
                },
                {
                    title: "军队纪律",
                    component: ArmyDiscipline
                },
            ]
        }
    },
    mounted() {
        this.$emit('finish', 'success')
        document.body.scrollTop = 880
        document.documentElement.scrollTop = 880
    }
}
</script>

<style lang="less" scoped>
    .tabl {
        margin-left: 20%;
    .training {
        width: 1000px;
        margin: 0 auto;
        max-height: 1220px;
    }
    // .title {
    //     width: 245px;
    //     height: 95px;
    //     margin: 0 auto;
    //     background: url('../assets/title-frame.png') no-repeat;
    //     background-size: 100% 100%;
    //     margin-bottom: 20px;
    // }
    .left-tube {
        width: 290px;
        height: 2450px;
        background: url('../assets/style-left-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -1950px;
        left: -210px;
    }
    .right-tube {
        width: 140px;
        height: 1450px;
        background: url('../assets/style-right-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -3545px;
        left: 1040px;
    }
    .left-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4105px;
        left: -310px;
    }
    .right-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4180px;
        left: 980px;
    }
    .bottom-chilun1 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4255px;
        left: -167px;
    }
    .bottom-chilun2 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4335px;
        left: 1065px;
    }
     .title {
        width: 245px;
        height: 95px;
        margin: 0 auto;
        background: url('../assets/title-frame.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        img {
            width: 140px;
            height: 33px;
        }
     }
     }
</style>