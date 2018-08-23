<template>
    <div class="yearvideo">
        <transition enter-active-class="animated zoomIn faster" leave-active-class="animated zoomOut faster" mode="out-in">
            <component :is="currentVideo"></component>
        </transition>
        <div class="video-tab">
            <div :class="['button', {active: currentVideo===Video1}]" @click="currentVideo=Video1">重邮2017级军训汇演</div>
            <div :class="['button', {active: currentVideo===Video2}]" @click="currentVideo=Video2">重邮2017军训宣传片</div>
            <div :class="['button', {active: currentVideo===Video3}]" @click="currentVideo=Video3">重庆邮电大学军训片段</div>
        </div>
    </div>
</template>
<script>
import TrVideo from "../common/Tvideo"
import Video1 from './Video1'
import Video2 from './Video2'
import Video3 from './Video3'

export default {
    data() {
        return {
            currentVideo: Video1,
            Video1: Video1,
            Video2: Video2,
            Video3: Video3
        }
    },
    components: {
        TrVideo
    },
}
</script>
<style lang="less" scoped>
    .player {
        margin-top: 30px;
    }
    .video-tab {
        width: 710px;
        height: 100px;
        margin: 0 auto;
        padding-top: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button {
        width: 140px;
        height: 80px;
        background: #d5fbff;
        border: solid 3px #5249a4;
        border-radius: 6px;
        color: #442c93;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        padding: 0 25px;

        &:hover {
            background: #559bde;
            color: #fff;
        }
    }
    .active {
        background: #559bde;
        color: #fff;
    }
</style>



