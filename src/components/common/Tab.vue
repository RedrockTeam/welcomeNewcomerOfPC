<template>
    <div class="tab">
        <div class="tab-header">
            <button
            v-for="(list, index) of tabList"
            :key="index"
            :class="['tab-button',{active: currentTab === list}]"
            @click="currentTab = list">{{ list.title }}</button>
        </div>
        <transition name="fade" mode="out-in"> <component
            :is="currentTab.component" keep-alive></component></transition>
    </div>
</template>

<script>
export default {
    props: {
        tabList: {
            type: Array
        }
    },
    data() {
        return {
            currentTab: this.tabList[0]
        }
    }
}
</script>

<style lang="less" scoped>
    .tab {
        width: 800px;
        min-height: 600px;
        padding: 30px 15px;
        background: #fffadd;
    }
    .tab-header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-button {
            width: 140px;
            height: 50px;
            background: rgb(252, 225, 108);
            border: none;
            font-size: 24px;
            color: #f89315;
            outline: none;
            &:first-child {
                border-radius: 20px 0 0 20px;
            }
            &:last-child {
                border-radius: 0 20px 20px 0;
            }
        }
        .active {
                color: #fff;
                background: rgb(125, 209, 248);
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
