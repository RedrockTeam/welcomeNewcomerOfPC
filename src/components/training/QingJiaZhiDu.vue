<template>
    <div class="qingjiazhidu">
        <div class="header"><img src="../../assets/tqingjiazhidu.png"></div>
        <div class="container">
            <div class="content"><div class="num">1</div>军训期间请假遵循一事一请假的原则，无特殊事由不得请假</div>
            <div class="content"><div class="num">2</div>学生在军训场上感到不适，可直接通过“打报告”的形式向教官请假，在训练场边暂时休息</div>
            <div class="content"><div class="num">3</div>请假半天以下的由军训排排长经商辅导员同意后批准</div>
            <div class="content"><div class="num four">4</div>请假半天以上，3天以下的，由学生本人提出书面申请（请假条见附页），经辅导员签字后报校武装部审批，并由学生本人将审批后的申请交军训排排长实施</div>
            <div class="content"><div class="num">5</div>请假3天以上的需报请军训师领导同意</div>
            <div class="content"><div class="num">6</div>请假须外出的，须详细说明原因，并定期向辅导员报告动态</div>
            <div class="content"><div class="num">7</div>请假时间累计原则上不得超过军训时间的1/3（即5天）</div>
            <div class="content"><div class="num">8</div>如有其他特殊原因请假超过5天的，须专门报请军训师批准。</div>
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .qingjiazhidu {
        width: 99.5%;
        height: 500px;
        background: #d5fbff;
        border: solid 5px #432a92;
        border-top: none;
    }
    .header {
        width: 260px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img {
            width: 146px;
            height: 23px;
        }
    }
    .container {
        width: 730px;
        height: 390px;
        padding-left: 55px;
        padding-top: 40px;
        font-size: 16px;
        color: #432a92;
        .content {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .num {
            width: 25px;
            height: 25px;
            background: url('../../assets/pinkcircle.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
        }
        .four {
            width: 38px;
            height: 26px;
        }
    }
</style>
