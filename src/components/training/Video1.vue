<template>
    <tr-video :typepath="video1" class="player"></tr-video>
</template>

<script>
import TrVideo from "../common/Tvideo"

export default {
    components: {
        TrVideo
    },
    data() {
        return {
            video1: [
                {
                    type: "video/mp4",
                    src: '/nodejs/welcome2018/video/1.mp4',
                }
            ]
        }
    }
}
</script>