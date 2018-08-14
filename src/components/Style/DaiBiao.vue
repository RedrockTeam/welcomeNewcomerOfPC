<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'
import JiaoShiDaiBiao from './JiaoShiDaiBiao'
import XueShengDaiBiao from './XueShengDaiBiao'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/jiaoshidaibiao.png'),
                component: JiaoShiDaiBiao
            },
            {
                title: require('../../assets/xueshengdaibiao.png'),
                component: XueShengDaiBiao
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>