<template>
    <div class="zuzhi">
        <side-bar :barList="barList"></side-bar>
    </div>
</template>

<script>
import SideBar from '../common/SideBar'

export default {
    components: {
        SideBar
    },
    data() {
        return {
            barList: [
                {
                    title: '科技联合会',
                    component: null
                },
                {
                    title: '青年志愿者协会',
                    component: null
                },
                {
                    title: '团委各部室',
                    component: null
                },
                {
                    title: '社团联合部',
                    component: null
                },
                {
                    title: '校学生会',
                    component: null
                },
                {
                    title: '大学生艺术团',
                    component: null
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .zuzhi {
        width: 99.4%;
        height: 770px;
        border: solid 6px #432a92;
        border-top: none;
        background: #d5fbff;
    }
</style>
