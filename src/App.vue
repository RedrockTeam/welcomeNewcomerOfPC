<template>
    <div id="app">
        <vheader></vheader>
        <loading-bar
            :onErrorDone="errorDone"
            :onProgressDone="progressDone"
            :progress="progress"
            :error="error">
        </loading-bar>
        <banner></banner>
        <transition 
            name="fade"
            mode="out-in"
            enter-active-class="animated bounceIn fast"
            leave-active-class="animated fadeOut faster">
                <router-view @finish="loaded"></router-view>
        </transition>
        <fixed></fixed>
        <vfooter></vfooter>
    </div>
</template>

<script>
import Tab from './components/common/Tab'
import Vheader from './components/Layout/Vheader'
import loadingBar from 'vue2-loading-bar'
import Vfooter from './components/Layout/Vfooter'
import Fixed from './components/Layout/Fixed'
import Banner from './components/Layout/Banner'

export default {
    components: {
        Tab,
        Vheader,
        loadingBar,
        Vfooter,
        Fixed,
        Banner
    },
    data() {
        return {
            progress: 0,
            error: false,
            timer: null,
            carouselList: [
                {src: require('./assets/dom1.jpg'), content: '第一张'},
                {src: require('./assets/dom2.jpg'), content: '第二张'},
                {src: require('./assets/dom3.jpg'), content: '第三张'}
            ]
        }
    },
    methods: {
        errorDone () {
            this.error = false
        },
        progressDone () {
            this.progress = 0
        },
        loaded (status) {
            clearInterval(this.timer)
            if (status === 'error') {
                this.error = true
            } else {
                this.progress = 100
            }
        }
    },
    watch: {
        '$route' (to, from) {
            this.progress = 1
            this.timer = setInterval(() => {
                if (this.progress >= 80) clearInterval(this.timer)
                this.progress += 3
            }, 200)
        }
    },
    created() {
        console.log(`
   ▄████████    ▄████████ ████████▄     ▄████████  ▄██████▄   ▄████████    ▄█   ▄█▄ 
  ███    ███   ███    ███ ███   ▀███   ███    ███ ███    ███ ███    ███   ███ ▄███▀ 
  ███    ███   ███    █▀  ███    ███   ███    ███ ███    ███ ███    █▀    ███▐██▀   
 ▄███▄▄▄▄██▀  ▄███▄▄▄     ███    ███  ▄███▄▄▄▄██▀ ███    ███ ███         ▄█████▀    
▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███    ███ ▀▀███▀▀▀▀▀   ███    ███ ███        ▀▀█████▄    
▀███████████   ███    █▄  ███    ███ ▀███████████ ███    ███ ███    █▄    ███▐██▄   
  ███    ███   ███    ███ ███   ▄███   ███    ███ ███    ███ ███    ███   ███ ▀███▄ 
  ███    ███   ██████████ ████████▀    ███    ███  ▀██████▀  ████████▀    ███   ▀█▀ 
  ███    ███                           ███    ███                         ▀         
  
  红岩网校2018新生专题网PC端项目组: 陈文滔、牛奥林
`)
    }
}
</script>

<style lang="less" scoped>
    @import './assets/loading-bar.css';
    @import './assets/animate.css';
    #app {
        min-width: 1080px;
        max-width: 1518px;
        margin: 0 auto;
        min-height: 1000px;
        background: #42b6ed;
        overflow-x: hidden;
        font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;
    }
</style>

