<template>
    <div class="introduction">
        <div class="videoimg"></div>
        <p class="introtext">{{introductext}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            intromain: {
                type: Object,
                default: {
                    imgsrc: "",
                    introtext: ""
                }
            }
        },
         data() {
            return {
                introductext: this.intromain.introtext
            }
        }
    }
</script>

<style lang="less" scoped>
    .introduction {
        cursor: pointer;
        display: flex;
        justify-content: center;
        width: 200px;
        height: 200px;
        margin:10px;
        position: relative;

        .videoimg {
            background: red;
            width: 100%;
            height: 100%;
            transition: all .5s;
            &:hover {
                background: pink;
            }
        }
        .introtext {
            position: absolute;
            // word-wrap: break-all;
            bottom: 0;
            width: 200px; 
            text-align: center;       
        }  
    }
</style>