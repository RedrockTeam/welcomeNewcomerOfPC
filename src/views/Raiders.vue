<template>
    <div class="raiders">
        <div class="title">
            <img src="../assets/ftraiders.png">
        </div>
        <raiders-tab :componentList="componentList"></raiders-tab>
        <div class="left-tube"></div>
        <div class="right-tube"></div>
        <div class="left-bottom"></div>
        <div class="right-bottom"></div>
        <div class="bottom-chilun1"></div>
        <div class="bottom-chilun2"></div>
    </div>
</template>

<script>
import RaidersTab from '../components/Raiders/RaidersTab'
import ShiTang from '../components/Raiders/ShiTang'
import ShengHuo from '../components/Raiders/ShengHuo'
import SuShe from '../components/Raiders/SuShe'
import AnQuan from '../components/Raiders/AnQuan'
import QingDan from '../components/Raiders/QingDan'

export default {
    components: {
        RaidersTab
    },
    data() {
        return {
            componentList: [
                {
                    title: require('../assets/xueshengsushe.png'),
                    name: 'xueshengsushe',
                    component: SuShe
                },
                {
                    title: require('../assets/xinshengqingdan.png'),
                    name: 'xinshengqingdan',
                    component: QingDan
                },
                {
                    title: require('../assets/xueshengshitang.png'),
                    name: 'xueshengshitang',
                    component: ShiTang
                },
                {
                    title: require('../assets/zhoubianfengjing.png'),
                    name: 'zhoubianfengjing',
                    component: null
                },
                {
                    title: require('../assets/qqqun.png'),
                    name: 'qqqun',
                    component: null
                },
                {
                    title: require('../assets/anquanshouze.png'),
                    name: 'anquanshouze',
                    component: AnQuan
                },
                {
                    title: require('../assets/chengcheluxian.png'),
                    name: 'chengcheluxian',
                    component: null
                },
                {
                    title: require('../assets/zhoubianshenghuo.png'),
                    name: 'zhoubianshenghuo',
                    component: ShengHuo
                }
            ]
        }
    },
    mounted() {
        this.$emit('finish', 'success')
        document.body.scrollTop = 880
        document.documentElement.scrollTop = 880
    }
}
</script>

<style lang="less" scoped>
    .raiders {
        width: 1000px;
        margin: 0 auto;
        max-height: 1415px;
    }
    .title {
        width: 245px;
        height: 95px;
        margin: 0 auto;
        background: url('../assets/title-frame.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        img {
            width: 140px;
            height: 33px;
        }
    }
    .left-tube {
        width: 290px;
        height: 2450px;
        background: url('../assets/style-left-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -1950px;
        left: -210px;
    }
    .right-tube {
        width: 155px;
        height: 1790px;
        background: url('../assets/style-right-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -3745px;
        left: 1040px;
    }
    .left-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4455px;
        left: -310px;
    }
    .right-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4530px;
        left: 980px;
    }
    .bottom-chilun1 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4605px;
        left: -167px;
    }
    .bottom-chilun2 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -4685px;
        left: 1075px;
    }
</style>