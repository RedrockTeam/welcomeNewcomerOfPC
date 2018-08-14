<template>
    <div>
        <div class="top-bar">
            <div
                :class="['bar-button', {active: currentComponent===list}]"
                v-for="(list, index) of barList"
                :key="index"
                @click="currentComponent=list"><img :src="list.title"></div>
        </div>
        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
            <component :is="currentComponent.component"></component>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        barList: {
            type: Array
        }
    },
    data() {
        return {
            currentComponent: this.barList[0]
        }
    }
}
</script>

<style lang="less" scoped>
    .top-bar {
        width: 100%;
        height: 65px;
        border: solid 3.5px #33157b;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        background: #93ece6;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bar-button {
        flex: 1;
        height: 48px;
        margin: 0 2px;
        border: solid 3.5px #33157b;
        background: #54c9f3;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .3s;
        &:first-child {
            border-top-left-radius: 8px;
            margin-left: 4px;
        }
        &:last-child {
            border-top-right-radius: 8px;
            margin-right: 4px;
        }
        &:hover {
            background: #098ad8;
            transform: scale(1.02);
        }
    }
    .active {
        background: #098ad8;
    }
</style>
