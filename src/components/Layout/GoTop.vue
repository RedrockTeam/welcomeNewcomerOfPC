<template>
    <transition
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutUp faster">
        <div class="go-top" 
            @click="goTop"
            v-show="show"
            :style="{left: screenWidth / 2 + 550 + 'px'}"></div>
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
    .go-top {
        width: 120px;
        height: 220px;
        background: url('../../assets/gotop.png');
        background-size: 100% 100%;
        cursor: pointer;
        position: fixed;
        bottom: 40px;
        z-index: 8;
    }
</style>


