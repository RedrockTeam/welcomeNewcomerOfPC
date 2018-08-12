<template>
    <div class="activity">
        <div class="title"></div>
        <activity-tab></activity-tab>
        <div class="left-tube"></div>
        <div class="right-tube"></div>
        <div class="left-bottom"></div>
        <div class="right-bottom"></div>
        <div class="bottom-chilun1"></div>
        <div class="bottom-chilun2"></div>
    </div>
</template>

<script>
import ActivityTab from '../components/ActivityTab'

export default {
    components: {
        ActivityTab
    },
    data() {
        return {
                
        }
    },
    mounted() {
        this.$emit('finish', 'success')
        document.body.scrollTop = 800
        document.documentElement.scrollTop = 800
    },
    watch: {
        '$route' (to, from) {
            this.$emit('finish', 'success')
        }
    }
}
</script>

<style lang="less" scoped>
    .activity {
        width: 1000px;
        min-height: 1500px;
        max-height: 1850px;
        margin: 0 auto;
    }
    .title {
        width: 245px;
        height: 95px;
        margin: 0 auto;
        margin-bottom: 20px;
        background: url('../assets/home-activity-title.png') no-repeat;
        background-size: 100% 100%;
    }
    .left-tube {
        width: 280px;
        height: 2850px;
        background: url('../assets/activity-left-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -2360px;
        left: -220px;
        z-index: 0;
    }
    .right-tube {
        width: 145px;
        height: 2050px;
        background: url('../assets/activity-right-tube.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -4450px;
        left: 1080px;
        z-index: 0;
    }
    .left-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -5045px;
        left: -310px;
    }
    .right-bottom {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -5118px;
        left: 980px;
    }
    .bottom-chilun1 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -5200px;
        left: -180px;
    }
    .bottom-chilun2 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -5280px;
        left: 1110px;
    }
</style>