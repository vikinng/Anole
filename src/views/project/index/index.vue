<template>
  <div class="main_content">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/lottie')">
          <div class="cont_img">
            <lottie></lottie>
          </div>
          <div class="cont_text">
            <span class="cont_title">Lottie动画</span>
            <span class="cont_info">2019/4/16</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/canvasDemo')">
          <div class="cont_img">
            <canvasDemo></canvasDemo>
          </div>
          <div class="cont_text">
            <span class="cont_title">Canvas进度条</span>
            <span class="cont_info">2019/4/25</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/threeDemo')">
          <div class="cont_img">
            <threeDemo></threeDemo>
            <div class="cont_text">
              <span class="cont_title">3维机房展示</span>
              <span class="cont_info">2019/4/25</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box">
          <div class="cont_img"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box">111</div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box">222</div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box">222</div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box">222</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lottie from '../lottie'
import canvasDemo from '../canvas'
import threeDemo from '../three'
export default {
  name: 'Content',
  components: {
    lottie,
    canvasDemo,
    threeDemo
  },
  methods: {
    linkTo(url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main_content {
  padding: 40px 40px 0px 40px;
  overflow-x: hidden;
}
.Box {
  width: 100%;
  height: 300px;
  border-radius: 2px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 10px silver;
  margin-bottom: 34px;
  padding: 10px;
  .cont_img {
    background: #eaeaea;
    width: 100%;
    height: 280px;
  }
}
.cont_text {
  width: 100%;
  height: 25px;
  background: #fff;
  z-index: 999;
  transition: 0.3s;
}
.Box:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px rgb(173, 172, 172);
  .cont_text {
    width: 105%;
    height: 50px;
    background: #fff;
    z-index: 999;
    margin-left: -10px;
    margin-right: -40px;
    margin-top: -18px;
  }
}
</style>
