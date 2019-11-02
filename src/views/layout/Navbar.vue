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
</style>
