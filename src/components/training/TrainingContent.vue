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
                photo: require('../../assets/training/1.png'),
                content: '军训汇演'
            },
            t2: {
                photo: require('../../assets/training/2.png'),
                content: '敬礼'
            },
            t3: {
                photo: require('../../assets/training/3.png'),
                content: '正步'
            },
            t4: {
                photo: require('../../assets/training/4.png'),
                content: '齐步'
            },
            t5: {
                photo: require('../../assets/training/5.png'),
                content: '手语操'
            },
            t6: {
                photo: require('../../assets/training/6.png'),
                content: '军体拳'
            },
            t7: {
                photo: require('../../assets/training/7.png'),
                content: '格斗术'
            },
            t8: {
                photo: require('../../assets/training/8.png'),
                content: '站军姿'
            },
            t9: {
                photo: require('../../assets/training/9.png'),
                content: '防空演练'
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