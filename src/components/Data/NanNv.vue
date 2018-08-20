<template>
    <div class="nannvbili">
        <div class="nannv-header">
            <div class="title"></div>
            <select id="select" v-model="selected">
                <option>通信与信息工程学院</option>
                <option>传媒艺术学院</option>
                <option>经济管理学院/现代邮政学院</option>
                <option>软件工程学院</option>
                <option>自动化学院</option>
                <option>光电工程学院/重庆国际半导体学院</option>
                <option>计算机科学与技术学院</option>
                <option>生物信息学院</option>
                <option>理学院</option>
                <option>网络空间安全与信息法学院</option>
                <option>体育学院</option>
                <option>先进制造工程学院</option>
                <option>外国语学院</option>
                <option>国际学院</option>
            </select>
        </div>
        <div id="nannv-container"></div>
    </div>
</template>

<script>
    var echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/pie')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    require("echarts/lib/component/legendScroll")

    export default {
        data() {
            return {
                selected: '通信与信息工程学院',
                male: 1426,
                female: 582
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('nannv-container'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c}人"
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: '20px',
                        data: ['女', '男'],
                        textStyle: {
                            fontSize: 20
                        },
                    },
                    series: [{
                        name: '男女比例',
                        type: 'pie',
                        radius: '80%',
                        color: ['#ffbff9', '#79f3ed'],
                        data: [{
                                value: this.female,
                                name: '女'
                            },
                            {
                                value: this.male,
                                name: '男'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 30,
                                shadowOffsetX: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.2)',
                            },
                            normal: {
                                borderWidth: 4,
                                borderColor: '#432a92',
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: '{d}%',
                                textStyle: {
                                    align: 'center',
                                    baseline: 'middle',
                                    fontSize: 30,
                                    fontWeight: 300,
                                    color: '#000',
                                    fontFamily: 'Microsoft YaHei'
                                }
                            }
                        },
                        center: [421, 211],
                        startAngle: 180
                    }],
                })
            }
        },
        mounted() {
            this.draw()
        },
        watch: {
            selected() {
                if (this.selected === '通信与信息工程学院') {
                    this.female = 582
                    this.male = 1426
                }
                else if (this.selected === '传媒艺术学院') {
                    this.female = 1261
                    this.male = 505
                }
                else if (this.selected === '经济管理学院/现代邮政学院') {
                    this.female = 818
                    this.male = 841
                }
                else if (this.selected === '软件工程学院') {
                    this.female = 246
                    this.male = 1281
                }
                else if (this.selected === '自动化学院') {
                    this.female = 296
                    this.male = 1379
                }
                else if (this.selected === '光电工程学院/重庆国际半导体学院') {
                    this.female = 290
                    this.male = 1230
                }
                else if (this.selected === '计算机科学与技术学院') {
                    this.female = 381
                    this.male = 1372
                }
                else if (this.selected === '生物信息学院') {
                    this.female = 189
                    this.male = 323
                }
                else if (this.selected === '理学院') {
                    this.female = 406
                    this.male = 159
                }
                else if (this.selected === '网络空间安全与信息法学院') {
                    this.female = 253
                    this.male = 199
                }
                else if (this.selected === '体育学院') {
                    this.female = 35
                    this.male = 147
                }
                else if (this.selected === '先进制造工程学院') {
                    this.female = 43
                    this.male = 634
                }
                else if (this.selected === '外国语学院') {
                    this.female = 193
                    this.male = 42
                }
                else if (this.selected === '国际学院') {
                    this.female = 115
                    this.male = 426
                }
                else if (this.selected === '通信与信息工程学院') {
                    this.female = 582
                    this.male = 1426
                }
                this.draw()
            }
        }
    }
</script>

<style lang="less" scoped>
    .nannvbili {
        width: 100%;
        height: 100%;
    }

    .nannv-header {
        width: 80%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #nannv-container {
        width: 100%;
        height: 480px;
        background: url('../../assets/bluecircle.png') no-repeat;
        background-position: 50% 0;
        background-size: 50%;
    }
    .title {
        width: 100px;
        height: 27px;
        background: url('../../assets/tnannvbili.png') no-repeat;
        background-size: 100% 100%;
    }
    #select {
        width: 230px;
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