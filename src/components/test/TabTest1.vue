<template>
    <div>test1</div>
</template>

<script>
export default {
    mounted() {
        this.$emit('finish', 'success')
    }
}
</script>

