<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'
import JiaoShiDaiBiao from './JiaoShiDaiBiao'

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
                component: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>