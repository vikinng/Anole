<template>
  <div>
    <input v-model="Mes">
    <el-button @click="send">发送</el-button>
    <div class="chat_box" v-html="Res"></div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'NetList',
  data() {
    return {
      Mes: '',
      Res: '',
      itemArr: [],
      socket: io('http://172.100.30.225:3000')
    }
  },
  mounted() {
    this.getData()
    this.socket.on('get', val => {
      console.log(val)
      this.Res = this.Res + '<br>' + val
    })
  },
  methods: {
    getData() {
      this.socket.on('message', val => {
        console.log(val)
      })
    },
    send() {
      this.socket.emit('put', this.Mes)
      this.Res = this.Res + '<br>' + this.Mes
    }
  }
}
</script>

<style>
.chat_box {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
