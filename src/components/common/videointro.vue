<template>
    <div class="introduction">
        <div class="videoimg"></div>
        <p class="introtext">介绍介绍介绍介绍介绍介绍介绍</p>
    </div>
</template>

<script>
    export default {
        
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