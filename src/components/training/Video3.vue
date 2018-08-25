<template>
    <tr-video :typepath="video3" class="player"></tr-video>
</template>

<script>
import TrVideo from "../common/Tvideo"

export default {
    components: {
        TrVideo
    },
    data() {
        return {
            video3: [
                {
                    type: "video/mp4",
                    src: '/nodejs/welcome2018/video/3.mp4',
                }
            ]
        }
    }
}
</script>