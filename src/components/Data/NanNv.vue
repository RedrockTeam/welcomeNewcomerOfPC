<template>
    <div class="nannvbili">
        <div class="nannv-header"></div>
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

            }
        },
        methods: {
            draw() {
                let myChart = echarts.init(document.getElementById('nannv-container'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {d}%"
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
                                value: 21,
                                name: '女'
                            },
                            {
                                value: 79,
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
        }
    }
</script>

<style lang="less" scoped>
    .nannvbili {
        width: 100%;
        height: 100%;
    }

    .nannv-header {
        width: 100%;
        height: 100px;
    }

    #nannv-container {
        width: 100%;
        height: 480px;
        background: url('../../assets/bluecircle.png') no-repeat;
        background-position: 50% 0;
        background-size: 50%;
    }
</style>