<template>
    <div class="video">
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
        <cqupt-video :obj="test" class="obj"></cqupt-video>
    </div>
</template>

<script>
import CquptVideo from '../common/CquptVideo'

export default {
    components: {
        CquptVideo
    },
    data() {
        return {
            test: {
                photo: require('../../assets/dom1.jpg'),
                link: 'http://baidu.com',
                content: '舌尖上的重邮'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .video {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
        max-height: 750px;
        overflow-y: scroll;
    }
    .obj {
        margin-bottom: 15px;
        margin-right: 10px;
        //transform: scale(0.95);
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
