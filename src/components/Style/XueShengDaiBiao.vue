<template>
    <div class="student">
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
        <card :obj="jiangtianxing" class="card"></card>
    </div>
</template>

<script>
import Card from '../common/Card'
export default {
    components: {
        Card
    },
    data() {
        return {
            jiangtianxing: {
                name: '蒋天星',
                photo: require('../../assets/jiangtianxing.png'),
                content: '重邮小帮手背后的技术好能手，用创意传递团思党意；红岩网校里辛勤的代码探索者，用产品激活青春正能量。用原创游戏贴近同学，建专题网站打造主流，带技能培训熔炼团队，抓宣传跟帖清朗网络。他就是将实践服务融入网络的社会主义核心价值观传播者。'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .student {
        display: flex;
        flex-wrap: wrap;
        margin-top: 35px;
        max-height: 742px;
        overflow-y: scroll;
        justify-content: space-between;
    }
    .card {
        margin-right: 10px;
        margin-bottom: 15px;
    }
    //
    ::-webkit-scrollbar {
        width: 30px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }
    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
</style>
