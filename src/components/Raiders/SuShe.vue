<template>
    <div class="sushe">
        <top-bar :barList="barList"></top-bar>
        <lunbo class="lun-bo"></lunbo>
    </div>
</template>

<script>
import TopBar from '../common/TopBar'
import lunbo from '../common/lunbo'
export default {
    components: {
        TopBar,
        lunbo
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
    .sushe {
        .lun-bo {
            position: absolute;
            left: 50%;
            margin-top: 55px;
            transform: translate(-50%)
        }
    }
</style>