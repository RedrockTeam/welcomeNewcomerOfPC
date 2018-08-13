<template>
    <div>
        <photo-frame :obj=chenqiqi></photo-frame>
    </div>
</template>

<script>
import PhotoFrame from '../common/PhotoFrame'

export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            chenqiqi: {
                photo: require('../../assets/dom1.jpg'),
                content: '陈琪琪'
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
