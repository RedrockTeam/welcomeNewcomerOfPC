<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/xingyeyuan.png'),
                component: null
            },
            {
                title: require('../../assets/honggaoliang.png'),
                component: null
            },
            {
                title: require('../../assets/qianxihe.png'),
                component: null
            },
            {
                title: require('../../assets/daxibei.png'),
                component: null
            },
            {
                title: require('../../assets/zhongxin.png'),
                component: null
            },
            {
                title: require('../../assets/yansheng.png'),
                component: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>