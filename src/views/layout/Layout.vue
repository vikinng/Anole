<template>
  <div class="app_wrapper">
    <navbar></navbar>
    <div class="box_wrapper">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AppMain from './AppMain'
export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.app_wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.box_wrapper {
  height: 89vh;
  overflow: auto;
  padding-bottom: 18px;
  background: #f4f4f4;
}
.box_wrapper::-webkit-scrollbar {
  width: 8px;
  height: 9px;
  background-color: #f2f2f2;
}
.box_wrapper::-webkit-scrollbar-thumb {
  //滚动条的设置
  border-radius: 2px;
  background-color: #c4c3c3;
  background-clip: padding-box;
  min-height: 28px;
}
</style>
