<template>
  <div class="content">
    <el-row>
      <el-col :lg="6">
        <div class="svg_div">SVG</div>
      </el-col>
      <el-col :lg="6">
        <div class="canvas_div">Canvas</div>
      </el-col>
      <el-col :lg="6">
        <div class="echart_div">Echarts</div>
      </el-col>
      <el-col :lg="6">
        <div class="others_div">Others</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.content {
  background: #0e202d;
  height: 100vh;
}
.svg_div {
  background: #0e202d;
  color: #fff;
  font-size: 88px;
  line-height: 90vh;
  width: 100%;
  height: 100vh;
}
.canvas_div {
  background: #142531;
  color: #fff;
  font-size: 88px;
  line-height: 90vh;
  width: 100%;
  height: 100vh;
}
.echart_div {
  background: #1d2c38;
  color: #fff;
  font-size: 88px;
  line-height: 90vh;
  width: 100%;
  height: 100vh;
}
.others_div {
  background: #293742;
  color: #fff;
  font-size: 88px;
  line-height: 90vh;
  width: 100%;
  height: 100vh;
}
</style>
