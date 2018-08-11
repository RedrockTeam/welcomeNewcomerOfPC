<template>
    <transition
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutUp faster">
        <div class="go-top" 
            @click="goTop"
            v-show="show"
            :style="{left: screenWidth / 2 + 550 + 'px'}">
            <div class="gotop1"></div>
            <div class="gotop2 animated infinite"></div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['screenWidth'],
    data() {
        return {
            timer: null,
            speed: 50,  //数值越小越快
            show: false,
            showHeight: 300, //显示的高度,
        }
    },
    methods: {
        goTop() {
            //兼容了部分浏览器
            if (!document.body.scrollTop) {
                var length = document.documentElement.scrollTop / this.speed
                this.timer = setInterval(() => {
                    if (!document.documentElement.scrollTop <= 0) {
                        document.documentElement.scrollTop -= length
                    }
                    else {
                        clearInterval(this.timer)
                    }
                })
            }
            else {
                var length = document.body.scrollTop / this.speed
                this.timer = setInterval(() => {
                    if (!document.body.scrollTop <= 0) {
                        document.body.scrollTop -= length
                    }
                    else {
                        clearInterval(this.timer)
                    }
                })
            }
        },
        isShow() {
            if (!document.body.scrollTop) {
                this.show = document.documentElement.scrollTop > this.showHeight
            }
            else {
                this.show = document.body.scrollTop > this.showHeight
            }
        }
    },
    created() {
        document.addEventListener('scroll', this.isShow)
    },
    beforeDestroy() {
        removeEventListener('scroll', this.isShow)
    }
}
</script>

<style lang="less" scoped>
    @keyframes cloud {
        0%{
        -webkit-transform:translate(2px, 2px);
    }
    25%{
        -webkit-transform:translate(-2px, -2px);
    }
    50%{
        -webkit-transform:translate(0px, 0px);
    }
    75%{
        -webkit-transform:translate(2px, -2px);
    }
    100%{
        -webkit-transform:translate(-2px, 2px);
    }
    }
    .go-top {
        width: 150px;
        height: 220px;
        //background: url('../../assets/gotop.png');
        //background-size: 100% 100%;
        cursor: pointer;
        position: fixed;
        bottom: 40px;
        z-index: 8;
        &:hover {
            .gotop2 {
                animation: cloud 0.3s infinite;
            }
        }
    }
    .gotop1 {
        background: url('../../assets/gotop1.png') no-repeat;
        background-size: 100% 100%;
        width: 120px;
        height: 200px;
        margin: 0 auto;
    }
    .gotop2 {
        background: url('../../assets/gotop2.png') no-repeat;
        background-size: 100% 100%;
        width: 145px;
        height: 80px;
        position: relative;
        top: -27px;
        left: -2px;
        //animation: cloud 0.3s infinite;
    }
</style>


