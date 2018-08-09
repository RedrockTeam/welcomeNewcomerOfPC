<template>
    <div id="test3"></div>
</template>

<script>
export default {
    mounted() {
        this.$emit('finish', 'success')
    }
}
</script>


<style lang="less" scoped>
    #test3 {
        width: 500px;
        margin: 0 auto;
        height: 1000px;
        background: #000;
    }
</style>

