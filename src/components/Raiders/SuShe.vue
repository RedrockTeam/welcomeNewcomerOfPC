<template>
    <div class="sushe">
        <top-bar :barList="barList"></top-bar>
    </div>
</template>

<script>
import TopBar from '../common/TopBar'
import XingYeYuan from './XingYeYuan'
import ZhiXingYuan from './ZhiXingYuan'
import MingLiYuan from './MingLiYuan'
import NingJingYuan from './NingJingYuan'

export default {
    components: {
        TopBar,
    },
    data() {
        return {
            barList: [
            {
                title: require('../../assets/xingyeyuan.png'),
                component: XingYeYuan
            },
            {
                title: require('../../assets/zhixingyuan.png'),
                component: ZhiXingYuan
            },
            {
                title: require('../../assets/mingliyuan.png'),
                component: MingLiYuan
            },
            {
                title: require('../../assets/ningjingyuan.png'),
                component: NingJingYuan
            }]
        }
    }
}
</script>

<style lang="less" scoped>
    .sushe {
        .lun-bo {
            position: absolute;
            left: 50%;
            margin-top: 55px;
            transform: translate(-50%)
        }
    }
</style>