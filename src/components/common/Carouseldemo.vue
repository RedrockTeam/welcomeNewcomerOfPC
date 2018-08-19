<template>
    <div class="carousel">
        <div class="container" @mouseover="stop" @mouseout="go">
            <div class="car-in" v-for="(list, index) of carouselList" :key="index" :style="{left: left}">
                <img :src="list.src">
                <span class="content">{{ list.content }}</span>
            </div>
        </div>
        <div class="prev" @click="prev">左</div>
        <div class="next" @click="clickNext">右</div>
    </div>
</template>

<script>
export default {
    props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        interval: {
            type: Number,
            default: 5000
        },
        carouselList: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data() {
        return {
            currentImg: 1,
            left: '0px',
            timer: null
        }
    },
    methods: {
        clickNext() {
            this.stop()
            this.next()
        },
        next() {
            if (this.currentImg === this.carouselList.length) {
                this.currentImg = 1
                this.left = 0
            }
            else {
                this.currentImg++
                this.left = parseInt(this.left) - 500 + 'px'
            }
        },
        prev() {
            this.stop()
            if (this.currentImg === 1) {
                this.currentImg = this.carouselList.length
                this.left = (this.carouselList.length - 1) * -500 + 'px'
            }
            else {
                this.currentImg--
                this.left = parseInt(this.left) + 500 + 'px'
            }
        },
        stop() {
            if (this.autoplay) {
                clearInterval(this.timer)
            }
        },
        go() {
            if (this.autoplay) {
                this.timer = setInterval(this.next, this.interval)
            }
        }
    },
    created() {
        this.go()
    },
    beforeDestroy() {
        this.stop()
    }
}
</script>

<style lang="less" scoped>
    .carousel {
        width: 700px;
        position: relative;
        display: inline-block;
    }
    .container {
        display: flex;
        width: 500px;
        height: 300px;
        margin: 0 auto;
        overflow: hidden;
        z-index: 1;
    }
    .car-in {
        position: relative;
        background: #000;
        width: 500px;
        height: 300px;
        float: left;
        transition: left .5s;
        img {
            width: 500px;
            height: 300px;
        }
        .content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 500px;
            height: 50px;
            background: rgba(0, 0, 0, .2);
            text-align: center;
            color: rgb(255, 255, 255);
            font-size: 20px;
            line-height: 50px;
        }
    }
    .button {
        width: 700px;
        display: flex;
        position: absolute;
        justify-content: space-between;
        top: 100px;
        z-index: 0;
        .prev, .next {
            width: 55px;
            height: 72px;
            background: rgb(236, 87, 87);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
    .prev, .next {
        width: 55px;
        height: 72px;
        background: rgb(236, 87, 87);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 110px;
    }
    .next {
        float: right;
        right: 0;
    }
</style>


