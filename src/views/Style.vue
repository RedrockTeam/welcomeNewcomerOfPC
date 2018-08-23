<template>
    <div class="style">
        <div class="title">
            <img src="../assets/ftstyle.png">
        </div>
        <style-tab :componentList="componentList"></style-tab>
        <div class="left-tube"></div>
        <div class="right-tube"></div>
        <div class="left-bottom"></div>
        <div class="right-bottom"></div>
        <div class="bottom-chilun1"></div>
        <div class="bottom-chilun2"></div>
    </div>
</template>

<script>
import StyleTab from '../components/Style/StyleTab'
import Student from '../components/Style/Student'
import ShiPin from '../components/Style/ShiPin'
import DaiBiao from '../components/Style/DaiBiao'
import FengGuang from '../components/Style/FengGuang'

export default {
    components: {
        StyleTab,
        Student,
        ShiPin,
        DaiBiao,
        FengGuang
    },
    data() {
        return {
            componentList: [
                {
                    title: require('../assets/ststudent.png'),
                    name: 'student',
                    component: Student
                },
                {
                    title: require('../assets/stshipin.png'),
                    name: 'shetuan',
                    component: ShiPin
                },
                {
                    title: require('../assets/stdaibiao.png'),
                    name: 'daibiao',
                    component: DaiBiao
                },
                {
                    title: require('../assets/stfengguang.png'),
                    name: 'fengguang',
                    component: FengGuang
                }]
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
    .style {
        width: 1000px;
        margin: 0 auto;
        max-height: 1315px;
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
        width: 155px;
        height: 1790px;
        background: url('../assets/style-right-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -3745px;
        left: 1040px;
    }
    .left-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4455px;
        left: -310px;
    }
    .right-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4530px;
        left: 980px;
    }
    .bottom-chilun1 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4605px;
        left: -167px;
    }
    .bottom-chilun2 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4685px;
        left: 1075px;
    }
</style>