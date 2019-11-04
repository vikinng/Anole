<template>
  <div class="content">
    <el-row>
      <el-col :lg="3">
        <div class="clock"></div>
      </el-col>
      <el-col :lg="18">
        <div>
          <div class="wrapper">
            <svg width="100%" height="100%">
              <text text-anchor="middle" x="50%" y="50%" class="text text-1">Anole运维支撑系统</text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-2">Anole运维支撑系统</text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-3">Anole运维支撑系统</text>
              <text text-anchor="middle" x="50%" y="50%" class="text text-4">Anole运维支撑系统</text>
            </svg>
          </div>
        </div>
      </el-col>
      <el-col :lg="3">
        <div class="clock">{{Hour}}:{{Minute}}:{{Second}}</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :lg="8">
        <div id="chart1"></div>
      </el-col>
      <el-col :lg="8">
        <lottie :options="defaultOptions" :height="height" :width="width"/>
      </el-col>
      <el-col :lg="8">
        <div id="chart2"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="8">
        <div id="chart3"></div>
      </el-col>
      <el-col :lg="8">
        <div id="chart4">
          <div>机房:56</div>
          <div>CMTS:39台</div>
          <div>OLT:45台</div>
          <div>CM:826542</div>
          <div>VIP客户:1065</div>
          <div>持续告警:125</div>
          <div>维护工单:395</div>
        </div>
      </el-col>
      <el-col :lg="8">
        <el-row>
          <el-col :lg="12">
            <div class="canvas_box">
              <canvas id="canvas1"></canvas>
            </div>
          </el-col>
          <el-col :lg="12">
            <div class="canvas_box">
              <canvas id="canvas2"></canvas>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import Lottie from './lottie/lottie.vue'
