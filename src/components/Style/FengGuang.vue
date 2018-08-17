<template>
    <div class="fengguang">
        <photo-frame :obj="f1" class="photo"></photo-frame>
        <photo-frame :obj="f2" class="photo"></photo-frame>
        <photo-frame :obj="f3" class="photo"></photo-frame>
        <photo-frame :obj="f4" class="photo"></photo-frame>
        <photo-frame :obj="f5" class="photo"></photo-frame>
        <photo-frame :obj="f6" class="photo"></photo-frame>
        <photo-frame :obj="f7" class="photo"></photo-frame>
        <photo-frame :obj="f8" class="photo"></photo-frame>
        <photo-frame :obj="f9" class="photo"></photo-frame>
        <photo-frame :obj="f10" class="photo"></photo-frame>
        <photo-frame :obj="f11" class="photo"></photo-frame>
        <photo-frame :obj="f12" class="photo"></photo-frame>
        <photo-frame :obj="f13" class="photo"></photo-frame>
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
            f1: {
                photo: require('../../assets/fengguang/八十万.png'),
                content: '八十万'
            },
            f2: {
                photo: require('../../assets/fengguang/别有洞天.png'),
                content: '别有洞天'
            },
            f3: {
                photo: require('../../assets/fengguang/春华秋实.png'),
                content: '春华秋实'
            },
            f4: {
                photo: require('../../assets/fengguang/二教夕阳.png'),
                content: '二教夕阳'
            },
            f5: {
                photo: require('../../assets/fengguang/高山流水.png'),
                content: '高山流水'
            },
            f6: {
                photo: require('../../assets/fengguang/林荫大道.png'),
                content: '林荫大道'
            },
            f7: {
                photo: require('../../assets/fengguang/落英缤纷.png'),
                content: '落英缤纷'
            },
            f8: {
                photo: require('../../assets/fengguang/鸟瞰重邮.png'),
                content: '鸟瞰重邮'
            },
            f9: {
                photo: require('../../assets/fengguang/情人坡.png'),
                content: '情人坡'
            },
            f10: {
                photo: require('../../assets/fengguang/数字图书馆.png'),
                content: '数字图书馆'
            },
            f11: {
                photo: require('../../assets/fengguang/仰望八教.png'),
                content: '仰望八教'
            },
            f12: {
                photo: require('../../assets/fengguang/逸夫楼.png'),
                content: '逸夫楼'
            },
            f13: {
                photo: require('../../assets/fengguang/雨红莲.png'),
                content: '雨红莲'
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
        max-height: 800px;
        overflow-y: scroll;
    }
    .photo {
        margin-bottom: 15px;
        margin-right: 9px;
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
