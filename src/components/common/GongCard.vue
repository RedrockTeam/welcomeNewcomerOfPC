<template>
    <div class="gongcard">
        <img :src="gongmain.imgsrc" class="gongimg">
        <img :src="gongmain.name" class="gongname">
        <p>{{gongmain.intro}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            gongmain: {
                type: Object,
                default: function () {
                    return {
                        imgsrc: require("../../assets/erweima/重庆邮电大学.png"),
                        name: "重庆邮电大学",
                        intro: "负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。"
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .gongcard {
        width: 180px;
        height: 364px;
        border: 4px solid #432a92;
        padding-left: 35px;
        padding-right: 35px;
        background-color: #d5fbff;
        margin-top: 10px;
        margin-right: 15px;
        overflow: hidden;
        p{
            font-size: 14px;
            color: #6550a7;
            margin-top: 5px;
            text-align: justify;
            text-justify: inter-ideograph;
        }
    }
    .gongimg {
        width: 180px;
        height: 180px;
        margin-top: 15px;
    }
    .gongname {
        transform: translate(-50%) scale(0.8);
        margin-top: 4px;
        position: relative;
        left: 50%;
    }
</style>