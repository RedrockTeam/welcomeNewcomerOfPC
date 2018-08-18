<template>
    <div class="student">
        <card :obj="s" class="card"></card>
        <card :obj="s2" class="card"></card>
        <card :obj="s3" class="card"></card>
        <card :obj="s4" class="card"></card>
        <card :obj="s5" class="card"></card>
        <card :obj="s6" class="card"></card>
        <card :obj="s7" class="card"></card>
        <card :obj="s8" class="card"></card>
        <card :obj="s9" class="card"></card>
        <card :obj="s10" class="card"></card>
        <card :obj="s11" class="card"></card>
        <card :obj="s12" class="card"></card>
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
            s: {
                name: '蒋天星',
                photo: require('../../assets/student/1.jpg'),
                content: '计算机科学与技术学院2015级智能科学与技术专业学生,前任红岩网校工作站站长。他锐意进取，积极带领同学们参与各项网络志愿服务活动。他主动放弃寒暑假及双休时间，投身红岩网校平台建设维护和网络产品开发工作,组织并开展网络建设知识培训，为校园网络文化建设工作贡献着自己的力量。'
            },
            s2: {
                name: '刘磊',
                photo: require('../../assets/student/2.jpg'),
                content: '光电工程学院2014级微电子科学与工程专业学生，驻班党员、年级长、校党委组织部助理、党支部宣传委员，现已考取重庆邮电大学硕士研究生。他是长波精神的传承者，是为党发声的践行者，是合格党员的追求者，把课余时间奉献给了服务师生'
            },
            s3: {
                name: '赵蔺',
                photo: require('../../assets/student/3.jpg'),
                content: '外国语学院2015级翻译专业学生，外国语学院团总支学生兼职副书记，曾任外国语学院新媒体部副部长、辅导员助理、学习委员，重庆邮电大学本硕连读候选人。家境贫寒多变故，刻苦努力以报恩，孝老敬老永践行，她深知作为一名党员应当孝老敬亲，从小家到大家，从大家到国家。'
            },
            s4: {
                name: '刘顺程',
                photo: require('../../assets/student/4.jpg'),
                content: '软件工程学院2015级英语+软件专业学生。现担任13061702班班学长，学业辅导团高数讲师,班级宣传委员、心理委员。他勤奋好学，刻苦专研，求索不止，开拓创新，懂得无私奉献，乐于助人，将学习经验传授给其他同学。'
            },
            s5: {
                name: '张淑媛',
                photo: require('../../assets/student/5.jpg'),
                content: '传媒艺术学院2014级艺术设计专业学生，学习委员,现已保送深圳大学攻读硕士研究生。天降不幸命运坎坷，终身残疾，但克己自律战胜自己，乐观看待学习与生活。感恩回馈自强不息，投身各类志愿者工作，将爱心传递。'
            },
            s6: {
                name: '陈俊伊',
                photo: require('../../assets/student/6.jpg'),
                content: '通信与信息工程学院通信工程2014级卓越工程师班学生。  担任通信学院艺术团团长、畅响室内乐团会长,大学生艺术团民乐团、综合部成员,重庆川江号子传承人合唱团男高音声部成员。刷新重庆市在大学生艺术展演器乐类中的最高荣誉。传承巴渝文化，唱响川江号子。'
            },
            s7: {
                name: '吴英冬',
                photo: require('../../assets/student/7.jpg'),
                content: '光电工程学院2014级电子信息科学与技术专业学生,曾担任重庆市学生联合会大学生新媒体中心主任,现已签约华为技术有限公司。学术研究，锐意创新。  传递经验，满腔热忱，努力带动身边同学参与科技竞赛。'
            },
            s8: {
                name: '郭泰廷',
                photo: require('../../assets/student/8.jpg'),
                content: '计算机科学与技术学院2014级计算机科学与技术专业学生，校史馆学生志愿者解说队队长、双语解说员，04911701班班学长,现已被澳洲国立大学、悉尼大学、新南威尔士大学、杜伦大学等11所世界百强名校录取为英语相关专业硕士研究生。他以身树立模范，用行动诠释志愿服务精神。'
            },
            s9: {
                name: '黎杨杰',
                photo: require('../../assets/student/9.jpg'),
                content: '传媒艺术学院2015级广播电视编导专业学生,党委宣传部新闻中心成员、就业指导中心助理、2017级班学长。“互联网+智慧小镇”项目创始人,重庆智一术江科技有限公司负责人。他大胆创业，带领团队开展农产品品鉴会。他以创业之名，为母校争光。'
            },
            s10: {
                name: '谭发欢',
                photo: require('../../assets/student/10.jpg'),
                content: '体育学院2015级社会体育指导与管理专业学生。作为一名优秀的体育人，一生追求运动，不断超越自我。他坚持成就辉煌，在赛场上逐梦青春之火。他积极参与学校各类运动活动，弘扬运动精神'
            },
            s11: {
                name: '知行苑7舍205寝室',
                photo: require('../../assets/student/11.jpg'),
                content: '由计算机科学与技术学院2014级6名男生组成,中共党员1人。1人保送哈尔滨工业大学硕士研究生、2人签约阿里巴巴、2人签约华为技术有限公司、1人签约滴滴出行。'
            },
            s12: {
                name: '02031401班',
                photo: require('../../assets/student/12.jpg'),
                content: '光电工程学院/重庆国际半导体学院2014级电子科学与技术专业，共30人，其中中共党员10人。'
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
        margin-right: 5px;
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
