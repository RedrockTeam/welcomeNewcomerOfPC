<template>
    <div class="map">
        <div class="title"></div>
        <div class="frame">
            <div class="top">
                <div class="search">
                    <input type="search" id="input" placeholder="太极操场...">
                    <div class="sbutton"></div>
                </div>
                <div class="size">
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
            left: 0,
            top: 0,
            positionX: 0,
            positionY: 0
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
            let odiv = e.target;        //获取目标元素
            
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                var left = e.clientX - disX;    
                var top = e.clientY - disY;

                //绑定元素位置到positionX和positionY上面
                this.top = top;
                this.left = left;
                
                //移动当前元素
                    // if (this.size=1.5&&left>-206.5&&left<206.5 || this.size===2&&left>-413&&left<413) {
                        odiv.style.left = left + 'px';
                    // }
                    odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        stop() {
            event.preventDefault()
        },
        zoomout() {
            if(this.size <= 1) {
                return
            }
            else {
                this.size-=0.5
            }
        },
        enlarge() {
            if(this.size >= 6) {
                return
            }
            else {
                this.size+=0.5
            }
        },
        // boundaryX(size) {
        //     if (206.5)
        // }
    },
    watch: {
        
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
        //background: rgb(255, 19, 19);
        display: flex;
    }
    .search {
        height: 100%;
        width: 400px;
        display: flex;
        //justify-content: center;
        align-items: center;
        //background: yellow;
    }
    .size {
        height: 100%;
        width: 435px;
        //background: blue;
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
        //display: flex;
        //justify-content: center;
        //align-items: center;
        //background: url('./map.jpg') no-repeat;
        //background-size: 100% 100%;
        img {
            width: 826px;
            height: 448px;
            cursor: move;
            position: relative;
            user-select: none;
        }
    }
</style>
