<template>
    <div class="header">
        <div class="nav">
            <div class="nav-in animated slideInDown faster">
                <div class="logo"></div>
                <div class="link">
                    <router-link
                        :to="link.path"
                        v-for="(link, index) in linkList"
                        :key="index"
                        :class="{aactive: isActive(link)}">
                        <div class="link-box">
                            <img v-if="$route.path===link.path" :src="link.activeSrc">
                            <img v-else :src="link.src">
                        </div>
                    </router-link>
                    <a href="http://hongyan.cqupt.edu.cn/aboutus/" target="_blank"><div class="link-box"><img src="../../assets/tabout.png"></div></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            linkList: [
                {
                    path: '/',
                    src: require('../../assets/thome.png'),
                    activeSrc: require('../../assets/thome-active.png'),
                },
                {
                    path: '/raiders',
                    src: require('../../assets/traiders.png'),
                    activeSrc: require('../../assets/traiders-active.png'),
                },
                {
                    path: '/style',
                    src: require('../../assets/tstyle.png'),
                    activeSrc: require('../../assets/tstyle-active.png'),
                },
                {
                    path: '/training',
                    src: require('../../assets/ttraining.png'),
                    activeSrc: require('../../assets/ttraining-active.png'),
                },
                {
                    path: '/activity',
                    src: require('../../assets/tactivity.png'),
                    activeSrc: require('../../assets/tactivity-active.png'),
                },
                {
                    path: '/data',
                    src: require('../../assets/tdata.png'),
                    activeSrc: require('../../assets/tdata-active.png'),
                }
            ]
        }
    },
    methods: {
        isActive(link) {
            return this.$route.path === link.path ? true : false
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/animate.css';
    .header {
        width: 100%;
        height: 62px;
        background: #93ece6;
        border-bottom: #33157b 2.5px solid;
        position: fixed;
        z-index: 3;
    }
    .nav {
        width: 100%;
        height: 55px;
        background: #62bee9;
        border-bottom: #33157b 2.5px solid;
    }
    .nav-in {
        width: 1000px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
    .logo {
        width: 200px;
        height: 70%;
        background: url('../../assets/cqupt-logo.png');
        background-size: 100% 100%;
    }
    .link {
        width: 750px;
        height: 100%;
        display: flex;
        a {
            height: 51px;
            flex: 1;
            color: #ffef8b;
            text-decoration: none;
            transition: all .5s;
            &:hover {
                background: #ffc9e2;
                transition: all .5s;
                //transform: rotate(-5deg) translate(2px, 2px) scale(0.8);
                border-left: 3.5px solid #33157b;
                border-right: 3.5px solid #33157b;
                border-top: 2px solid #33157b;
                border-bottom: 2px solid #33157b;
                .link-box{
                    box-shadow: inset -9px 7px 18px 5px rgba(175, 175, 175, 0.5);
                    transition: all 5s;
                }
                img {
                    transform:  scale(1.2);
                    transition: all .5s;
                }
            }
            img {
                transition: .5s;
            }
            .link-box {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .test {
        font-size: 18px;
        font-weight: 545;
        color: #ffef8b;
        text-shadow: 0 0 0.3em #200d4d, 0 0 0.3em #33157b,0 0 0.3em #33157b;
    }
    .aactive {
        background: #ffc9e2;
        border-left: 3.5px solid #33157b;
        border-right: 3.5px solid #33157b;
        border-top: 2px solid #33157b;
        border-bottom: 2px solid #33157b;
    }
</style>
