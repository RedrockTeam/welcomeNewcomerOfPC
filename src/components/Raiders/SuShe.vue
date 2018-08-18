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
                title: require('../../assets/zhixingyuan.png'),
                component: null
            },
            {
                title: require('../../assets/mingliyuan.png'),
                component: null
            },
            {
                title: require('../../assets/ningjingyuan.png'),
                component: null
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>