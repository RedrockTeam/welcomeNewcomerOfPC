<template>
    <div class="fengguang">
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
        <photo-frame :obj="bieyoudongtian" class="photo"></photo-frame>
    </div>
</template>

<script>
import PhotoFrame from '../../components/common/PhotoFrame'
export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            bieyoudongtian: {
                photo: require('../../assets/dom1.jpg'),
                content: '别有洞天'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .fengguang {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        //justify-content: space-between;
        max-height: 800px;
        overflow-y: scroll;
    }
    .photo {
        margin-bottom: 15px;
        margin-right: 7px;
    }
    //
    ::-webkit-scrollbar {
        width: 30px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }
    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
</style>
