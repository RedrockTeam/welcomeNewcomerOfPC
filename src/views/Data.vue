<template>
    <div class="data">
        <data-tab></data-tab>
    </div>
</template>

<script>
import DataTab from '../components/Data/DataTab'

export default {
    components: {
        DataTab
    },
    mounted() {
        this.$emit('finish', 'success')
    }
}
</script>

<style lang="less" scoped>
    .data {
        width: 1000px;
        margin: 0 auto;
        min-height: 2000px;
        //max-height: 1350px;
    }
</style>