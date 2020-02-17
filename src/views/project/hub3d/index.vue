<template>
  <div class="app-container">
    <el-row :gutter="12">
      <el-col :xs="3" :sm="3" :lg="3">
        <div>组件列表</div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="基础单元" name="1">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div>门</div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div>地板</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div>墙</div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div>窗</div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="机柜组件" name="2">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('机架')">
                  <img style="width:37px;" src="/static/机架.jpg">
                  <div>机架</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('数据柜')">
                  <img style="width:24px;" src="/static/数据柜.jpg">
                  <div>数据柜</div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="电源组件" name="3">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('UPS标准件')">
                  <img style="width:30px;" src="/static/UPS2.jpg">
                  <div>UPS标准件</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12"></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="空调组件" name="4">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('精密空调')">
                  <img style="width:30px;" src="/static/精密空调.jpg">
                  <div>精密空调</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('普通空调')">
                  <img style="width:68px;" src="/static/普通空调.jpg">
                  <div>普通空调</div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="视频组件" name="6">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('摄像头球机')">
                  <img style="width:30px;" src="/static/半球机.jpg">
                  <div>摄像头球机</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12"></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="配电组件" name="7">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('配电柜')">
                  <img style="width:30px;" src="/static/配电柜.jpg">
                  <div>配电柜</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('配电箱')">
                  <img style="width:40px;" src="/static/配电箱.jpg">
                  <div>配电箱</div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="传感器" name="9">
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('温湿度传感器')">
                  <img style="width:30px;" src="/static/温湿度.png">
                  <div>温湿度传感器</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('漏水控制器')">
                  <img style="width:30px;" src="/static/漏水控制器.jpg">
                  <div>漏水控制器</div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('烟感传感器')">
                  <img style="width:30px;" src="/static/烟感.png">
                  <div>烟感传感器</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :lg="12">
                <div class="add_obj" @click="creatEl('门禁读卡器')">
                  <img style="width:30px;" src="/static/门禁读卡器.png">
                  <div>门禁读卡器</div>
                </div>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="其他" name="10">
            <div>111</div>
            <div>222</div>
            <div>333</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :xs="16" :sm="16" :lg="16">
        <el-row>
          <el-col :xs="6" :sm="6" :lg="6">
            <div class="hub_edit">美景机房编辑</div>
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <div @click="exportS">导出</div>
          </el-col>
          <el-col :xs="4" :sm="4" :lg="4">
            <div @click="loadScene">导入</div>
          </el-col>
        </el-row>
        <div id="hub_box"></div>
      </el-col>
      <el-col :xs="3" :sm="3" :lg="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
