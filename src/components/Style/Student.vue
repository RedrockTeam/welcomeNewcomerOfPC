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
                components: null
            },
            {
                title: require('../../assets/xueshengshetuan.png'),
                components: null
            },
            {
                title: require('../../assets/hongyanwangxiao.png'),
                components: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
