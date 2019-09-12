<template>
  <div>
    <el-row>
      <el-col :xl="4" :xs="4" :md="4" :lg="4">
        <div class="menu_box">
          <div v-for="(item,index) of menuData" :key="index">
            <span @click="getContent(item.href,item.title)">{{item.title}}</span>
          </div>
        </div>
      </el-col>
      <el-col :xl="20" :xs="20" :md="20" :lg="20">
        <div v-if="Cshow">
          <div class="title">{{Title}}</div>
          <p align="left" class="content">{{Content}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'reader',
  data() {
    return {
      Cshow: false,
      menuData: [],
      Title: '',
      Content: ''
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      axios.get(`http://172.100.30.225:3030/u123`).then(response => {
        this.menuData = response.data
        console.log(this.menuData)
      })
    },
    getContent(href, title) {
      this.Title = title
      axios
        .get(`http://172.100.30.225:3030/getContent`, {
          params: { href: href }
        })
        .then(response => {
          this.Cshow = true
          console.log(response)
          this.Content = response.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu_box {
  width: 100%;
  span {
    cursor: pointer;
    color: #000;
    font-size: 16px;
  }
}
.title {
  font-size: 26px;
}
.content {
  border: 1px solid rgb(56, 167, 241);
  padding: 15px;
  white-space: pre-wrap;
  font-size: 20px;
}
</style>
