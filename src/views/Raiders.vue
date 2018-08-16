<template>
    <div class="raiders">
        <div class="title">
            <img src="../assets/ftraiders.png">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$emit('finish', 'success')
    }
}
</script>

<style lang="less" scoped>
    .title {
        width: 245px;
        height: 95px;
        margin: 0 auto;
        background: url('../assets/title-frame.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        img {
            width: 140px;
            height: 33px;
        }
    }
</style>