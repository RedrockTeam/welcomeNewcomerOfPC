<template>
    <div class="zuinankemu">
        <div class="kemu-header">
            <div class="left">重邮最难科目</div>
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
                test: 0.09
            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('kemu-container'))
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['大学英语', '大学体育', '形式与政策'],
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
                        }
                    },
                    series: [{
                        data: [this.test, 0.05, 0.02],
                        type: 'bar',
                        color: function (params) {
                            var colorList = ['#ffbff9', '#9ce8ff', '#94f8f4'];
                            return colorList[params.dataIndex]
                        },
                        barWidth: 100,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
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
        }
    }
</script>

<style lang="less" scoped>
    .zuinankemu {
        width: 100%;
        height: 100%;
    }

    .kemu-header {
        width: 100%;
        height: 100px;
    }

    #kemu-container {
        width: 85%;
        height: 480px;
        margin: 0 auto;
    }

    .left {
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        color: #432a92;
        text-shadow: 1px 1px #452f8b;
    }
</style>