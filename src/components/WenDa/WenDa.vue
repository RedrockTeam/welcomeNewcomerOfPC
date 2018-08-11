<template>
    <div class="wenda">
        <div class="logo"></div>
        <div class="wenda-frame">
            <div class="class">
                <div class="all"></div>
                <div class="life"></div>
                <div class="study"></div>
                <div class="organization"></div>
                <div class="activity"></div>
            </div>
            <div class="container">
                <div class="container-header">
                    <div class="container-author">提问者</div>
                    <div class="container-content">提问内容</div>
                    <div class="container-reply">回复</div>
                    <div class="container-time">时间</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from './Pagination'

export default {
    components: {
        Pagination
    },
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    .wenda {
        width: 832px;
        height: 1227px;
        padding: 8px 75px 60px 91px;
    }
    .logo {
        width: 836px;
        height: 462px;
        background: url('../../assets/wenda-logo.png') no-repeat;
        background-size: 100% 100%;

    }
    .wenda-frame {
        width: 828px;
        height: 670px;
        margin-top: 40px;
        border: solid 4.5px #432a92;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        background: #d5fbff;
    }
    .class {
        width: 100%;
        height: 70px;
        background: #93ece6;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border-bottom: solid 4.5px #432a92;
        display: flex;
        align-items: center;
        div {
            background: #54c9f3;
            height: 50px;
            flex: 1;
            margin: 0 5px;
            border: solid 4.5px #432a92;
            cursor: pointer;
            transition: transform .3s;
            &:first-child {
                border-top-left-radius: 18px;
            }
            &:last-child {
                border-top-right-radius: 18px;
            }
            &:hover {
                transform: scale(1.08);
            }
        }
    }
    .container {
        width: 100%;
        height: 500px;
        background: #d5fbff;
    }
    .container-header {
        width: 100%;
        height: 50px;
        display: flex;
        background: red;
    }
</style>
