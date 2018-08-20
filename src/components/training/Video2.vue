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
                    type: "video/ogg",
                    src: "http://www.w3school.com.cn/i/movie.ogg",
                }
            ]
        }
    }
}
</script>