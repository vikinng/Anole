<template>
  <div class="content">
    <div id="chart1"></div>
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
    this.timer1 = setInterval(this.draw, 500)
  },
  methods: {
    draw() {
      const data1 = Math.random() * 100
      const data2 = Math.random() * 100
      const data3 = Math.random() * 100
      this.intChart(data1, data2, data3)
    },
    intChart(data1, data2, data3) {
      this.chart = echarts.init(document.getElementById('chart1'))
      const option = {
        backgroundColor: '#0e202d',
        tooltip: {},
        xAxis: {
          data: ['企业', '农专', '个体'],
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
            name: '年报上报率3',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, -20],
            z: 12,
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
              }
            ]
          },
          {
            name: '年报上报率2',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, 20],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: [data1, data2, data3]
          },
          {
            name: '年报上报率1',
            type: 'pictorialBar',
            symbolSize: [150, 75],
            symbolOffset: [0, 37],
            z: 11,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderWidth: 5
              }
            },
            data: [data1, data2, data3]
          },
          {
            name: '年报上报率',
            type: 'pictorialBar',
            symbolSize: [200, 100],
            symbolOffset: [0, 50],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'dashed',
                borderWidth: 5
              }
            },
            data: [data1, data2, data3]
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
            barWidth: 100,
            barGap: '-100%', // Make series be overlap
            data: [data1, data2, data3]
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
#chart1 {
  width: 800px;
  height: 600px;
  position: relative;
  top: 100px;
  margin: 0 auto;
}
</style>
