<template>
    <div>
        <top-bar :barList="barList"></top-bar>
        <life-card></life-card>
    </div>
</template>

<script>
import TopBar from '../common/TopBar'
import QuanBu from './QuanBu'
import LifeCard from '../common/LifeCard'
export default {
    components: {
        TopBar,
        LifeCard
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