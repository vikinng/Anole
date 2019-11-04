<template>
  <div id="app_lottie">
    <div @mousedown="link">
      <lottie :options="defaultOptions" :height="height" :width="width" v-on:animCreated="handleAnimation"/>
    </div>
    <div v-if="detailShow">
      <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button>
    </div>
  </div>
</template>

<script>
import Lottie from './lottie.vue'
import * as animationData from '@/assets/lottie/battery.json'
export default {
  name: 'app',
  components: {
    lottie: Lottie
  },
  data() {
    return {
      height: 300,
      width: 300,
      detailShow: true,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    }
  },
  created() {
    if (this.$route.path === '/workspace/index') {
      this.height = 280
      this.width = 280
      this.detailShow = false
    } else {
      this.height = 400
      this.width = 400
      this.detailShow = true
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    },
    stop: function() {
      this.anim.stop()
    },
    play: function() {
      this.anim.play()
    },
    pause: function() {
      this.anim.pause()
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed)
    },
    link() {
      window.open('https://lottiefiles.com/recent', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
#app_lottie {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #182430;
  padding-top: 200px;
  height: 100vh;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
