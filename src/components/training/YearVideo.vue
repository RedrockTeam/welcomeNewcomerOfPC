<template>
    <div class="yearvideo">
        <div class="videointrod">
            <video-intro @click.native="openvideo"></video-intro>
            <video-intro @click.native="openvideo"></video-intro>
            <video-intro @click.native="openvideo"></video-intro>
            <video-intro @click.native="openvideo"></video-intro>
            <video-intro @click.native="openvideo"></video-intro>
            <video-intro @click.native="openvideo"></video-intro>
        </div>
        <div class="mask" ref="mask"></div>
        <div class="trainingvideo" v-if="cansee">
            <tr-video :typepath="typepath"></tr-video>
            <div class="close" @click="closevideo">X</div>
        </div>
    </div>
</template>
<script>
import TrVideo from "../common/Tvideo"
import VideoIntro from "../common/videointro"
// import videojs from 'video.js';
// import '../../assets/video-js.css';
export default {
    data() {
        return {
            cansee: false,
            typepath: [
                {
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
                }
            ]
        }
    },
    components: {
        TrVideo,
        VideoIntro
    },
    methods: {
        closevideo() {
            this.cansee = false;
           this.$refs.mask.style.display = 'none';
        },
        openvideo() {
            this.cansee = true;
           this.$refs.mask.style.display = 'block';
        }
    }
}
</script>
<style lang="less" scoped>
.yearvideo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .videointrod{
        display: flex;
        flex-wrap:  wrap;
        justify-content: space-around;
        position: absolute;
        top: 0;
    }
}
.mask {
    background: black;
    opacity: 0.5;
    width: 800px;
    height: 600px;
    position: absolute;
    left: 0;
    top: -100px;
    display: none;
}
.trainingvideo {
        position: relative;
        z-index: 3;
}
.close {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
        cursor: pointer;
        color: red;
        font-size: 36px;
    }
</style>



