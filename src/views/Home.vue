<template>
    <div class="home">
        <vmap class="map"></vmap>
        <home-activity class="activity"></home-activity>
        <div class="squares">
            <home-square-frame :obj="training" class="scale"></home-square-frame>
            <home-square-frame :obj="raiders" class="scale"></home-square-frame>
            <home-square-frame :obj="style" class="scale"></home-square-frame>
            <home-square-frame :obj="about" class="scale"></home-square-frame>
        </div>
        <div class="tube1"></div>
        <div class="tube2"></div>
        <div class="tube3"></div>
        <div class="tube4"></div>
        <div class="home-left-tube"></div>
        <div class="home-left-cqupt"></div>
        <div class="home-left-tube-logo"></div>
        <div class="home-left-circle"></div>
        <div class="home-right-tube"></div>
        <div class="home-bottom-line1"></div>
        <div class="home-bottom-line2"></div>
        <div class="home-bottom-chilun1"></div>
        <div class="home-bottom-chilun2"></div>
    </div>
</template>

<script>
    import HomeSquareFrame from '../components/common/HomeSquareFrame.vue'
    import HomeActivity from '../components/HomeActivity.vue'
    import Vmap from '../components/Vmap/Vmap.vue'

    export default {
        components: {
            Vmap,
            HomeSquareFrame,
            HomeActivity
        },
        data() {
            return {
                training: {
                    title: require('../assets/fttraining.png'),
                    icon: require('../assets/training-icon.png'),
                    content: '迈着矫健的步伐，挺拔身姿，跑道上留下他们坚定的足迹，重邮学子，他们像东方升起的旭日,续写着一段奋力拼搏的历史。',
                    path: '/training'
                },
                raiders: {
                    title: require('../assets/ftraiders.png'),
                    icon: require('../assets/raiders-icon.png'),
                    content: '最常用的官方网页和微信公众号，了解学校最新动态；最完整的火车站、 机场到学校的交通路线； 最推荐的寝室神器和学校周边美食地图。',
                    path: '/raiders'
                },
                style: {
                    title: require('../assets/ftstyle.png'),
                    icon: require('../assets/style-icon.png'),
                    content: '优秀教师和优秀学长学姐都在你身边，你会成为他们吗？重邮精彩原创视频等你来戳！',
                    path: '/style'
                },
                about: {
                    title: require('../assets/ftabout.png'),
                    icon: require('../assets/about-icon.png'),
                    content: '红岩网校工作站，让你看见互联网+和团队的力量。',
                    path: 'http://hongyan.cqupt.edu.cn/aboutus/'
                }
            }
        },
        mounted() {
            this.$emit('finish', 'success')
    }
}
</script>

<style lang="less" scoped>
    @keyframes rotate360 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .home {
        width: 1000px;
        height: 2950px;
        margin: 0 auto;
    }
    .map {
        position: relative;
        top: 0px;
        z-index: 3;
    }
    .activity {
        position: relative;
        top: 100px;
    }
    .squares {
        margin: 0 auto;
        width: 910px;
        height: 1250px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        top: 250px;
        z-index: 1;
    }
    .scale {
        transform: scale(1.2);
        
    }
    .tube1 {
        width: 200px;
        height: 500px;
        background: url('../assets/tube1.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -2290px;
        left: 860px;
        z-index: 4;
    }
    .tube2 {
        width: 200px;
        height: 300px;
        background: url('../assets/tube2.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -2590px;
        left: 25px;
        z-index: 2;
    }
    .tube3 {
        width: 100px;
        height: 390px;
        background: url('../assets/tube3.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -1955px;
        left: 960px;
        z-index: 6;
    }
    .tube4 {
        width: 150px;
        height: 400px;
        background: url('../assets/tube4.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -1700px;
        left: -40px;
        z-index: 6;
    }
    .home-left-tube {
        width: 280px;
        height: 3500px;
        background: url('../assets/home-left-tube.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -5055px;
        left: -230px;
        z-index: 0;
    }
    .home-left-cqupt {
        width: 180px;
        height: 130px;
        background: url('../assets/home-left-cqupt.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8340px;
        left: -210px;
    }
    .home-left-tube-logo {
        width: 160px;
        height: 150px;
        background: url('../assets/home-left-tube-logo.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -7250px;
        left: -155px;
    }
    .home-left-circle {
        width: 150px;
        height: 150px;
        background: url('../assets/home-left-circle.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -6300px;
        left: -195px;
        animation: rotate360  5s linear 0s infinite normal none running;
    }
    .home-right-tube {
        width: 145px;
        height: 2770px;
        background: url('../assets/home-right-tube.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8290px;
        left: 1080px;
        z-index: 0;
    }
    .home-bottom-line1 {
        width: 345px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8280px;
        left: -330px;
        z-index: 0;
    }
    .home-bottom-line2 {
        width: 350px;
        height: 70px;
        background: url('../assets/home-bottom-line.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8360px;
        left: 980px;
        z-index: 0;
    }
    .home-bottom-chilun1 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8430px;
        left: -190px;
        //animation: rotate1  5s linear 0s infinite normal none running;
    }
    .home-bottom-chilun2 {
        width: 100px;
        height: 80px;
        background: url('../assets/home-bottom-chilun.png') no-repeat;
        background-size:  100% 100%;
        position: relative;
        top: -8520px;
        left: 1100px;
    }
</style>