<template>
    <div class="qrcode">
        <div
            :class="['animated', 'infinite', 'qrcode1', {pulse: !isMouseOver1}, {fixed: fixed}]" 
            :style="{left: screenWidth / 2 - 698 + 'px'}"
            @mouseover="isMouseOver1=true"
            @mouseout="isMouseOver1=false"></div>
        <div
            :class="['animated', 'infinite', 'qrcode2', {pulse: !isMouseOver2}, {fixed: fixed}]"
            :style="{left: screenWidth / 2 + 539 + 'px'}"
            @mouseover="isMouseOver2=true"
            @mouseout="isMouseOver2=false"></div>
    </div>
</template>

<script>
export default {
    props: ['screenWidth'],
    data() {
        return {
            isMouseOver1: false,
            isMouseOver2: false,
            fixed: false
        }
    },
    created() {
        document.addEventListener('scroll', this.isFixed)
    },
    beforeDestroy() {
        removeEventListener('scroll', this.isShow)
    },
    methods: {
        isFixed() {
            if (!document.body.scrollTop) {
                this.fixed = document.documentElement.scrollTop > 340
            }
            else {
                this.fixed = document.body.scrollTop > 340
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .qrcode1 {
        background: url('../../assets/qrcode1.png') no-repeat;
    }
    .qrcode2 {
        background: url('../../assets/qrcode2.png') no-repeat;
    }
    .qrcode1, .qrcode2 {
        width: 144px;
        height: 210px;
        background-size: 100% 100%;
        position: absolute;
        top: 545px;
        cursor: pointer;
        z-index: 7;
        &:hover {
            transform: scale(1.3);
        }
    }
    .fixed {
        position: fixed;
        top: 200px;
    }
</style>
