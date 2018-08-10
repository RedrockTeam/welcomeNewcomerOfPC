<template>
    <div class="activity">
        <div class="title"></div>
        <div class="frame1">
            <div class="frame-in">
                <div class="left"><img src="../assets/activity-icon1.png"></div>
                <div class="right">
                    <p>想知道重邮校园的秘密？想和学长学姐零距离接触？热心的学长学姐都在这里，他们是重邮小百 科，为你答疑解惑！</p>
                    <click-me class="button" path='/activity'></click-me>
                </div>
            </div>
            <div class="controlbar1"></div>
        </div>
        <div class="frame2">
            <div class="frame-in">
                <div class="left"><img src="../assets/activity-icon2.png"></div>
                <div class="right">
                    <p>萌新你好，欢迎来鲜肉集中营报道！听说这里有好多萌新的照片，也许Ta就是你未来的小伙伴~ 让美好的大学生活从一个微笑开始吧~</p>
                    <click-me class="button" path='/activity'></click-me>
                </div>
            </div>
            <div class="controlbar2"></div>
        </div>
    </div>
</template>

<script>
import ClickMe from './common/ClickMe'

export default {
    components: {
        ClickMe
    }
}
</script>

<style lang="less" scoped>
    .activity {
        width: 1000px;
        height: 800px;
        margin: 0 auto;
        z-index: 5;
        //background: #000;
    }
    .title {
        margin: 0 auto;
        width: 200px;
        height: 80px;
        background: url('../assets/home-activity-title.png') no-repeat;
        background-size: 100% 100%;
        transform: scale(1.2);
    }
    .frame1 {
        margin: 0 auto;
        width: 1000px;
        height: 340px;
        background: url('../assets/home-long-frame1.png') no-repeat;
        background-size: 100% 100%;
        margin-top: 13px;
        position: relative;
        &:hover {
            .controlbar1 {
                transform: rotate(10deg);
                transform-origin: 55px 0;
                top: 165px;
                right: -50px;
            }
        }
    }
    .frame-in {
        width: 844px;
        height: 227px;
        position: absolute;
        top: 75px;
        left: 83px;
        display: flex;
    }
    .controlbar1 {
        width: 75px;
        height: 55px;
        background: url('../assets/controlbar1.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 110px;
        right: -33px;
        transform: rotate(-90deg);
        transition: all .3s;
    }
    .left {
        width: 250px;
        height: 227px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 150px;
            height: 150px;
        }
    }
    .right {
        width: 594px;
        height: 167px;
        padding: 30px 0;
        font-size: 16px;
        color: #666666;
        position: relative;
        padding-right: 40px;
        p {
            line-height: 30px;
        }
    }
    .button {
        position: absolute;
        right: 40px;
        bottom: 40px;
    }
    .frame2 {
        margin: 0 auto;
        width: 1000px;
        height: 340px;
        background: url('../assets/home-long-frame2.png') no-repeat;
        background-size: 100% 100%;
        margin-top: 70px;
        position: relative;
        &:hover {
            .controlbar2 {
                transform: rotate(10deg);
                transform-origin: 55px 0;
                top: 165px;
                left: -45px;
            }
        }
    }
    .controlbar2 {
        width: 75px;
        height: 55px;
        background: url('../assets/controlbar2.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 130px;
        left: -30px;
        transform: rotate(90deg);
        transition: all .3s;
    }
</style>
