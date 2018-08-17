<template>
    <div class="photo-frame">
        <img :src="obj.photo">
        <div>{{ obj.content }}</div>
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
    .photo-frame {
        width: 260px;
        height: 205px;
        background: #54c9f3;
        border: solid 3px #33157b;
        border-radius: 10px;
        img {
            width: 244px;
            height: 160px;
            margin: 5px 5px;
            border: solid 3px #33157b;
            border-radius: 6px;
        }
        div {
            text-align: center;
            color: #000;
            font-size: 18px;
            line-height: 16px;
        }
    }
</style>
