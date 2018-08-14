<template>
    <div class="style-tab">
        <div class="style-tab-header">
            <div
                v-for="list of componentList"
                :key="list.name"
                :class="['title', {active: currentComponent===list}]"
                @click="currentComponent=list">
                <img :src=list.title>
            </div>
        </div>
        <div class="style-container">
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
    .style-tab {
        width: 1000px;
        height: 1100px;
        background: url('../../assets/style-tab-frame.png') no-repeat;
        background-size: 100% 100%;
    }
    .style-tab-header {
        width: 855px;
        height: 145px;
        padding: 45px 75px 0px 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    .style-container {
        width: 855px;
        height: 850px;
        padding: 0 75px 50px 70px;
    }
    .active {
        background: url('../../assets/activity-button-active.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
