<template>
    <div class="map">
        <div class="title"></div>
        <div class="frame">
            <div class="top">
                <div class="search">
                    <input type="search" id="input" placeholder="请输入查找地..." v-model.trim="place" @keyup.enter="goPlace">
                    <div class="sbutton" @click="goPlace"></div>
                </div>
                <div class="size">
                    <div class="tips" v-show="maybePlace!==''">你要找的是不是<br/><span @click="goPlace">{{ maybePlace }}</span></div>
                    <div class="tips" v-show="maybePlace==='' && place!==''">未查询到此地点</div>
                    <div class="zoomout"
                        @click="zoomout"></div>
                    <div class="enlarge"
                        @click="enlarge"></div>
                </div>
            </div>
            <div class="window">
                <img src="./map.jpg"
                    @dragstart="move"
                    @dragover="stop"
                    :style="{transform: cSize}">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            width: 826,
            height: 358,
            size: 1,
            place: '',
            maybePlace: '',
            list: [
                {
                    name: '太极操场',
                    position: [238, 175]
                },
                {
                    name: '老操场',
                    position: [215, -142]
                }
            ],
            index: 0
        }
    },
    computed: {
        cSize() {
            return `scale(${this.size})`
        }
    },
    methods: {
        move(e){
            event.preventDefault()
            let odiv = e.target        //获取目标元素
            document.querySelector(".window img").style.transition = 'all .2s'
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft
            let disY = e.clientY - odiv.offsetTop
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                var left = e.clientX - disX
                var top = e.clientY - disY
                
                //移动当前元素
                var width = (this.size-1)*413
                var height = (this.size-1)*179

                if (left > -width && left < width) {
                    odiv.style.left = left + 'px'
                }
                if (top > -height && top < height) {
                    odiv.style.top = top + 'px'
                }
            }
            document.onmouseup = (e) => {
                document.onmousemove = null
                document.onmouseup = null
            }
        },
        stop() {
            event.preventDefault()
        },
        zoomout() {
            document.querySelector(".window img").style.transition = 'all 1s'
            if(this.size <= 1) {
                return
            }
            else {
                document.querySelector(".window img").style.left = '0'
                document.querySelector(".window img").style.top = '0'
                this.size-=1
            }
        },
        enlarge() {
            document.querySelector(".window img").style.transition = 'all 1s'
            if(this.size >= 6) {
                return
            }
            else {
                this.size+=1
            }
        },
        goPlace(place) {
            for (let i = 0; i < this.list.length; i++) {
                if (this.place === this.list[i].name) {
                    document.querySelector(".window img").style.transition = 'all 1s'
                    this.size = 4
                    document.querySelector(".window img").style.left = this.list[i].position[0] + 'px'
                    document.querySelector(".window img").style.top = this.list[i].position[1] + 'px'
                    return false
                }
                else if (this.list[i].name !== this.place && this.list[i].name.indexOf(this.place) !== -1) {
                    document.querySelector(".window img").style.transition = 'all 1s'
                    this.size = 4
                    document.querySelector(".window img").style.left = this.list[i].position[0] + 'px'
                    document.querySelector(".window img").style.top = this.list[i].position[1] + 'px'
                    return false
                }
            }
            document.querySelector(".window img").style.transition = 'all 1s'
            this.size = 1
            document.querySelector(".window img").style.left = '0'
            document.querySelector(".window img").style.top = '0'
        }
    },
    watch: {
        place(value) {
            if (value === '') {
                document.querySelector(".window img").style.transition = 'all 1s'
                this.size = 1
                document.querySelector(".window img").style.left = '0'
                document.querySelector(".window img").style.top = '0'
            }
            this.isSearching = true
            for (let i = 0; i < this.list.length; i++) {
                if (value === this.list[i].name) {
                    this.maybePlace = this.list[i].name
                    return false
                }
                else if (this.list[i].name !== this.place && this.list[i].name.indexOf(value) !== -1 && value!=='') {
                    this.maybePlace = this.list[i].name
                    return false
                }
            }
            this.maybePlace = ''
        }
    }
}
</script>

<style lang="less" scoped>
    .map {
        width: 1000px;
        min-height: 670px;
        position: relative;
    }
    .title {
        width: 200px;
        height: 80px;
        background: url('../../assets/map-title.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        transform: scale(1.2);
    }
    .frame {
        width: 1000px;
        height: 620px;
        background: url('../../assets/map-frame.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 40px;
    }
    .top {
        width: 835px;
        height: 105px;
        position: absolute;
        top: 110px;
        left: 55px;
        display: flex;
    }
    .search {
        height: 100%;
        width: 400px;
        display: flex;
        align-items: center;
    }
    .size {
        height: 100%;
        width: 435px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .sbutton {
        width: 60px;
        height: 60px;
        background: url('../../assets/search.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }
    #input {
        width: 250px;
        height: 50px;
        border: solid 4px #432a92;
        border-radius: 10px;
        margin-right: 20px;
        outline: none;
        padding: 0 10px;
        font-size: 20px;
    }
    .zoomout, .enlarge {
        width: 60px;
        height: 60px;
        cursor: pointer;
        &:hover {
            transform: scale(1.1)
        }
        &:active {
            transform: scale(0.9)
        }
    }
    .zoomout {
        background: url('../../assets/zoomout.png') no-repeat;
        background-size: 100% 100%;
    }
    .enlarge {
        background: url('../../assets/enlarge.png') no-repeat;
        background-size: 100% 100%;
    }
    .window {
        width: 826px;
        height: 358px;
        position: absolute;
        top: 218px;
        left: 59px;
        overflow: hidden;
        img {
            width: 826px;
            height: 358px;
            cursor: move;
            position: relative;
            user-select: none;
        }
    }
    .tips {
        width: 200px;
        position: relative;
        right: 200px;
        font-size:18px;
        color: #ff597d;
        text-align: center;
        user-select: none;
        span {
            color: #005994;
            cursor: pointer;
        }
    }
</style>