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
                    src: require('../../assets/xiaoshipin.mp4'),
                }
            ]
        }
    }
}
</script>