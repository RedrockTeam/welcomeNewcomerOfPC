<template>
    <div
        :class="['click-me animated slow', {active: isActive}, {swing: isActive}]"
        @mouseover="isActive=true"
        @mouseout="isActive=false"
        @click="goPath(path)"></div>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            default: '/'
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        //TODO: 利用正则判断外链
        goPath(path) {
            if (path !== 'http://hongyan.cqupt.edu.cn/aboutus/') {
                this.$router.push(path)
            }
            else {
                window.open(path)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .click-me {
        width: 115px;
        height: 53px;
        background: url('../../assets/clickme.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        transition: background .8s;
        a {
            width: 115px;
            height: 53px;
        }
    }
    .active {
        background: url('../../assets/clickme-active.png') no-repeat;
        background-size: 100% 100%;
        transition: background .8s;
    }
</style>
