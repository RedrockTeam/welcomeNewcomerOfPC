<template>
    <tr-video :typepath="video2" class="player"></tr-video>
</template>

<script>
import TrVideo from "../common/Tvideo"

export default {
    components: {
        TrVideo
    },
    data() {
        return {
            video2: [
                {
                    type: "video/mp4",
                    src: require('../../assets/chongyoujunhun.mp4'),
                }
            ]
        }
    }
}
</script>