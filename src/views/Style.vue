<template>
    <div class="style">
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
    }
}
</script>

<style lang="less" scoped>
    .style {
        width: 1000px;
        margin: 0 auto;
        min-height: 2000px;
    }
</style>