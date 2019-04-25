<template>
  <div>
    <div id="container" :class="box_class"></div>
  </div>
</template>

<script>
import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
export default {
  name: 'threeDemo',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh1: null,
      mesh2: null,
      angle: 0,
      zeroPoint: '',
      clock: '',
      orbitControls: '',
      delta: '',
      box_class: 'index_container'
    }
  },
  created() {
    if (this.$route.path === '/workspace/index') {
      this.box_class = 'index_container'
    } else {
      this.box_class = 'inner_container'
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init: function() {
      let container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        5000
      )
      this.camera.position.set(15, 30, 116)
      this.zeroPoint = new Three.Vector3(0, 0, 0)

      this.scene = new Three.Scene()

      let light = new Three.DirectionalLight(0xffffff)
      light.position.set(0, 1, 1).normalize()
      this.scene.add(light)

      let geometry = new Three.BoxGeometry(260, 1, 130)

      let texture = new Three.ImageUtils.loadTexture('/static/floor.jpg')
      texture.wrapS = texture.wrapT = Three.RepeatWrapping
      texture.repeat.set(14, 14)
      let material = new Three.MeshPhongMaterial()
      material.map = texture

      this.mesh1 = new Three.Mesh(geometry, material)
      this.mesh1.position.y = -14
      this.scene.add(this.mesh1)

      // 机架
      let geometry2 = new Three.BoxGeometry(10, 28, 10)
      let framFace = []
      let texture2 = new Three.ImageUtils.loadTexture('/static/fram_front.jpg')
      let material2 = new Three.MeshBasicMaterial()
      material2.map = texture2

      let texture3 = new Three.ImageUtils.loadTexture('/static/timg.jpg')
      let material3 = new Three.MeshBasicMaterial()
      material3.map = texture3

      framFace.push(
        new Three.MeshBasicMaterial({
          map: new Three.ImageUtils.loadTexture('/static/fram_side.jpg')
        })
      )
      framFace.push(
        new Three.MeshBasicMaterial({
          map: new Three.ImageUtils.loadTexture('/static/fram_side.jpg')
        })
      )
      framFace.push(new Three.MeshPhongMaterial({ color: '#494949' }))
      framFace.push(
        new Three.MeshBasicMaterial({
          map: new Three.ImageUtils.loadTexture('/static/fram_side.jpg')
        })
      )

      framFace.push(
        new Three.MeshBasicMaterial({
          map: new Three.ImageUtils.loadTexture('/static/fram_front.jpg')
        })
      )
      framFace.push(
        new Three.MeshBasicMaterial({
          map: new Three.ImageUtils.loadTexture('/static/fram_side.jpg')
        })
      )
      this.mesh2 = new Three.Mesh(geometry2, framFace)
      this.scene.add(this.mesh2)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)

      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )
      this.orbitControls.target = new Three.Vector3(0, 0, 0)
      this.orbitControls.autoRotate = false
      this.clock = new Three.Clock()
      container.appendChild(this.renderer.domElement)
    },
    animate: function() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
.index_container {
  height: 280px;
}
.inner_container {
  height: 700px;
}
</style>
