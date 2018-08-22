<template>
    <div class="smile">
        <div class="logo"></div>
        <div class="main">
            <div class="tips">
                <div class="title"><img src="../assets/huodongzhuti.png"></div>
                <p>晒出萌新照，为班级集赞</p>
            </div>
            <div class="tips">
                <div class="title"><img src="../assets/cangyuduixiang.png"></div>
                <p>2018级所有小鲜肉可上传照片，全体在校学生参与点赞</p>
            </div>
            <div class="tips">
                <div class="title"><img src="../assets/huodongshijian.png"></div>
                <p>2018年8月26日——2018年9月14日24:00</p>
            </div>
            <div class="tips">
                <div class="title"><img src="../assets/cangyufangshi.png"></div>
                <p>关注微信公众号重邮小帮手，进入“线上互动”,点击“最美班级墙”，即可上传照片。</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .smile {
        width: 832px;
        height: 1227px;
        padding: 4px 75px 60px 91px;
    }
    .logo {
        width: 826px;
        height: 460px;
        background: url('../assets/smile.jpg') no-repeat;
        background-size: 100% 100%;
        border: solid 4.5px #432a92;
    }
    .main {
        width: 90%;
        height: 260px;
        background: #d5fbff;
        margin-top: 40px;
        border: solid 4.5px #432a92;
        padding: 40px 5%;
    }
    .tips {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        //margin-bottom: 20px;
        p {
            padding: 0 30px;
            font-size: 16px;
            color: #4c7ac3;
        }
    }
    .title {
        img {
            width: 100px;
        }
    }
</style>
