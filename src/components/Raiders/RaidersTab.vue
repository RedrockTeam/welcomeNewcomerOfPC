<template>
    <div class="raiders-tab">
        <div class="raiders-tab-header">
            <div
                v-for="list of componentList"
                :key="list.name"
                :class="['title', {active: currentComponent===list}]"
                @click="currentComponent=list">
                <img :src=list.title>
            </div>
        </div>
        <div class="raiders-container">
            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
                <component :is="currentComponent.component"></component>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        componentList: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            currentComponent: this.componentList[0],
        }
    }
}
</script>

<style lang="less" scoped>
    .raiders-tab {
        width: 1000px;
        height: 1100px;
        background: url('../../assets/style-tab-frame.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
    }
    .raiders-tab-header {
        width: 855px;
        height: 195px;
        padding: 65px 75px 0px 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .title {
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
    .raiders-container {
        width: 855px;
        height: 800px;
        padding: 0 75px 50px 70px;
    }
    .active {
        background: url('../../assets/activity-button-active.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
