<template>
    <div class="cqupt-video">
        <a :href="obj.link" target="_blank">
            <div class="photo" :style="{backgroundImage: 'url(' + obj.photo + ')'}">
                <div class="content">
                    <div class="text">{{ obj.content }}</div>
                </div>
            </div>
            <div class="play"></div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

<style lang="less" scoped>
    .cqupt-video {
        width: 390px;
        height: 320px;
        background: #54c9f3;
        border: solid 4px #432a92;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .photo {
        width: 365px;
        height: 295px;
        border: solid 4px #432a92;
        border-radius: 10px;
        background-size: 100% 100%;
        display: flex;
        align-items: flex-end;
        position: relative;
        top: 38px;
        &:hover {
            align-items: flex-end;
            .content {
                height: 20%;
            }
        }
    }
    .content {
        width: 100%;
        height: 100%;
        background: rgba(37, 37, 37, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: height .3s;
    }
    .text {
        color: #fff;
        font-size: 16px;
        transition: height .3s;
    }
    a {
        text-decoration: none;
        &:hover {
            .content {
                height: 20%;
            }
            .play {
                opacity: 1;
                transition: opacity .5s;
            }
        }
    }
    .play {
        width: 75px;
        height: 75px;
        background: url('../../assets/play.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: -155px;
        left: 155px;
        opacity: 0;
    }
</style>
