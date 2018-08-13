<template>
    <div class="style">
        <div class="title">
            <img src="../assets/ftstyle.png">
        </div>
        <style-tab :componentList="componentList"></style-tab>
    </div>
</template>

<script>
import StyleTab from '../components/Style/StyleTab'
import Student from '../components/Style/Student'
import SheTuan from '../components/Style/SheTuan'
import DaiBiao from '../components/Style/DaiBiao'
import FengGuang from '../components/Style/FengGuang'

export default {
    components: {
        StyleTab,
        Student,
        SheTuan,
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
                    title: require('../assets/stshetuan.png'),
                    name: 'shetuan',
                    component: SheTuan
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
        min-height: 2000px;
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
</style>