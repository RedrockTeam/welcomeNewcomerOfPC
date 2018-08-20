<template>
    <div class="tvideo">
        <div class="videobox">
            <video-player  class="video-player vjs-default-skin vjs-big-play-centered"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
            ></video-player>
        </div>

    </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import "../../assets/myvideo.css"
export default {
    components: {
        videoPlayer
    },
    props: ['typepath'],
    data() {
        return {
            playerOptions: {
                muted: false,
                language: "zh-CN",
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: this.typepath,
                poster: "",
                width: 690,
                height: 390
            }
        };
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player;
        }
    },
    methods: {
        
    },
    mounted () {
        let a = document.querySelector('.vjs-big-play-button');
        a.removeChild(a.firstChild);
    }
};
</script>
<style lang="less" scoped>
    .tvideo {
        width: 710px;
        height: 410px;
        box-shadow: 0 0 0 4px #432a92;
        border-radius: 2px;
        margin: 0 auto;
        background-color: #54c9f3;
        display: flex;
        .videobox {
            width:690px;
            height: 390px;
            margin: 10px;
            box-shadow: 0 0 0 4px #432a92;
            border-radius: 2px;
            position: relative;
            overflow: hidden;
        }
    }
</style>

