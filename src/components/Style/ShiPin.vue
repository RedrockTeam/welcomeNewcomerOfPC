<template>
    <div class="video">
        <cqupt-video :obj="v1" class="obj"></cqupt-video>
        <cqupt-video :obj="v2" class="obj"></cqupt-video>
        <cqupt-video :obj="v3" class="obj"></cqupt-video>
        <cqupt-video :obj="v6" class="obj"></cqupt-video>
        <cqupt-video :obj="v7" class="obj"></cqupt-video>
        <cqupt-video :obj="v9" class="obj"></cqupt-video>
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
            v1: {
                photo: require('../../assets/cquptvideo/1.png'),
                link: 'https://v.qq.com/x/page/i0518koxz3b.html',
                content: '重邮2017招生宣传片'
            },
            v2: {
                photo: require('../../assets/cquptvideo/2.png'),
                link: 'https://v.qq.com/x/page/b0556ldsq1r.html',
                content: '重邮2017级学生军训汇演'
            },
            v3: {
                photo: require('../../assets/cquptvideo/3.png'),
                link: 'https://v.qq.com/x/page/o05597e7vw2.html',
                content: '2017红岩网校工作站招新视频'
            },
            v6: {
                photo: require('../../assets/cquptvideo/6.png'),
                link: 'https://v.qq.com/x/page/p0157qsmcuj.html',
                content: '鸟瞰新重邮'
            },
            v7: {
                photo: require('../../assets/cquptvideo/7.png'),
                link: 'https://v.qq.com/x/page/u061866c94o.html',
                content: '[樱繁·春日斜] 重庆邮电大学 2018樱花季'
            },
            v9: {
                photo: require('../../assets/cquptvideo/9.png'),
                link: 'https://v.qq.com/x/page/p0161krhz05.html',
                content: '『都市探索者』航拍重邮第九届校运会'
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
