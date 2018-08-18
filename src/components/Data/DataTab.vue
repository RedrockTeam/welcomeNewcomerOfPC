<template>
    <div class="data-tab">
        <div class="header">
            <div :class="['nannv', {active: currentComponent.name==='NanNv'}]" @click="currentComponent=NanNv"><img src="../../assets/nannvbili.png"></div>
            <div :class="['kemu', {active: currentComponent.name==='KeMu'}]" @click="currentComponent=KeMu"><img src="../../assets/zuinankemu.png"></div>
        </div>
        <div class="container">
            <component :is="currentComponent.component"></component>
        </div>
    </div>
</template>

<script>
import NanNv from './NanNv.vue'
import KeMu from './KeMu.vue'

export default {
    components: {
        NanNv,
        KeMu
    },
    data() {
        return {
            currentComponent: {
                name: 'NanNv',
                component: NanNv
            },
            KeMu: {
                name: 'KeMu',
                component: KeMu
            },
            NanNv: {
                name: 'NanNv',
                component: NanNv
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .data-tab {
        width: 1000px;
        height: 900px;
        background: url('../../assets/data-frame.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
    }
    .header {
        width: 615px;
        height: 180px;
        padding-top: 40px;
        padding-left: 190px;
        padding-right: 195px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nannv, .kemu {
        width: 200px;
        height: 80px;
        background: url('../../assets/activity-button.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        img {
            width: 120px;
            padding: 23px 0 0 30px;
        }
    }
    .container {
        width: 840px;
        height: 580px;
        padding-left: 80px;
        padding-right: 80px;
    }
    .active {
        background: url('../../assets/activity-button-active.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
