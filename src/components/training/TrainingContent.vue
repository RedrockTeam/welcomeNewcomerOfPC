<template>
    <div class="training-content">
        <photo-frame class="photo" :obj="t1"></photo-frame>
        <photo-frame class="photo" :obj="t2"></photo-frame>
        <photo-frame class="photo" :obj="t3"></photo-frame>
        <photo-frame class="photo" :obj="t4"></photo-frame>
        <photo-frame class="photo" :obj="t5"></photo-frame>
        <photo-frame class="photo" :obj="t6"></photo-frame>
        <photo-frame class="photo" :obj="t7"></photo-frame>
        <photo-frame class="photo" :obj="t8"></photo-frame>
        <photo-frame class="photo" :obj="t9"></photo-frame>
    </div>
</template>

<script>
import PhotoFrame from '../common/PhotoFrame.vue'

export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            t1: {
                photo: require('../../assets/training/汇报表演.jpg'),
                content: '汇报表演'
            },
            t2: {
                photo: require('../../assets/training/军体拳.jpg'),
                content: '军体拳'
            },
            t3: {
                photo: require('../../assets/training/拳头.jpg'),
                content: '拳头'
            },
            t4: {
                photo: require('../../assets/training/手语操.jpg'),
                content: '手语操'
            },
            t5: {
                photo: require('../../assets/training/网.jpg'),
                content: '网'
            },
            t6: {
                photo: require('../../assets/training/小马哥.jpg'),
                content: '小马哥'
            },
            t7: {
                photo: require('../../assets/training/训练.jpg'),
                content: '训练'
            },
            t8: {
                photo: require('../../assets/training/站军姿.jpg'),
                content: '站军姿'
            },
            t9: {
                photo: require('../../assets/training/正步.jpg'),
                content: '正步'
            }
        }
    }
}
</script>

<style <style lang="less" scoped>
    .training-content {
        display: flex;
        flex-wrap: wrap;
        margin-top: -10px;
        max-height: 660px;
        overflow-y: hidden;
    }
    .photo {
        margin-bottom: 12px;
        margin-right: 17.3px
    }
</style>