import * as animationData from '@/assets/lottie/worldMap.json'
export default {
  name: 'largeMap',
  components: {
    lottie: Lottie
  },
  data() {
    return {
      timer1: '',
      Hour: '',
      Minute: '',
      Second: '',
      height: 440,
      width: 600,
      defaultOptions: { animationData: animationData }
    }
  },
  mounted() {
    this.draw()
    this.open()

    this.timer1 = setInterval(this.draw, 2500)
    this.$nextTick(() => {
      this.drawCanvas('canvas1', '达标率', 15, 0, 100)
      this.drawCanvas('canvas2', '达标率', 88, 0, 100)
    })
  },
  methods: {
    draw() {
      const Day = new Date()
      this.Hour = Day.getHours()
      this.Minute =
        Day.getMinutes() < 10 ? '0' + Day.getMinutes() : Day.getMinutes()
      this.Second =
        Day.getSeconds() < 10 ? '0' + Day.getSeconds() : Day.getSeconds()
      const data1 = (Math.random() * 40 + 55).toFixed(0)
      const data2 = (Math.random() * 40 + 55).toFixed(0)
      const data3 = (Math.random() * 40 + 55).toFixed(0)
      const data4 = (Math.random() * 40 + 55).toFixed(0)
      const data5 = (Math.random() * 40 + 55).toFixed(0)
      this.intChart(data1, data2, data3, data4, data5)
      this.intLine(data1, data2, data3, data4, data5)
      this.intPie2(data1, data2, data3, data4, data5)
    },
    intChart(data1, data2, data3, data4, data5) {
      this.chart = echarts.init(document.getElementById('chart1'))
      const option = {
        backgroundColor: '#191919',
        xAxis: {
          data: ['天威', '天隆', '南山', '罗湖', '光明'],
          axisTick: {
            show: true
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#fff',
              size: 20
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
    intLine(data1, data2, data3, data4, data5) {
      this.chart = echarts.init(document.getElementById('chart2'))
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
        backgroundColor: '#191919',
        grid: {
          left: '60',
          top: '30',
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
            data: [data5, data4, data2, data2, data1].sort(function(a, b) {
              return a - b
            }),
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
      this.chart = echarts.init(document.getElementById('chart3'))

      const option = {
        backgroundColor: '#191919',
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
    },
    open() {
      this.$notify.error({
        title: '实时告警信息',
        position: 'top-left',

        dangerouslyUseHTMLString: true,
        message: 'VIP客户-某某某CM掉线'
      })
    },
    drawCanvas(obj, type, value, min, max) {
      let color = '#42db7d'
      if (value === '--' || value === undefined) {
        value = 0
      }
      if (value >= 0 && value <= 20) {
        color = '#42db7d'
      } else if (value > 20 && value < 40) {
        color = '#4cc2ff'
      } else if (value >= 40 && value <= 60) {
        color = '#fddc42'
      } else if (value > 60 && value < 80) {
        color = '#ffa400'
      } else if (value >= 80 && value <= 100) {
        color = '#fb4765'
      }
      const canvas_box = document.getElementsByClassName('canvas_box')[0]
      const canvas1 = document.getElementById(obj)
      canvas1.height = 120
      const obj_w = canvas_box.offsetWidth
      const obj_h = canvas_box.offsetHeight

      canvas1.setAttribute('width', obj_w * 2)
      canvas1.setAttribute('height', obj_h * 2)
      canvas1.style.width = obj_w + 'px'
      canvas1.style.height = obj_h + 'px'

      const width = canvas1.width / 2
      const height = canvas1.height / 2
      const ctx = canvas1.getContext('2d')
      const centerX = width
      const centrtY = height + 0.08 * height
      const radius = 0.56 * height // 圆环半径
      const linewidth = 40 // 圆环粗细
      const Color = color // 圆环颜色   绿色为#5ce191  深色为#42db7d
      const Min = min
      const Max = max
      let Value = value // 进度值
      if (Value > Max) {
        Value = Max
      }
      const enAngle = 0.75 * Math.PI + (Value / (Max - Min)) * (1.5 * Math.PI)
      let angle_obj = 0.75 * Math.PI

      const timer = setInterval(draw_process, 10)

      function draw_process() {
        if (angle_obj > enAngle) {
          angle_obj = enAngle - (enAngle - angle_obj)
          clearTimeout(timer)
        }
        const Rx_obj = width - radius * Math.cos(angle_obj - Math.PI)
        const Ry_obj = centrtY - radius * Math.sin(angle_obj - Math.PI)
        ctx.clearRect(0, 0, canvas1.width, canvas1.width)
        // 写文字
        if (type === 'Temp') {
          ctx.font = "44px '微软雅黑'"
          ctx.fillText(value + '°C', centerX - 40, centrtY)
          ctx.font = "30px '微软雅黑'"
          ctx.fillText(type, centerX - 36, centrtY + 48)
        } else {
          ctx.font = "50px '微软雅黑'"
          ctx.fillText(value + '%', centerX - 40, centrtY)
          ctx.font = "44px '微软雅黑'"
          ctx.fillStyle = '#fff'
          ctx.fillText(type, centerX - 56, centrtY + 48)
        }

        // 画底部圆环
        ctx.beginPath()
        ctx.lineCap = 'round' // 笔帽带上圆角
        ctx.lineWidth = linewidth
        ctx.strokeStyle = '#ebeff5'
        ctx.arc(centerX, centrtY, radius, 0.75 * Math.PI, 2.25 * Math.PI)
        ctx.stroke()
        ctx.closePath()
        // 画进度条
        ctx.beginPath()
        ctx.lineCap = 'round' // 笔帽带上圆角
        ctx.lineWidth = linewidth
        ctx.strokeStyle = Color
        ctx.arc(centerX, centrtY, radius, 0.75 * Math.PI, angle_obj)
        ctx.stroke()
        ctx.closePath()

        // 画圆圈
        ctx.beginPath()
        ctx.lineCap = 'round' // 笔帽带上圆角
        ctx.lineWidth = 5
        ctx.strokeStyle = Color
        ctx.arc(Rx_obj, Ry_obj, 8, 0 * Math.PI, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        // 画圆圈-内圆
        ctx.beginPath()
        ctx.lineCap = 'round' // 笔帽带上圆角
        ctx.lineWidth = 8
        ctx.strokeStyle = '#fff'
        ctx.arc(Rx_obj, Ry_obj, 4, 0 * Math.PI, 2 * Math.PI)
        ctx.stroke()
        ctx.closePath()

        angle_obj += 0.01 * Math.PI
      }

      window.onresize = () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  background: #191919;
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  width: 100%;
  height: 130px;
}
.text {
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 8s infinite linear;
}

.text-1 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -1.5s;
}

.text-2 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -3s;
}

.text-3 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -4.5s;
}

.text-4 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
.clock {
  width: 100%;
  height: 70px;
  color: #fff;
  padding-top: 12px;
  font-size: 40px;
}
#chart1 {
  width: 100%;
  height: 440px;
}
#chart2 {
  width: 100%;
  height: 440px;
}
#chart3 {
  width: 100%;
  height: 440px;
}
#chart4 {
  width: 100%;
  height: 440px;
  color: #fff;
  font-size: 32px;
  padding-top: 48px;
}
.canvas_box {
  width: 100%;
  height: 440px;
  background: #191919;
}
#canvas1 {
  width: 100%;
}
</style>
