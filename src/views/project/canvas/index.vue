<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="canvas_box">
          <canvas id="canvas1"></canvas>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'canvasDemo',
  data() {
    return {}
  },
  mounted() {
    this.draw('canvas1', '进度条', 60, 0, 100)
  },
  methods: {
    draw(obj, type, value, min, max) {
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
      const radius = 0.76 * height // 圆环半径
      const linewidth = 30 // 圆环粗细
      const Color = color // 圆环颜色   绿色为#5ce191  深色为#42db7d
      const Min = min
      const Max = max
      let Value = value // 进度值
      if (Value > Max) {
        Value = Max
      }
      const enAngle = 0.75 * Math.PI + (Value / (Max - Min)) * (1.5 * Math.PI)
      //   const Rx = width - radius * Math.cos(enAngle - Math.PI)
      //   const Ry = centrtY - radius * Math.sin(enAngle - Math.PI)
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
          ctx.font = "44px '微软雅黑'"
          ctx.fillText(value + '%', centerX - 40, centrtY)
          ctx.font = "30px '微软雅黑'"
          ctx.fillText(type, centerX - 36, centrtY + 48)
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

<style>
.canvas_box {
  width: 100%;
  height: 280px;
}
#canvas1 {
  width: 100%;
}
</style>
