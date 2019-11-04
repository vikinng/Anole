<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="navbar">
          <el-row>
            <el-col :xs="2" :md="2" :lg="2">
              <div class="nav_icon" @click="linkTo">
                <img style="width:126px;" src="@/assets/anole.png">
              </div>
            </el-col>

            <div class="git_address" style="color:#fff;float:right;" @click="linkToGit">https://github.com/vikinng/Anole.git</div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    linkTo() {
      this.$router.push({
        path: '/workspace/index'
      })
    },
    linkToGit() {
      window.open('https://github.com/vikinng/Anole.git', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 58px;
  background: #000;
}
.nav_icon {
  cursor: pointer;
}
.git_address {
  color: #fff;
  float: right;
  cursor: pointer;
  font-size: 26px;
  margin-top: 12px;
  margin-right: 12px;
}
</style>
