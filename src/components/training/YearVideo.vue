<template>
    <div class="yearvideo">
        <tr-video :typepath="typepath"></tr-video>
    </div>
</template>
<script>
import TrVideo from "../common/Tvideo"
export default {
    data() {
        return {
            typepath: [
                {
                    type: "video/mp4",
                    src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
                }
            ],
        }
    },
    components: {
        TrVideo,
    },
}
</script>
<style lang="less" scoped>

</style>



