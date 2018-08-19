<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'
import QuanBu from './QuanBu'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/quanbu.png'),
                component: QuanBu
            },
            {
                title: require('../../assets/meishi.png'),
                component: null
            },
            {
                title: require('../../assets/jingse.png'),
                component: null
            },
            {
                title: require('../../assets/yinghang.png'),
                component: null
            },
            {
                title: require('../../assets/kuaidi.png'),
                component: null
            },
            {
                title: require('../../assets/chaoshi.png'),
                component: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>