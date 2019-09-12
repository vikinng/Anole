<template>
  <div>
    <div class="chart_room">
      <el-card body-style="padding:0">
        <div slot="header">聊天室</div>
        <div id="chart_view" class="chart_view">
          <el-row>
            <el-col :xs="24" :xl="24" :md="24" :lg="24" v-for="item in messageList" :key="item.id">
              <span :class="item.class">{{item.content}}</span>
            </el-col>
          </el-row>
        </div>
        <div class="sent_view">
          <!-- <div class="tool_menu">
            <span @click="showEmoji=!showEmoji">表情</span>
            <div class="emoji-box" v-if="showEmoji">
              <Emoji @select="selectEmoji"></Emoji>
            </div>
          </div>-->
          <input type="textarea" class="sent_input" v-model="Mes" @keyup.enter="send">
          <el-button type="primary" style="float:right;margin:5px;" @click="send">发送</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import Emoji from '../emoji'
import { emoji } from '@/utils/emoji.js'
export default {
  name: 'NetList',
  components: {
    Emoji
  },
  data() {
    return {
      Mes: '',
      Res: '',
      itemArr: [],
      socket: io('http://172.100.30.225:3000'),
      messageList: [],
      showEmoji: false
    }
  },
  mounted() {
    this.getData()
    this.socket.on('get', val => {
      const date = new Date().getTime()
      console.log(val)
      this.messageList.push({
        id: date,
        class: 'left_mess',
        content: val
      })
      var chart_view = document.getElementById('chart_view')
      this.$nextTick(() => {
        chart_view.scrollTop = chart_view.scrollHeight
      })
    })
  },
  methods: {
    getData() {
      this.socket.on('message', val => {
        console.log(val)
      })
    },
    send() {
      if (this.Mes !== '') {
        const date = new Date().getTime()
        this.socket.emit('put', this.Mes)
        this.messageList.push({
          id: date,
          class: 'right_mess',
          content: this.Mes
        })
        console.log(this.messageList)
        this.Mes = ''

        var chart_view = document.getElementById('chart_view')
        this.$nextTick(() => {
          chart_view.scrollTop = chart_view.scrollHeight
        })
      }
    },
    selectEmoji(code) {
      this.showEmoji = false
      this.Mes += code
      this.Mes = emoji(this.Mes)
      console.log(this.Mes)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat_box {
  width: 100%;
  height: 300px;
  border: 1px solid red;
}
.chart_room {
  width: 600px;
  margin: 0 auto;
}
.chart_view {
  width: 100%;
  height: 400px;
  overflow: auto;
}

.chart_view::-webkit-scrollbar {
  width: 8px;
  height: 1px;
}
.chart_view::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #d3d1d1;
}
.chart_view::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #f3f2f2;
}
.sent_view {
  border-top: 1px solid rgb(211, 210, 210);
}
.sent_input {
  border: none;
  width: 592px;
  height: 100px;
  font-size: 26px;
}
.sent_input:focus {
  outline: none;
  width: 592px;
  height: 100px;
}
.left_mess {
  display: block;
  margin: 10px;
  padding: 0 10px 0 10px;
  float: left;
  height: 30px;
  background: #ff9800;
  line-height: 30px;
  border-radius: 5px;
}
.right_mess {
  display: block;
  margin: 10px;
  padding: 0 10px 0 10px;
  float: right;
  height: 30px;
  background: #00b9a7;
  line-height: 30px;
  border-radius: 5px;
}
.tool_menu {
  width: 596px;
  height: 30px;
  border: 1px solid red;
  .emoji-box {
    margin-top: -340px;
    margin-left: -140px;
  }
}
</style>
