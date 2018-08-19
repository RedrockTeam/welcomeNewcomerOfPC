<template>
    <div class="lunbo">
        <img src="../../assets/lunbo-left.png" ref="prev" id="prev" @click="prev">
        <div class="lunbo-main">
            <div class="lunbo-box" @mouseover="stop" @mouseout="go">
                <div class="lunbo-content" ref="lbcontent" style="left: -520px;transition-duration: 0.5s;">
                    <img src="../../assets/lunbo-test3.png" width="520" height="345"  alt="3">
                    <img src="../../assets/lunbo-test1.png" width="520" height="345"  alt="1">
                    <img src="../../assets/lunbo-test2.png" width="520" height="345"  alt="2">
                    <img src="../../assets/lunbo-test3.png" width="520" height="345"  alt="3">
                    <img src="../../assets/lunbo-test1.png" width="520" height="345"  alt="1">
                </div>
            </div>
            <div class="lunbo-button">
                <div v-for="imgnum in imgnums" :key="imgnum" class="buttons" ref="buttons"></div>
            </div>
        </div>
        <img src="../../assets/lunbo-right.png" ref="next" id="next" @click="next">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                timer: null,
                boolen: false,
                lightedbutton: 0,
                imgnums: [ '图1','图2','图3']
            }
        },
        methods: {
            stop: function () {
                clearInterval(this.timer);
            },
            prev: function () {
                if (this.boolen) {
                    return;
                }
                this.lightedbutton--;
                if (this.lightedbutton == -1) {
                    this.lightedbutton = 2;
                }
                this.move(520);
                this.lightbutton();
            },
            next: function () {
                if (this.boolen) {
                    return;
                }
                this.lightedbutton++;
                if (this.lightedbutton == 3) {
                this.lightedbutton = 0;
                }
                this.move(-520);
                this.lightbutton();
            },      
            go:  function () {
                this.timer = setInterval( ()=> {
                    this.next();
                }, 3000);
            },
            move: function (distance) {
                    this.boolen = true;
                    if (parseInt(this.$refs.lbcontent.style.left) >= -1560 && parseInt(this.$refs.lbcontent.style.left) <= -520) {
                        this.$refs.lbcontent.style.transitionDuration = "0.5s";
                    }
                    this.$refs.lbcontent.style.left = parseInt(this.$refs.lbcontent.style.left) + distance + 'px';
                    setTimeout( () =>{
                        if (parseInt(this.$refs.lbcontent.style.left) > -520) {
                            this.$refs.lbcontent.style.transitionDuration = "0s"
                            this.$refs.lbcontent.style.left = -1560 + 'px';
                        }
                        if (parseInt(this.$refs.lbcontent.style.left) < -1560) {
                            this.$refs.lbcontent.style.transitionDuration = "0s";
                            this.$refs.lbcontent.style.left = -520 + 'px';
                        }
                        this.boolen = false;
                    }, 500);
            },
            lightbutton: function () {
                for (var i = 0; i < this.$refs.buttons.length; i++) {
                    if ( this.$refs.buttons[i].id == 'lightbutton') {
                        this.$refs.buttons[i].id = '';
                        break;
                    }
                }
                this.$refs.buttons[this.lightedbutton].id = 'lightbutton';
            },
        },
        mounted () {
            let buttons = document.querySelectorAll('.buttons');
            let lbcontent = document.querySelector('.lunbo-content');
            buttons[0].id = 'lightbutton';
            for (var i = 0;  i < buttons.length;  i++) {
                    (function (i) {
                        buttons[i].onclick = function () {
                            if ( buttons[i].id == 'lightbutton') {
                                return;
                            }
                            lbcontent.style.left = -520 * (i + 1) + 'px';
                            this.lightedbutton = i;
                            this.lightbutton();
                        }
                    })(i);
            }     //给每个按钮加时间监听
            this.go();
        },
        beforeDestroy() {
            this.stop();
        }
    }
</script>

<style lang="less" scoped>
    .lunbo {
        width: 780px;
        height: 400px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        #prev {
            cursor: pointer;
        }
        #next {
            cursor: pointer;
        }
        .lunbo-main {
            background-color: #54c9f3;
            width: 540px;
            height: 365px;
            border-radius: 2px;
            box-shadow: 0 0 0 4px #432a92;
            .lunbo-box {
                width: 520px;
                height: 345px;
                margin: 10px;
                border-radius: 2px;
                box-shadow: 0 0 0 4px #432a92;
                overflow: hidden;
                .lunbo-content {
                    width: 500%;
                    height: 100%;
                    position: relative;
                }
            }
            .lunbo-button {
                width: 100px;
                position: relative;
                left: 50%;
                top: 6%;
                transform: translate(-50%);
                display: flex;
                align-items: center;
                justify-content: space-between;
                .buttons {
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                    box-shadow: 0 0 0 2px #371a7e;
                    background: white;
                    cursor: pointer;
                }
                #lightbutton {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #ffbff9;
                    box-shadow: 0 0 0 2px #371a7e;

                }
            }
        }
    }
</style>