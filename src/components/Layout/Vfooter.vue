<template>
    <footer>
        <div class="content">
            <p>关于<a href="http://hongyan.cqupt.edu.cn/aboutus/" target="_blank">红岩网校</a> | <a href="" target="_blank">网站地图</a> | <a href="mailto:web@redrock.team" target="_blank">指出错误</a> | <a href="" target="_blank">管理入口</a></p>
            <p>本网站由红岩网校工作站负责开发，管理，不经红岩网校委员会书面同意，不得进行转载</p>
            <p>地址：重庆市南岸区崇文路2号（重庆邮电大学内） 400065 E-mail :redrock@cqupt.edu.cn (023-62461084)</p>
        </div>
        <div class="bottom">
            <div class="bottom-in">
                <div class="chilun1"></div>
                <div class="mid-chilun"></div>
                <div class="chilun2"></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    footer {
        width: 100%;
        height: 400px;
    }
    .content {
        width: 100%;
        height: 125px;
        padding: 2.5px 0;
        font-size: 14px;
        color: #fff;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        a{
            text-decoration: none;
            color: inherit;
        }
        p {
            height: 0px;
        }
    }
    .bottom {
        width: 100%;
        height: 270px;
        display: flex;
        align-items: flex-end;
    }
    .bottom-in {
        width: 1600px;
        display: flex;
        align-items: flex-end;
        margin: 0 auto;
    }
    .chilun1 {
        background: url('../../assets/footer-chilun1.png') no-repeat;
        background-size: 100% 100%;
        width: 200px;
        height: 200px;
    }
    .mid-chilun {
        background: url('../../assets/footer-mid.png') no-repeat;
        background-size: 100% 100%;
        width: 1000px;
        height: 250px;
        margin: 0 auto;
    }
    .chilun2 {
        background: url('../../assets/footer-chilun2.png') no-repeat;
        background-size: 100% 100%;
        width: 200px;
        height: 200px;
    }
</style>
