<template>
    <div class="tab">
        <div class="tab-header">
            <div
                :class="['button1', {active: $route.name === 'Smile'}]"
                @click="$router.push({name: 'Smile'})"><img src="../assets/fsmile.png"></div>
            <div
                :class="['button2', {active: $route.name === 'WenDa'}]"
                @click="$router.push({name: 'WenDa', params: {class: 'all', page: 1}})"><img src="../assets/fwenda.png"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {

    },
}
</script>

<style lang="less" scoped>
    .tab {
        width: 1000px;
        height: 1500px;
        background: url('../assets/activity-frame.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
    }
    .tab-header {
        width: 60%;
        height: 160px;
        margin: 0 auto;
        padding-top: 45px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .button1, .button2 {
        width: 220px;
        height: 75px;
        background: url('../assets/activity-button.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }
    .button1 img {
        transform: scale(0.8);
        padding: 20px 40px;
    }
    .button2 img {
        transform: scale(0.8);
        padding: 20px 0;
    }
    .active {
        background: url('../assets/activity-button-active.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
