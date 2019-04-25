<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Content',
  computed: {
    key() {
      return this.$route.fullPath
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
</style>
