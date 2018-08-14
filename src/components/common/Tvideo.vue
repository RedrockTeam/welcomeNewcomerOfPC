<template>
        <video-player  class="video-player-box vjs-big-play-centered"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
        ></video-player>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
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
            }
        };
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player;
        }
    },
    methods: {
        
    }
};
</script>
