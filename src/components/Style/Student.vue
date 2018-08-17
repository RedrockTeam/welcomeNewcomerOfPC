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
                title: require('../../assets/xiaojizuzhi.png'),
                component: null
            },
            {
                title: require('../../assets/xueshengshetuan.png'),
                component: null
            },
            {
                title: require('../../assets/hongyanwangxiao.png'),
                component: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
