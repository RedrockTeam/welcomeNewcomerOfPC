<template>
    <div class="training">
        <div class="title">
            <img src="../assets/fttraining.png">
        </div>
        <tab :tabList="list" class="tabl"></tab>
    </div>
</template>

<script>
import Tab from '../components/common/Tab.vue'
import YearVideo from '../components/training/YearVideo'
import TrainingTips from '../components/training/TrainingTips.vue'
import TrainingContent from '../components/training/TrainingContent.vue'
import ArmyDiscipline from '../components/training/ArmyDiscipline.vue'
export default {
    components: {
        Tab,
    },
    data() {
        return {
            list : [
                {
                    title: "历年视频",
                    component: YearVideo
                },
                {
                    title: "军训小贴士",
                    component: TrainingTips
                },
                {
                    title: "训练内容",
                    component: TrainingContent
                },
                {
                    title: "军队纪律",
                    component: ArmyDiscipline
                },
            ]
        }
    },
    mounted() {
        this.$emit('finish', 'success')
    }
}
</script>

<style lang="less" scoped>
    .tabl {
        margin-left: 20%;
    }
     .title {
        width: 245px;
        height: 95px;
        margin: 0 auto;
        background: url('../assets/title-frame.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        img {
            width: 140px;
            height: 33px;
        }
    }
</style>