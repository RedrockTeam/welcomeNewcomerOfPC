<template>
    <div class="square-frame">
        <div 
            :class="['title animated', {jello: Mouseover1}]"
            @mouseover="Mouseover1=true"
            @mouseout="Mouseover1=false"><img :src="obj.title"></div>
        <div class="billboard">
            <div
                :class="['icon animated', {tada: Mouseover2}]"
                @mouseover="Mouseover2=true"
                @mouseout="Mouseover2=false"><img :src="obj.icon"></div>
            <p>{{ obj.content }}</p>
            <click-me
                class="button"
                :path="obj.path"></click-me>
        </div>
    </div>
</template>

<script>
import ClickMe from './ClickMe'
export default {
    props: ['obj'],
    components: {
        ClickMe
    },
    data() {
        return {
            Mouseover1: false,
            Mouseover2: false
        }
    }
}
</script>

<style lang="less" scoped>
    .square-frame {
        width: 360px;
        height: 475px;
        background: url('../../assets/home-square-frame.png') no-repeat;
        background-size: 100% 100%;
    }
    .title {
        width: 200px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 110px;
            height: 25px;
        }
    }
    .billboard {
        width: 285px;
        height: 260px;
        padding-top: 55px;
        padding-bottom: 80px;
        padding-left: 40px;
        padding-right: 35px;
        position: relative;
        display: flex;
        align-items: center;
        flex-flow: column;
        overflow: hidden;
        p {
            font-size: 13px;
            color: #666666;
            padding-top: 20px;
            height: 60px;
            overflow: hidden;
        }
    }
    .icon {
        display: flex;
        justify-content: center;
        img {
            width: 140px;
            height: 90px;
        }
    }
    .button {
        margin: 0 auto;
        position: absolute;
        bottom: 85px;
    }
</style>
