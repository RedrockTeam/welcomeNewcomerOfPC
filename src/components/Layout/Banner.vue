<template>
        <div class="banner">
            <img src="../../assets/cloud.png" alt="云" class="cloud ">
            <div  class="robot">
                <img src="../../assets/robot-body.png" alt="机器人身体">
                <img src="../../assets/go.png" alt="go" class="go animated swing">
                <img src="../../assets/flag.png" alt="flag" class="flag">
                <img src="../../assets/right-hand.png" alt="righthand" class="right-hand">
                <img src="../../assets/box.png" alt="box" class="box">
                <img src="../../assets/train.png" alt="train" class="train">
                <div class="time">
                        <div class="day time-box">
                            <div class="time-font"></div>
                            <div class="time-font"></div>
                        </div>
                        <div class="hour time-box">
                            <div class="time-font"></div>
                            <div class="time-font"></div>
                        </div>
                        <div class="minute time-box">
                            <div class="time-font"></div>
                            <div class="time-font"></div>
                        </div>
                        <div class="second time-box">
                            <div class="time-font"></div>
                            <div class="time-font"></div>
                        </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        daojishi(){
            setInterval(function() {
       var timefont = document.querySelectorAll('.time-font');
       // 开学当日时间
	    var x = new Date(),
		    startDate = 13, //9月该日零时开学, 9月14:00:00开学
		    list = [2.33, 11.7, 21.05, 30.4, 39.8, 49.2, 58.55, 68, 77.4, 87];
	    var seconds = 59 - x.getSeconds(),
		    minutes = 59 - x.getMinutes(),
		    hours = 23 - x.getHours(),
		    days = x.getMonth()==7 ? (startDate + 30)-x.getDate() : (startDate - 1)-x.getDate();
	    if(days < 0) {
		    seconds = 0;
		    minutes = 0;
		    hours = 0;
		    days = 0;
	    };

	    function change(s, m, t) {
            s.style.backgroundPosition = '40% ' + list[Math.floor(t/10)] + '%';
            m.style.backgroundPosition = '40% ' +  list[t%10] + '%';
	    }
	    change(timefont[0],timefont[1], days);
	    change(timefont[2], timefont[3], hours);
	    change(timefont[4], timefont[5], minutes);
	    change(timefont[6],timefont[7], seconds);
        }, 1000)}
    },
    mounted() {
        this.daojishi()
    }
}
</script>

<style lang="less" scoped>
        @keyframes travel {
            0%{
                transform: scale(0.2);
                top:55%;
                right:0%;
            }
            100%{
                transform: scale(1);
                top:45%;
                right:-10%;
            }
        }
        @keyframes rotatee {
            0%{
                transform: rotate(-5deg);
            }
            100%{
                transform: rotate(3deg);
            }
        }
        @keyframes rotatethreeD{
            0% {
                transform: rotateY(-15deg);
            }
            100% {
                transform: rotateY(30deg);
            }
        }
        @keyframes cloudFloat {
            0% {
                transform: translate(-2%);
            }
            100% {
                transform: translate(2%);
            }
        }
        .banner {
            padding-top:  64.5px;
            width: 100%;
            height: 880px;
            display: flex;
            position: relative;   
            background: url(../../assets/banner-bg.png);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: 50% 100%;
            overflow: hidden;
        }
        .cloud {
            width: 100%;
            height: 44.8%;
            position: absolute;
            top: 5px;
            animation-iteration-count: infinite;
            animation-duration: 10s;
            animation-timing-function:linear;
            animation-name: cloudFloat;
            animation-direction: alternate;
            z-index: 1;
        }
        .robot{
            position: relative;
            left: 43.5%;
            transform: translate(-50%,5%);
            z-index: 2;
        }
        .go {
            position: absolute;
            left:13%;
            top:37%;
            animation-iteration-count: infinite;
            animation-duration: 5s;
            animation-timing-function:linear;
            animation-direction: alternate;
        }
        .flag {
            position: absolute;
            left:12%;
            top:38%;
            z-index: -1;
            transform-origin: 100% 50%;
            animation-name: rotatethreeD;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        .right-hand {
            position: absolute;
            right: -40%;
            top: -2%;
            z-index: -1;
            animation-name: rotatee;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            transform-origin:0% 100%;
            animation-direction: alternate;
            animation-timing-function:linear;
        }
        .box {
            position: absolute;
            right: -37%;
            top: 29%;
            z-index: -2;
        }
        .train {
            position: absolute;
            top: 45%;
            right: -10%;
            animation-name: travel;
            animation-duration: 2s;
            z-index: -1;
        }
        .time {
            width: 50%;
            height: 8%;
            position: absolute;
            top: 50%;
            left: 34%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
        }
        .time-box {
             width: 12%;
            height: 60%;
            display: flex;
            flex-wrap: nowrap;
        }
        .day {
            margin-left: 1%;
        }
        .hour {
            margin-left: 1%;
            margin-bottom: 5%;
        }
        .minute {
            margin-bottom: 5%;
        }
        .second {
            margin-bottom: 2%;
        }
        .time-font {
            width: 50%;
            height: 100%;
            background: url(../../assets/daojishi.png) no-repeat;
            background-position: 40% 21%;
            transition: all .2s;       
        }
</style>

