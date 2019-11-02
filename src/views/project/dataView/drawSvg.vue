<template>
  <div>
    <div class="content">
      <div class="wrapper">
        <svg width="100%" height="100%">
          <text text-anchor="middle" x="50%" y="50%" class="text text-1">TopWay</text>
          <text text-anchor="middle" x="50%" y="50%" class="text text-2">TopWay</text>
          <text text-anchor="middle" x="50%" y="50%" class="text text-3">TopWay</text>
          <text text-anchor="middle" x="50%" y="50%" class="text text-4">TopWay</text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataView'
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100vh;
  background: #182430;
}
.wrapper {
  height: 90vh;
}
.text {
  font-size: 110px;
  font-weight: bold;
  text-transform: uppercase;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}

.text-1 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -1.5s;
}

.text-2 {
  stroke: #f39c12;
  text-shadow: 0 0 5px #f39c12;
  animation-delay: -3s;
}

.text-3 {
  stroke: #e74c3c;
  text-shadow: 0 0 5px #e74c3c;
  animation-delay: -4.5s;
}

.text-4 {
  stroke: #9b59b6;
  text-shadow: 0 0 5px #9b59b6;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
