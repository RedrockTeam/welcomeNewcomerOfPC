<template>
    <div class="card">
        <img :src="obj.photo">
        <div class="right">
            <div class="name"><img src="../../assets/name.png">:<p>{{ obj.name }}</p></div>
            <div class="content">
                <div class="introduction"><img src="../../assets/introduction.png">:</div>
                <div class="text"><p>{{ obj.content }}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

<style lang="less" scoped>
    .card {
        width: 390px;
        height: 230px;
        background: #54c9f3;
        border: solid 3.5px #33157b;
        border-radius: 10px;
        display: flex;
        >img {
            width: 150px;
            height: 204px;
            margin: 10px 10px;
            border: solid 3.5px #33157b;
            border-radius: 10px;
        }
    }
    .right {
        width: 218px;
        height: 230px;
    }
    .name {
        margin-top: 15px;
        height: 35px;
        display: flex;
        align-items: center;
        line-height: 10px;
        p {
            color: #076aa6;
            font-size: 13px;
            text-indent: 8px;
        }
        img {
            width: 32px;
            height: 18px;
        }
    }
    .introduction {
        width: 40px;
        height: 15px;
        display: flex;
        align-items: center;
        img {
            width: 32px;
            height: 18px;
        }
    }
    .text {
        width: 150px;
        height: 160px;
        margin-left: 45px;
        margin-top: -15px;
        overflow: hidden;
        p {
            color: #076aa6;
            font-size: 12px;
            text-overflow: ellipsis;
            margin: 0;
            width: 150px;
            max-height: 160px;
            overflow: hidden;
            white-space: wrap;
        }
    }
</style>
