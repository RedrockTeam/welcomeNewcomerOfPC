<template>
    <top-bar :barList="barList"></top-bar>
</template>

<script>
import TopBar from '../common/TopBar'
import XingYeYuan2 from './XingYeYuan2'
import HongGaoLiang from './HongGaoLiang'
import QianXiHe from './QianXiHe'
import DaXiBei from './DaXiBei'
import ZhongXin from './ZhongXin'
import YanSheng from './YanSheng'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/qianxihe.png'),
                component: QianXiHe
            },
            {
                title: require('../../assets/xingyeyuan.png'),
                component: XingYeYuan2
            },
            {
                title: require('../../assets/daxibei.png'),
                component: DaXiBei
            },
            {
                title: require('../../assets/honggaoliang.png'),
                component: HongGaoLiang
            },
            {
                title: require('../../assets/yansheng.png'),
                component: YanSheng
            },
            {
                title: require('../../assets/zhongxin.png'),
                component: ZhongXin
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>