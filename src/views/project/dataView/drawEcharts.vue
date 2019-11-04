<template>
  <div class="content">
    <el-row>
      <el-col :lg="16">
        <div id="chart_1"></div>
      </el-col>
      <el-col :lg="8">
        <div id="chart_2"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="16">
        <div id="chart_3"></div>
      </el-col>
      <el-col :lg="8">
        <div id="chart_4"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  data() {
    return {
      timer1: ''
    }
  },
  mounted() {
    this.timer1 = setInterval(this.draw, 2500)
  },
  methods: {
    draw() {
      const data1 = (Math.random() * 40 + 60).toFixed(2)
      const data2 = (Math.random() * 40 + 60).toFixed(2)
      const data3 = (Math.random() * 40 + 60).toFixed(2)
      const data4 = (Math.random() * 40 + 60).toFixed(2)
      const data5 = (Math.random() * 40 + 60).toFixed(2)
      this.intChart(data1, data2, data3, data4, data5)
      this.intPie(data1, data2, data3, data4, data5)
      this.intLine(data1, data2, data3, data4, data5)
      this.intPie2(data1, data2, data3, data4, data5)
    },
    intChart(data1, data2, data3, data4, data5) {
      this.chart = echarts.init(document.getElementById('chart_1'))
      const option = {
        backgroundColor: '#0e202d',
        tooltip: {},
        xAxis: {
          data: ['天威', '天隆', '南山', '罗湖', '光明'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#e54035'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: 'NPA统计',
            type: 'pictorialBar',
            symbolSize: [50, 25.5],
            symbolOffset: [0, -10],
            z: 6,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: [
              {
                value: data1,
                symbolPosition: 'end'
              },
              {
                value: data2,
                symbolPosition: 'end'
              },
              {
                value: data3,
                symbolPosition: 'end'
              },
              {
                value: data4,
                symbolPosition: 'end'
              },
              {
                value: data5,
                symbolPosition: 'end'
              }
            ]
          },
          {
            name: 'NPA统计',
            type: 'pictorialBar',
            symbolSize: [50, 25.5],
            symbolOffset: [0, 10],
            z: 6,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: [data1, data2, data3, data4, data5]
          },
          {
            name: 'NPA统计',
            type: 'pictorialBar',
            symbolSize: [75, 35.5],
            symbolOffset: [0, 18.5],
            z: 11,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderWidth: 2.5
              }
            },
            data: [data1, data2, data3, data4, data5]
          },
          {
            name: 'NPA统计',
            type: 'pictorialBar',
            symbolSize: [100, 50],
            symbolOffset: [0, 25],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'dashed',
                borderWidth: 2.5
              }
            },
            data: [data1, data2, data3, data4, data5]
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#14b1eb',
                opacity: 0.7
              }
            },
            silent: true,
            barWidth: 50,
            barGap: '-100%', // Make series be overlap
            data: [data1, data2, data3, data4, data5]
          }
        ]
      }
      this.chart.setOption(option)
    },
    intPie(data1, data2, data3, data4, data5) {
      const arr = [data1, data2, data3, data4, data5].sort(function(a, b) {
        return a - b
      })
      const min = arr[0]
      const max = arr[arr.length - 1]
      console.log(min)
      console.log(max)
      this.chart = echarts.init(document.getElementById('chart_2'))
      const option = {
        backgroundColor: '#0e202d',
        visualMap: {
          show: false,
          min: min - 5,
          max: max + 5,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: data1, name: '天威' },
              { value: data2, name: '天隆' },
              { value: data3, name: '南山' },
              { value: data4, name: '罗湖' },
              { value: data5, name: '光明' }
            ].sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.8)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.8)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#03a9f4',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200
            }
          }
        ]
      }
      this.chart.setOption(option)
    },
    intLine(data1, data2, data3, data4, data5) {
      this.chart = echarts.init(document.getElementById('chart_3'))
      const myColor = [
        '#eb3600',
        '#d0570e',
        '#d0a00e',
        '#34da62',
        '#00e9db',
        '#00c0e9',
        '#0096f3',
        '#33CCFF',
        '#33FFCC'
      ]
      const option = {
        backgroundColor: '#0e202d',
        grid: {
          left: '140',
          top: '12',
          right: '18',
          bottom: '8',
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '16'
              }
            },
            data: ['光明', '罗湖', '南山', '天隆', '天威']
          },
          {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '16'
              }
            },
            data: ['5', '4', '3', '2', '1']
          },
          {
            name: '分拨延误TOP 10',
            nameGap: '50',
            nameTextStyle: {
              color: '#ffffff',
              fontSize: '16'
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0)'
              }
            },
            data: []
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [data5, data4, data2, data2, data1],
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16'
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                }
              }
            },
            z: 2
          },
          {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#0e202d',
                barBorderRadius: 5
              }
            },
            z: 1
          },
          {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 5
              }
            },
            z: 0
          },
          {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      }
      this.chart.setOption(option)
    },
    intPie2(data1, data2, data3, data4, data5) {
      this.chart = echarts.init(document.getElementById('chart_4'))

      const option = {
        backgroundColor: '#0e202d',
        color: ['#5CF9FE'],
        grid: { left: '5px', right: '5px', top: '5px', bottom: '5px' },
        tooltip: { show: false },
        legend: { show: false },
        series: [
          {
            type: 'pie',
            radius: '66%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
              normal: {
                color: {
                  x: 0.5,
                  y: 0.5,
                  r: 1,
                  type: 'radial',
                  global: false,
                  colorStops: [
                    { offset: 0, color: 'rgba(17,24,43,0)' },
                    { offset: 0.5, color: 'rgba(28,42,91,.6)' },
                    { offset: 1, color: '#141C33' }
                  ]
                },
                label: { show: false },
                labelLine: { show: false }
              }
            },
            hoverAnimation: false,
            label: { show: false },
            tooltip: { show: false },
            data: [100]
          },
          {
            type: 'pie',
            radius: '56%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
              normal: {
                color: {
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  type: 'radial',
                  global: false,
                  colorStops: [
                    { offset: 0, color: '#4978EC' },
                    { offset: 0.5, color: '#1E2B57' },
                    { offset: 1, color: '#141F3D' }
                  ]
                },
                label: { show: false },
                labelLine: { show: false }
              }
            },
            hoverAnimation: false,
            label: { show: false },
            tooltip: { show: false },
            data: [100]
          },
          {
            type: 'gauge',
            name: '外层辅助',
            radius: '60%',
            startAngle: '225',
            endAngle: '-134.999',
            splitNumber: '100',
            pointer: { show: false },
            detail: { show: false },
            data: [{ value: 1 }],
            title: {
              show: true,
              offsetCenter: [0, 30],
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 20
              }
            },
            axisLine: {
              show: true,
              lineStyle: { color: [[1, '#00FFFF']], width: 2, opacity: 1 }
            },
            axisTick: { show: false },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: { color: '#051932', width: 0, type: 'solid' }
            },
            axisLabel: { show: false }
          },
          {
            type: 'gauge',
            name: '外层辅助',
            radius: '45%',
            startAngle: '225',
            endAngle: '-134.999',
            splitNumber: '100',
            pointer: { show: false },
            detail: { show: false },
            data: [{ value: 1 }],
            title: {
              show: true,
              offsetCenter: [0, 30],
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 20
              }
            },
            axisLine: {
              show: true,
              lineStyle: { color: [[1, '#00FFFF']], width: 2, opacity: 1 }
            },
            axisTick: { show: false },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: { color: '#051932', width: 0, type: 'solid' }
            },
            axisLabel: { show: false }
          },
          {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '56%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: { show: true, position: 'outside', color: '#f4fff7' }
              }
            },
            data: [
              {
                value: data1,
                name: '天威',
                label: { color: '#dfe9e3' },
                labelLine: {
                  show: true,
                  length: 20,
                  length2: 40,
                  lineStyle: { color: '#053256', width: 2 }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    borderColor: '#00f948',
                    shadowColor: '#12b4ff'
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              },
              {
                value: data2,
                name: '天隆',
                label: { color: '#dfe9e3' },
                labelLine: {
                  show: true,
                  length: 20,
                  length2: 40,
                  lineStyle: { color: '#053256', width: 2 }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    borderColor: '#00f948',
                    shadowColor: '#12b4ff'
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              },
              {
                value: data3,
                name: '南山',
                label: { color: '#dfe9e3' },
                labelLine: {
                  show: true,
                  length: 20,
                  length2: 40,
                  lineStyle: { color: '#053256', width: 2 }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    borderColor: '#00f948',
                    shadowColor: '#12b4ff'
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              },
              {
                value: data4,
                name: '罗湖',
                label: { color: '#dfe9e3' },
                labelLine: {
                  show: true,
                  length: 20,
                  length2: 40,
                  lineStyle: { color: '#053256', width: 2 }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    borderColor: '#00f948',
                    shadowColor: '#12b4ff'
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              },
              {
                value: data5,
                name: '光明',
                label: { color: '#dfe9e3' },
                labelLine: {
                  show: true,
                  length: 20,
                  length2: 40,
                  lineStyle: { color: '#053256', width: 2 }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    shadowBlur: 20,
                    borderColor: '#00f948',
                    shadowColor: '#12b4ff'
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              },
              {
                value: 0.5,
                name: '',
                itemStyle: {
                  normal: {
                    label: { show: false },
                    labelLine: { show: false },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                  }
                }
              }
            ]
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  background: #0e202d;
  height: 100vh;
}
#chart_1 {
  width: 1200px;
  height: 380px;
  margin-top: 16px;
  margin-left: 30px;
}
#chart_2 {
  width: 500px;
  height: 380px;
  margin-top: 16px;
}
#chart_3 {
  width: 1200px;
  height: 380px;
  margin-top: 16px;
  margin-left: 30px;
}
#chart_4 {
  width: 500px;
  height: 380px;
  margin-top: 16px;
}
</style>
