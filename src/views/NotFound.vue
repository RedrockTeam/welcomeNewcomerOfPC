<template>
    <div class="notfound">当前页面不存在</div>
</template>

<script>
export default {
    mounted() {
        this.$emit('finish', 'error')
    }
}
</script>

<style lang="less" scoped>
    .notfound {
        text-align: center;
    }
</style>