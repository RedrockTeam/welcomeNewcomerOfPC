<template>
    <div class="zuinankemu">
        <div class="kemu-header">
            <div class="title"></div>
            <select id="select" v-model="selected">
                <option>通信与信息工程学院</option>
                <option>传媒艺术学院</option>
                <option>计算机科学与技术学院</option>
                <option>自动化学院</option>
                <option>经济管理学院/现代邮政学院</option>
                <option>软件工程学院</option>
                <option>理学院</option>
                <option>光电工程学院/重庆国际半导体学院</option>
                <option>生物信息学院</option>
                <option>体育学院</option>
                <option>先进制造工程学院</option>
                <option>外国语学院</option>
                <option>网络空间安全与信息法学院</option>
                <option>国际学院</option>
            </select>
        </div>
        <div id="kemu-container"></div>
    </div>
</template>

<script>
    var echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require("echarts/lib/component/legendScroll")

    export default {
        data() {
            return {
                selected: '通信与信息工程学院',
                subject: ['大学物理A1', '数据结构', '高等数学A'],
                data: [0.37, 0.32, 0.31]
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('kemu-container'))
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: this.subject,
                        axisLine: {
                            lineStyle: {
                                color: '#432a92',
                                width: 4
                            }
                        },
                        axisLabel: {
                            fontSize: 16,
                            fontFamily: 'Microsoft YaHei',
                            fontWeight: 350,
                            rotate: 8
                        },
                        name: '课程名称',
                        nameTextStyle: {
                            fontSize: 14
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#432a92',
                                width: 4
                            }
                        },
                        axisLabel: {
                            fontSize: 20,
                            fontFamily: 'Microsoft YaHei',
                            fontWeight: 350
                        },
                        splitLine: {
                            show: false
                        },
                        name: '60分以下频率',
                        nameTextStyle: {
                            fontSize: 14
                        }
                    },
                    series: [{
                        data: this.data,
                        type: 'bar',
                        color: function (params) {
                            var colorList = ['#ffbff9', '#9ce8ff', '#94f8f4'];
                            return colorList[params.dataIndex]
                        },
                        barWidth: 100,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 0, 0],
                                barBorderColor: '#432a92',
                                barBorderWidth: 4,
                            },
                            emphasis: {
                                shadowBlur: 20,
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#432a92',
                                    fontSize: 20,
                                    fontFamily: 'Microsoft YaHei',
                                    fontWeight: 350
                                }
                            }
                        }
                    }],
                    tooltip: {
                        formatter: "{b} : {c}"
                    }
                })
            }
        },
        mounted() {
            this.draw()
        },
        watch: {
            selected() {
                if (this.selected === '通信与信息工程学院') {
                    this.subject = ['大学物理A1', '数据结构', '高等数学A']
                    this.data = [0.37, 0.32, 0.31]
                }
                else if (this.selected === '传媒艺术学院') {
                    this.subject = ['大学英语(2)1', '形势与政策', '思想道德修养与法律基础']
                    this.data = [0.52, 0.30, 0.17]
                }
                else if (this.selected === '计算机科学与技术学院') {
                    this.subject = ['大学物理B', '高等数学A', 'C程序设计能力测评']
                    this.data = [0.63, 0.26, 0.12]
                }
                else if (this.selected === '自动化学院') {
                    this.subject = ['大学物理B', '高等数学A', '工程数学基础 (2)']
                    this.data = [0.59, 0.28, 0.13]
                }
                else if (this.selected === '经济管理学院/现代邮政学院') {
                    this.subject = ['C语言程序设计', '线性代数B', '高等数学B']
                    this.data = [0.40, 0.33, 0.27]
                }
                else if (this.selected === '软件工程学院') {
                    this.subject = ['大学物理B', '高等数学A', '软件需求工程']
                    this.data = [0.55, 0.31, 0.14]
                }
                else if (this.selected === '理学院') {
                    this.subject = ['高等代数', '普通物理学B1', '数学分析A2']
                    this.data = [0.44, 0.31, 0.24]
                }
                else if (this.selected === '光电工程学院/重庆国际半导体学院') {
                    this.subject = ['C语言程序设计', '大学物理A', '高等数学A']
                    this.data = [0.40, 0.36, 0.23]
                }
                else if (this.selected === '生物信息学院') {
                    this.subject = ['大学物理A', '线性代数A', 'C语言程序设计']
                    this.data = [0.38, 0.35, 0.27]
                }
                else if (this.selected === '体育学院') {
                    this.subject = ['运动解剖学', '形势与政策', '思想道德修养与法律基础']
                    this.data = [0.65, 0.20, 0.15]
                }
                else if (this.selected === '先进制造工程学院') {
                    this.subject = ['大学物理B', '高等数学A', '制图实践与数学化建模']
                    this.data = [0.60, 0.28, 0.12]
                }
                else if (this.selected === '外国语学院') {
                    this.subject = ['英语基础写作', '基础英语', '英语听力实践']
                    this.data = [0.38, 0.38, 0.24]
                }
                else if (this.selected === '网络空间安全与信息法学院') {
                    this.subject = ['大学物理B', '高等数学A', 'C程序设计能力测评']
                    this.data = [0.59, 0.27, 0.14]
                }
                else if (this.selected === '国际学院') {
                    this.subject = ['高等数学A', '大学物理B', '数据结构与算法B']
                    this.data = [0.51, 0.36, 0.13]
                }
                this.draw()
            }
        }
    }
</script>

<style lang="less" scoped>
    .zuinankemu {
        width: 100%;
        height: 100%;
    }

    .kemu-header {
        width: 80%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #kemu-container {
        width: 85%;
        height: 480px;
        margin: 0 auto;
    }

    .title {
        width: 140px;
        height: 27px;
        background: url('../../assets/tzuinankemu.png') no-repeat;
        background-size: 100% 100%;
    }
    #select {
        width: 270px;
        height: 40px;
        border: solid 3px #432a92;
        outline: none;
        border-radius: 5px;
        border-right: none;
        font-size: 14px;
        padding-left: 10px;
        color: #331f75;
        background:url("../../assets/select.png") no-repeat scroll right center #d5fbff;
        cursor: pointer;
        option {
            color: #331f75;
        }
        /*清除select默认样式*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        -ms-appearance:none;
    }
</style>