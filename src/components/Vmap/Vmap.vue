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
                    name: '外国语学院',
                    position: [991, 217]
                },
                {
                    name: '国际学院',
                    position: [991, 217]
                },
                {
                    name: '八教',
                    position: [730, 321]
                },
                {
                    name: '传媒艺术学院',
                    position: [730, 321]
                },
                {
                    name: '经济管理学院',
                    position: [488, 261]
                },
                {
                    name: '现代邮政学院',
                    position: [488, 261]
                },
                {
                    name: '23A栋',
                    position: [312, 406]
                },
                {
                    name: '23B栋',
                    position: [312, 406]
                },
                {
                    name: '22栋',
                    position: [91, 392]
                },
                {
                    name: '21栋',
                    position: [-42, 393]
                },
                {
                    name: '留学生楼',
                    position: [524, 167]
                },
                {
                    name: '三教',
                    position: [793, 58]
                },
                {
                    name: '研究生院',
                    position: [793, 58]
                },
                {
                    name: '四教',
                    position: [981, 11]
                },
                {
                    name: '教务处',
                    position: [981, 11]
                },
                {
                    name: '通信学院',
                    position: [987, -105]
                },
                {
                    name: '逸夫科技楼',
                    position: [927, -175]
                },
                {
                    name: '档案室',
                    position: [927, -175]
                },
                {
                    name: '校史馆',
                    position: [927, -175]
                },
                {
                    name: '中心网球场',
                    position: [866, -295]
                },
                {
                    name: '新校门',
                    position: [782, -418]
                },
                {
                    name: '紫薇篮球场',
                    position: [692, -117]
                },
                {
                    name: '体育学院',
                    position: [452, -5]
                },
                {
                    name: '风雨操场',
                    position: [452, -5]
                },
                {
                    name: '数字图书馆',
                    position: [579, -210]
                },
                {
                    name: '信息中心',
                    position: [579, -210]
                },
                {
                    name: '新行政楼',
                    position: [592, -323]
                },
                {
                    name: '招生就业处',
                    position: [592, -323]
                },
                {
                    name: '20栋',
                    position: [345, 232]
                },
                {
                    name: '19栋',
                    position: [293, 232]
                },
                {
                    name: '18栋',
                    position: [178, 232]
                },
                {
                    name: '17栋',
                    position: [110, 232]
                },
                {
                    name: '太极运动场',
                    position: [179, 136]
                },
                {
                    name: '新运动场',
                    position: [179, 136]
                },
                {
                    name: '太极操场',
                    position: [179, 136]
                },
                {
                    name: '游泳池',
                    position: [224, 9]
                },
                {
                    name: '灯光篮球场',
                    position: [105, -1]
                },
                {
                    name: '风华运动场',
                    position: [170, -104]
                },
                {
                    name: '老操场',
                    position: [170, -104]
                },
                {
                    name: '马克思主义学院',
                    position: [218, -228]
                },
                {
                    name: '自动化学院',
                    position: [157, -267]
                },
                {
                    name: '先进制造学院',
                    position: [119, -309]
                },
                {
                    name: '二教',
                    position: [129, -224]
                },
                {
                    name: '计算机学院',
                    position: [129, -224]
                },
                {
                    name: '软件学院',
                    position: [129, -224]
                },
                {
                    name: '老校门',
                    position: [14, -472]
                },
                {
                    name: '崇文门',
                    position: [14, -472]
                },
                {
                    name: '科技会堂',
                    position: [-119, -470]
                },
                {
                    name: '创新创业教育学院',
                    position: [-48, -433]
                },
                {
                    name: '八十万',
                    position: [-18, -309]
                },
                {
                    name: '安法学院',
                    position: [-109, -321]
                },
                {
                    name: '七教',
                    position: [-109, -321]
                },
                {
                    name: 'EMS',
                    position: [-109, -321]
                },
                {
                    name: '重邮医院',
                    position: [-252, -456]
                },
                {
                    name: '重邮宾馆',
                    position: [-358, -456]
                },
                {
                    name: '老图书馆',
                    position: [-114, -212]
                },
                {
                    name: '中心食堂',
                    position: [-112, -100]
                },
                {
                    name: '大西北食堂',
                    position: [-112, -100]
                },
                {
                    name: '红房子',
                    position: [-112, -100]
                },
                {
                    name: '红高粱食堂',
                    position: [-26, 267]
                },
                {
                    name: '兴业苑食堂',
                    position: [-26, 267]
                },
                {
                    name: '4栋',
                    position: [-19, 31]
                },
                {
                    name: '5栋',
                    position: [-19, 31]
                },
                {
                    name: '15栋',
                    position: [-27, 125]
                },
                {
                    name: 'cwt',
                    position: [-27, 125]
                },
                {
                    name: '1栋',
                    position: [-120, 53]
                },
                {
                    name: '2栋',
                    position: [-120, 53]
                },
                {
                    name: '3栋',
                    position: [-120, 53]
                },
                {
                    name: '6栋',
                    position: [-120, 53]
                },
                {
                    name: '16栋',
                    position: [-93, 158]
                },
                {
                    name: '雨红莲',
                    position: [-22, -107]
                },
                {
                    name: '信科楼',
                    position: [-350, -373]
                },
                {
                    name: '信科大厦',
                    position: [-350, -373]
                },
                {
                    name: '财务处/一卡通中心',
                    position: [-350, -373]
                },
                {
                    name: '一教',
                    position: [-314, -312]
                },
                {
                    name: '光电工程学院',
                    position: [-314, -312]
                },
                {
                    name: '国际半导体学院',
                    position: [-314, -312]
                },
                {
                    name: '情人坡',
                    position: [-308, -208]
                },
                {
                    name: '理学院',
                    position: [-408, -255]
                },
                {
                    name: '保卫处/武装部',
                    position: [-486, -227]
                },
                {
                    name: '11栋',
                    position: [-273, -106]
                },
                {
                    name: '12栋',
                    position: [-273, -106]
                },
                {
                    name: '桂花篮球场',
                    position: [-380, -124]
                },
                {
                    name: '延生食堂',
                    position: [170, -104]
                },
                {
                    name: '千喜鹤食堂',
                    position: [170, -104]
                },
                {
                    name: '学工部/学生处',
                    position: [170, -104]
                },
                {
                    name: '24栋',
                    position: [-282, 133]
                },
                {
                    name: '25栋',
                    position: [-282, 133]
                },
                {
                    name: '26栋',
                    position: [-282, 133]
                },
                {
                    name: '27栋',
                    position: [-490, 133]
                },
                {
                    name: '28栋',
                    position: [-490, 133]
                },
                {
                    name: '29栋',
                    position: [-490, 133]
                },
                {
                    name: '30栋',
                    position: [-673, 133]
                },
                {
                    name: '39栋',
                    position: [-673, 133]
                },
                {
                    name: '31栋',
                    position: [-570, 24]
                },
                {
                    name: '32栋',
                    position: [-570, 24]
                },
                {
                    name: '35栋',
                    position: [-570, 24]
                },
                {
                    name: '8栋',
                    position: [-575, -108]
                },
                {
                    name: '9栋',
                    position: [-575, -108]
                },
                {
                    name: '10栋',
                    position: [-575, -108]
                },
                {
                    name: '33栋',
                    position: [-575, -108]
                },
                {
                    name: '34栋',
                    position: [-575, -108]
                },
                {
                    name: '36栋',
                    position: [-705, -103]
                },
                {
                    name: '37栋',
                    position: [-705, -103]
                },
                {
                    name: '南部校区',
                    position: [-1049, -224]
                },
                {
                    name: '通鼎实验大楼',
                    position: [-1018, -227]
                },
                {
                    name: '综合实验楼',
                    position: [-1018, -227]
                },
                {
                    name: '生物信息学院',
                    position: [-1018, -227]
                },
                {
                    name: '兴业苑',
                    position: [218, 316]
                },
                {
                    name: '知行苑',
                    position: [14, 182]
                },
                {
                    name: '明理苑',
                    position: [-453, 142]
                },
                {
                    name: '宁静苑',
                    position: [-612, -17]
                },
                {
                    name: '四海苑',
                    position: [-757, -67]
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