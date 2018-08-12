<template>
    <div class="activity">
        <activity-tab></activity-tab>
        <!-- <wen-da></wen-da> -->
    </div>
</template>

<script>
//import WenDa from '../components/WenDa/WenDa'
import ActivityTab from '../components/ActivityTab'
import Vmap from '../components/Vmap/Vmap'

export default {
    components: {
        //WenDa,
        Vmap,
        ActivityTab
    },
    data() {
        return {
                
        }
    },
    mounted() {
        this.$emit('finish', 'success')
    },
    watch: {
        '$route' (to, from) {
            this.$emit('finish', 'success')
        }
    }
}
</script>

<style lang="less" scoped>
    .activity {
        width: 1000px;
        height: 2000px;
        margin: 0 auto;
    }
</style>