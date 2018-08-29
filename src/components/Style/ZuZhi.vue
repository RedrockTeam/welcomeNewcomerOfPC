<template>
    <div class="zuzhi">
        <select id="select">
                <option value=0>团委办公室</option>
                <option value=1>团委组织部</option>
                <option value=2>团委宣传部</option>
                <option value=3>学生社团联合会</option>
                <option value=4>学生科技联合会</option>
                <option value=5>青年志愿者协会</option>
                <option value=6>学生会</option>
                <option value=7>大学生艺术团</option>
                <option value=8>学业互助中心</option>
                <option value=9>勤工助学中心</option>
                <option value=10>重邮e站微+平台</option>
                <option value=11>心理互助中心</option>
                <option value=12>学生宿舍自我管理与服务委员会</option>
                <option value=13>党委学工部/学生处学工助理团</option>
                <option value=14>电视台</option>
                <option value=15>新媒体工作站</option>
                <option value=16>学生通讯社</option>
                <option value=17>阳光校园广播台</option>
        </select>
        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
            <component :is="barList[index].component" class="xszz"></component>
        </transition>
    </div>
</template>

<script>
import SideBar from '../common/SideBar'
import BanGongShi from './zuzhi/BanGongShi'
import ZuZhiBu from './zuzhi/ZuZhiBu'
import XuanChuangBu from './zuzhi/XuanChuangBu'
import SheLian from './zuzhi/SheLian'
import KeLian from './zuzhi/KeLian'
import QingXie from './zuzhi/QingXie'
import XueShengHui from './zuzhi/XueShengHui'
import YiShuTuan from './zuzhi/YiShuTuan'
import XueYe from './zuzhi/XueYe'
import QinGong from './zuzhi/QinGong'
import Ezhan from './zuzhi/Ezhan'
import XinLi from './zuzhi/XinLi'
import SuGuan from './zuzhi/SuGuan'
import XueGong from './zuzhi/XueGong'
import DianShi from './zuzhi/DianShi'
import MeiTi from './zuzhi/MeiTi'
import TongXun from './zuzhi/TongXun'
import YangGuang from './zuzhi/YangGuang'

export default {
    components: {
        SideBar,
    },
    data() {
        return {
            selected: "团委办公室",
            index: 0,
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
                },
                {
                    title: '学业互助中心',
                    component: XueYe
                },
                {
                    title: '勤工助学中心',
                    component: QinGong
                },
                {
                    title: '重邮e站微+平台',
                    component: Ezhan
                },
                {
                    title: '心理互助中心',
                    component: XinLi
                },
                {
                    title: '学生宿舍自我管理与服务委员会',
                    component: SuGuan
                },
                {
                    title: '党委学工部/学生处学工助理团',
                    component: XueGong
                },

                {
                    title: '电视台',
                    component: DianShi
                },
                {
                    title: '新媒体工作站',
                    component: MeiTi
                },
                {
                    title: '学生通讯社',
                    component: TongXun
                },
                {
                    title: '阳光校园广播台',
                    component: YangGuang
                },
            ]
        }
    },
    mounted () {
        var select = document.getElementById("select");
        select.onchange = () => {
            this.index = select.value;
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
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #select {
        width: 270px;
        height: 40px;
        border: solid 3px #432a92;
        outline: none;
        border-radius: 5px;
        border-right: none;
        font-size: 14px;
        padding-left: 10px;
        color: #331f75;
        background:url("../../assets/select.png") no-repeat scroll right center #d5fbff;
        position: absolute;
        right: 50px;
        top: 20px;
        cursor: pointer;
        option {
            color: #331f75;
        }
        /*清除select默认样式*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        -ms-appearance:none;
    }
    .xszz {
        position: relative;
        top: 50px;
        margin: 0 auto;
    }
    ::-webkit-scrollbar {
        width: 30px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }
    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
</style>
