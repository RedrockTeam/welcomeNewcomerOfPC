<template>
    <div class="training-tab">
        <div class="header">
            <div :class="['button', {active: currentComponent.name==='YearVideo'}]" @click="currentComponent=YearVideo">
                <img src="../../assets/linianshipin.png">
            </div>
            <div :class="['button', {active: currentComponent.name==='TrainingTips'}]" @click="currentComponent=TrainingTips">
                <img src="../../assets/junxuntieshi.png">
            </div>
            <div :class="['button', {active: currentComponent.name==='TrainingContent'}]" @click="currentComponent=TrainingContent">
                <img src="../../assets/xunlianneirong.png">
            </div>
            <div :class="['button', {active: currentComponent.name==='ArmyDiscipline'}]" @click="currentComponent=ArmyDiscipline">
                <img src="../../assets/junduijilv.png">
            </div>
        </div>
        <div class="container">
            <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
                <component :is="currentComponent.component"></component>
            </transition>
            <div class="source">资料来源于重邮小卫士</div>
        </div>
    </div>
</template>

<script>
    import TrainingContent from './TrainingContent'
    import ArmyDiscipline from './ArmyDiscipline'
    import YearVideo from './YearVideo'
    import TrainingTips from './TrainingTips'

    export default {
        props: {

        },
        components: {
            TrainingContent,
            ArmyDiscipline,
            YearVideo
        },
        data() {
            return {
                currentComponent: {
                    name: 'YearVideo',
                    component: YearVideo
                },
                YearVideo: {
                    name: 'YearVideo',
                    component: YearVideo
                },
                TrainingContent: {
                    name: 'TrainingContent',
                    component: TrainingContent
                },
                TrainingTips: {
                    name: 'TrainingTips',
                    component: TrainingTips
                },
                ArmyDiscipline: {
                    name: 'ArmyDiscipline',
                    component: ArmyDiscipline
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .training-tab {
        width: 1000px;
        height: 900px;
        background: url('../../assets/training-frame.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
    }

    .header {
        width: 865px;
        height: 155px;
        padding-top: 40px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .button {
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
        width: 850px;
        height: 680px;
        padding-left: 80px;
        padding-right: 70px;
    }

    .active {
        background: url('../../assets/activity-button-active.png') no-repeat;
        background-size: 100% 100%;
    }

    .source {
        color: #6550a7;
        font-size: 16px;
        width: 100%;
        text-align:center;
        position: relative;
        bottom: -105px;
        margin: 0 auto;
        user-select: none;
        opacity: 0.8;
    }
</style>