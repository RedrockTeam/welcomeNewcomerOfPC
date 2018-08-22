<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'
import ZuZhi from './ZuZhi'
import HongYan from './HongYan'
import XueShengSheTuan from './XueShengSheTuan'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/xiaojizuzhi.png'),
                component: ZuZhi
            },
            {
                title: require('../../assets/hongyanwangxiao.png'),
                component: HongYan
            },
            {
                title: require('../../assets/xueshengshetuan.png'),
                component: XueShengSheTuan
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
