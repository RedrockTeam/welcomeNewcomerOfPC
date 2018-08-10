<template>
    <div class="fixed">
        <go-top :screenWidth="screenWidth"></go-top>
        <q-rcode :screenWidth="screenWidth"></q-rcode>
    </div>
</template>

<script>
import GoTop from './GoTop'
import QRcode from './QRcode'

export default {
    components: {
        GoTop,
        QRcode
    },
    data() {
        return {
            screenWidth: window.innerWidth
        }
    },
    mounted() {
        //全局监听 resize 事件
        const that = this
        window.onresize = function temp() {
            that.screenWidth = window.innerWidth
        }
    }
}
</script>