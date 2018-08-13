<template>
    <div class="teacher">
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
        <photo-frame :obj=chenqiqi class="photo"></photo-frame>
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
    .teacher {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
        max-height: 680px;
        overflow-y: scroll;
    }
    .photo {
        //margin: 10px;
        margin-bottom: 15px;
    }

//
    ::-webkit-scrollbar {
        width: 30px;
    }
</style>