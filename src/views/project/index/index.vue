<template>
  <div class="main_content">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/lottie')" @mouseenter="cont_class1='cont_text_hover'">
          <div class="cont_img" @mouseenter="show1=true">
            <lottie v-if="show1"></lottie>
          </div>
          <div :class="cont_class1">
            <span class="cont_title">Lottie动画</span>
            <span class="cont_info">2019/4/16</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/canvasDemo')" @mouseenter="cont_class2='cont_text_hover'">
          <div class="cont_img" @mouseenter="show2=true">
            <canvasDemo v-if="show2"></canvasDemo>
          </div>
          <div :class="cont_class2">
            <span class="cont_title">Canvas进度条</span>
            <span class="cont_info">2019/4/25</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/threeDemo')" @mouseenter="cont_class3='cont_text_hover'">
          <div class="cont_img" @mouseenter="show3=true">
            <threeDemo v-if="show3"></threeDemo>
          </div>
          <div :class="cont_class3">
            <span class="cont_title">3维机房展示</span>
            <span class="cont_info">2019/4/25</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="Box" @click="linkTo('/workspace/Sudoku')" @mouseenter="cont_class4='cont_text_hover'">
          <div class="cont_img" @mouseenter="show4=true">
            <Sudoku v-if="show4"></Sudoku>
          </div>
          <div :class="cont_class4">
            <span class="cont_title">解数独</span>
            <span class="cont_info">2019/4/28</span>
          </div>
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
import Sudoku from '../Sudoku'
import Vue from 'vue'
const lottie = Vue.component('lottie', function(resolve) {
  setTimeout(function() {
    require(['../lottie'], resolve)
  }, 100)
})
const canvasDemo = Vue.component('canvasDemo', function(resolve) {
  setTimeout(function() {
    require(['../canvas'], resolve)
  }, 100)
})
const threeDemo = Vue.component('threeDemo', function(resolve) {
  setTimeout(function() {
    require(['../three'], resolve)
  }, 100)
})
export default {
  name: 'Content',
  components: {
    lottie,
    canvasDemo,
    threeDemo,
    Sudoku
  },
  data() {
    return {
      cont_class1: 'cont_text',
      cont_class2: 'cont_text',
      cont_class3: 'cont_text',
      cont_class4: 'cont_text',
      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
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
  cursor: pointer;
  .cont_img {
    background: #eaeaea;
    width: 100%;
    height: 280px;
  }
}
.cont_text {
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 999;
  margin-top: -280px;
  font-size: 26px;
  span {
    transition: 0.3s;
    display: block;
  }
  .cont_title {
    line-height: 200px;
  }
  .cont_info {
    line-height: 60px;
  }
}

.cont_text_hover {
  width: 105%;
  height: 50px;
  background: #fff;
  z-index: 999;
  margin-left: -10px;
  margin-right: -40px;
  margin-top: -18px;
  font-size: 20px;
  span {
    transition: 0.3s;
    display: inline;
  }
  .cont_title {
    line-height: 50px;
  }
  .cont_info {
    line-height: 50px;
  }
}
</style>
