<template>
    <div class="zuzhi">
        <side-bar :barList="barList"></side-bar>
    </div>
</template>

<script>
import SideBar from '../common/SideBar'
import BanGongShi from './BanGongShi'
import ZuZhiBu from './ZuZhiBu'
import XuanChuangBu from './XuanChuangBu'
import SheLian from './SheLian'
import KeLian from './KeLian'
import QingXie from './QingXie'
import XueShengHui from './XueShengHui'
import YiShuTuan from './YiShuTuan'

export default {
    components: {
        SideBar
    },
    data() {
        return {
            barList: [
                {
                    title: '团委办公室',
                    component: BanGongShi
                },
                {
                    title: '团委组织部',
                    component: ZuZhiBu
                },
                {
                    title: '团委宣传部',
                    component: XuanChuangBu
                },
                {
                    title: '学生社团联合会',
                    component: SheLian
                },
                {
                    title: '学生科技联合会',
                    component: KeLian
                },
                {
                    title: '青年志愿者协会',
                    component: QingXie
                },
                {
                    title: '学生会',
                    component: XueShengHui
                },
                {
                    title: '大学生艺术团',
                    component: YiShuTuan
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
