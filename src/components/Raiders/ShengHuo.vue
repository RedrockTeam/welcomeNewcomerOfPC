<template>
    <div>
        <top-bar :barList="barList"></top-bar>
    </div>
</template>

<script>
import TopBar from '../common/TopBar'
import MeiShi from './MeiShi'
import JingSe from './JingSe'
import YinHang from './YinHang'
import KuaiDi from "./KuaiDi"
import ChaoShi from "./ChaoShi";
export default {
    components: {
        TopBar,
        MeiShi,
        JingSe,
        YinHang,
        KuaiDi,
        ChaoShi
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/meishi.png'),
                component: MeiShi
            },
            {
                title: require('../../assets/jingse.png'),
                component: JingSe
            },
            {
                title: require('../../assets/yinghang.png'),
                component: YinHang
            },
            {
                title: require('../../assets/kuaidi.png'),
                component: KuaiDi
            },
            {
                title: require('../../assets/chaoshi.png'),
                component: ChaoShi
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>