import * as dat from 'dat.gui'
export default {
  name: 'Hub3D',
  data() {
    return {
      activeName: '1',
      camera: null,
      scene: null,
      renderer: null,
      mesh1: null,
      mesh2: null,
      mesh3: null,
      Timer: '',
      angle: 0,
      clock: '',
      orbitControls: '',
      raycaster: '',
      objects: [],
      groupData: [],
      datGui: '',
      obj_arry: {
        机架: 1,
        数据柜: 1,
        UPS标准件: 1,
        精密空调: 1,
        普通空调: 1,
        摄像头球机: 1,
        配电柜: 1,
        配电箱: 1,
        温湿度传感器: 1,
        漏水控制器: 1,
        烟感传感器: 1,
        门禁读卡器: 1
      }
    }
  },
  mounted() {
    this.init()
    // this.loadScene()
    this.animate()
  },
  methods: {
    loadScene() {
      var json = localStorage.getItem('scene')
      var loadedGeometry = JSON.parse(json)
      var loader = new Three.ObjectLoader()

      const contain = document.getElementById('hub_box')

      this.camera = new Three.PerspectiveCamera(
        50,
        contain.clientWidth / contain.clientHeight,
        1,
        5000
      )

      this.camera.position.set(680, 380, 25)
      this.scene = new Three.Scene()
      this.scene = loader.parse(loadedGeometry)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(contain.clientWidth, contain.clientHeight)
      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )
      this.orbitControls.target = new Three.Vector3(0, 0, 0)
      this.orbitControls.autoRotate = false // 将自动旋转关闭
      this.clock = new Three.Clock() // 用于更新轨道控制器

      contain.appendChild(this.renderer.domElement)
    },
    exportS() {
      var sceneJson = JSON.stringify(this.scene.toJSON())
      console.log(sceneJson)
      localStorage.setItem('scene', sceneJson)
      this.scene = new Three.Scene()
    },
    init() {
      const contain = document.getElementById('hub_box')
      this.camera = new Three.PerspectiveCamera(
        50,
        contain.clientWidth / contain.clientHeight,
        1,
        5000
      )
      this.camera.position.set(680, 380, 25)
      this.scene = new Three.Scene()
      this.scene.color = 0xffffff
      this.raycaster = new Three.Raycaster() // 光线投射器
      this.mouse = new Three.Vector2()

      const light1 = new Three.DirectionalLight(0xffffff, 0.4)
      light1.position.set(200, 200, 500)
      const light2 = new Three.DirectionalLight(0xffffff, 0.4)
      light2.position.set(-200, 200, -500)

      // A end
      var ambient = new Three.AmbientLight(0xffffff, 0.4) // AmbientLight,影响整个场景的光源
      ambient.position.set(0, 0, 0)
      this.scene.add(ambient, light1, light2)

      // 定义地板
      const geometry = new Three.BoxGeometry(600, 1, 900) // 长方体模型
      const texture = new Three.TextureLoader().load('/static/floor.jpg')
      texture.wrapS = texture.wrapT = Three.RepeatWrapping
      texture.repeat.set(14, 14)
      const material = new Three.MeshPhongMaterial() // 参数是一个使用一个或多个属性定义材料外观的对象。
      material.map = texture
      this.mesh1 = new Three.Mesh(geometry, material)
      this.mesh1.position.y = -80
      this.scene.add(this.mesh1)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(contain.clientWidth, contain.clientHeight)
      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )
      this.orbitControls.target = new Three.Vector3(0, 0, 0)
      this.orbitControls.autoRotate = false // 将自动旋转关闭
      this.clock = new Three.Clock() // 用于更新轨道控制器

      this.datGui = new dat.GUI()
      const gui = {
        sphereX: 100,
        sphereY: 80,
        sphereZ: 0
      }
      this.datGui.add(gui, 'sphereX', 0, 1)
      this.datGui.add(gui, 'sphereY', 0, 1)

      contain.appendChild(this.renderer.domElement)
    },
    animate() {
      this.Timer = requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },
    creatEl(obj) {
      // 定义立方体
      let addr
      let x, y, z

      switch (obj) {
        case '机架':
          addr = '/static/UPS2.jpg'
          x = 50
          y = 80
          z = 30
          break
        case '数据柜':
          addr = '/static/数据柜.jpg'
          x = 50
          y = 80
          z = 30
          break

        case 'UPS标准件':
          addr = '/static/UPS2.jpg'
          x = 50
          y = 80
          z = 30
          break
        case '精密空调':
          addr = '/static/精密空调.jpg'
          x = 50
          y = 80
          z = 38
          break
        case '普通空调':
          addr = '/static/普通空调.jpg'
          x = 30
          y = 30
          z = 80
          break
        case '摄像头球机':
          addr = '/static/半球机.jpg'
          x = 12
          y = 12
          z = 12
          break
        case '配电柜':
          addr = '/static/配电柜.jpg'
          x = 50
          y = 76
          z = 40
          break
        case '配电箱':
          addr = '/static/配电箱.jpg'
          x = 50
          y = 76
          z = 40
          break
        case '温湿度传感器':
          addr = '/static/温湿度.png'
          x = 14
          y = 14
          z = 14
          break
        case '漏水控制器':
          addr = '/static/漏水控制器.jpg'
          x = 14
          y = 14
          z = 14
          break
        case '烟感传感器':
          addr = '/static/烟感.png'
          x = 14
          y = 14
          z = 14
          break
        case '门禁读卡器':
          addr = '/static/门禁读卡器.png'
          x = 14
          y = 14
          z = 14
          break

        default:
          break
      }
      const Obj = new Three.BoxGeometry(x, y, z) // 长方体模型
      const Obj_material = new Three.MeshBasicMaterial({
        map: new Three.TextureLoader().load(addr)
      })
      const Obj_mesh = new Three.Mesh(Obj, Obj_material)

      this.scene.add(Obj_mesh)
      const gui = {
        sphereX: 100,
        sphereY: 0,
        sphereZ: 0
      }
      var sphereFolder = this.datGui.addFolder('' + obj + this.obj_arry[obj])
      sphereFolder.add(gui, 'sphereX', -300, 300).onChange(function(e) {
        Obj_mesh.position.x = e
      })
      sphereFolder.add(gui, 'sphereY', -300, 300).onChange(function(e) {
        Obj_mesh.position.y = e
      })
      sphereFolder.add(gui, 'sphereZ', -300, 300).onChange(function(e) {
        Obj_mesh.position.z = e
      })
      this.obj_arry[obj]++
    }
  }
}
</script>

<style lang="scss" scoped>
#hub_box {
  width: 100%;
  height: 800px;
  border: 1px solid red;
}
.dg .main .a {
  margin-top: 100px !important;
}
.hub_edit {
  height: 55px;
  font-size: 26px;
  font-weight: 600;
  text-align: left;
}
.add_obj {
  cursor: pointer;
}
</style>
