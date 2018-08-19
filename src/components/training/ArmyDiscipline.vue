<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
    import TopBar from '../common/TopBar.vue'
    import QingJiaZhiDu from './QingJiaZhiDu.vue'
    import ZuoXi from './ZuoXi'

    export default {
        components: {
            TopBar
        },
        data() {
            return {
                barList: [
            {
                title: require('../../assets/qingjiazhidu.png'),
                component: QingJiaZhiDu
            },
            {
                title: require('../../assets/zuoxishijian.png'),
                component: ZuoXi
            }]
            }
        }
    }
</script>

<style lang="less" scoped>
    .army-discipline {
        width: 100%;

    }
</style>
