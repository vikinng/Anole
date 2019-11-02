<template>
  <div>
    <el-carousel arrow="always" :height="'880px'" :autoplay="autoplay" :loop="autoplay">
      <el-carousel-item>
        <drawSvg></drawSvg>
      </el-carousel-item>
      <el-carousel-item>
        <drawCanvas></drawCanvas>
      </el-carousel-item>
      <el-carousel-item>
        <drawEchart></drawEchart>
      </el-carousel-item>
      <el-carousel-item>
        <lottie></lottie>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import drawSvg from './drawSvg'
import drawCanvas from './drawCanvas'
import drawEchart from './drawEchart'
import lottie from './lottie'
export default {
  name: 'dataView',
  components: {
    drawSvg,
    drawCanvas,
    drawEchart,
    lottie
  },
  data() {
    return {
      autoplay: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
