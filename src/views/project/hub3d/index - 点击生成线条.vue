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
                <div class="add_obj" @click="creatEl('窗户')">
                  <img style="width:37px;" src="/static/窗户.jpg">
                  <div>窗户</div>
                </div>
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
      <el-col :xs="3" :sm="3" :lg="3">
        <div :class="{selObj:i===index}" @click="changeObj(index)" v-for="(item,index ) in obj_arry" :key="item.uuid">{{item.name}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
import TransformControls from 'three-transformcontrols'

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
      transformControls: '',
      objects: [],
      groupData: [],
      obj_index: {
        窗户: 1,
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
      },
      obj_arry: [],
      i: 0,
      raycaster: '',
      mouse: '',
      pointsArray: [],
      window_mouse: true
    }
  },
  mounted() {
    this.init()
    // this.loadScene()
    this.animate()
    let container = document.getElementById('hub_box')
    container.addEventListener('mousedown', this.onMouseDown, false)
    window.addEventListener('keydown', this.onKeyDown, false)
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

      this.transformControls = new TransformControls(
        this.camera,
        this.renderer.domElement
      )

      this.scene.add(this.transformControls)

      this.orbitControls = new OrbitControls(
        this.camera,
        this.renderer.domElement
      )

      this.orbitControls.target = new Three.Vector3(0, 0, 0)
      this.orbitControls.autoRotate = false // 将自动旋转关闭
      this.clock = new Three.Clock() // 用于更新轨道控制器

      this.transformControls.addEventListener('mouseDown', evt => {
        // 平移开始时禁用相机控件
        this.orbitControls.enabled = false
      })
      this.transformControls.addEventListener('mouseUp', evt => {
        // 平移结束时启用相机控件
        this.orbitControls.enabled = true
      })
      this.raycaster = new Three.Raycaster()
      this.mouse = new Three.Vector2()
      contain.appendChild(this.renderer.domElement)
    },
    onMouseMove(event) {
      var intersects = this.getIntersects(event)

      /* 鼠标左键未点击时线段的移动状态 */
      if (this.scene.getObjectByName('line_move')) {
        this.scene.remove(this.scene.getObjectByName('line_move'))
      }
      /* 创建线段 */
      var lineGeometry = new Three.Geometry()
      var lineMaterial = new Three.LineBasicMaterial({ color: 0xff9800 })

      if (this.pointsArray.length > 0) {
        lineGeometry.vertices.push(this.pointsArray[0].geometry.vertices[0])

        var mouseVector3 = new Three.Vector3(intersects.x, 0, intersects.z)

        lineGeometry.vertices.push(mouseVector3)

        var line = new Three.Line(lineGeometry, lineMaterial)
        line.name = 'line_move'

        this.scene.add(line)
      }
    },

    getIntersects(event) {
      let contain = document.getElementById('hub_box')
      var normal = new Three.Vector3(0, 1, 0)
      /* 创建平面 */
      var planeGround = new Three.Plane(normal, 0)

      this.mouse.x =
        ((event.clientX - contain.getBoundingClientRect().left) /
          contain.offsetWidth) *
          2 -
        1
      this.mouse.y =
        -(
          (event.clientY - contain.getBoundingClientRect().top) /
          contain.offsetHeight
        ) *
          2 +
        1
      this.raycaster.setFromCamera(this.mouse, this.camera)

      var ray = this.raycaster.ray

      var intersects = ray.intersectPlane(planeGround)
      return intersects
    },

    onMouseDown(event) {
      let container = document.getElementById('hub_box')
      var intersects = this.getIntersects(event)

      /* 鼠标左键按下时，创建点和线段 */
      if (event.button === 0) {
        if (!this.window_mouse) {
          container.addEventListener('mousemove', this.onMouseMove, false)
          /* 依据 windwo_mouse 标识避免事件的重复添加 */
          this.window_mouse = true
        }

        var pointsGeometry = new Three.Geometry()
        pointsGeometry.vertices.push(intersects)

        var pointsMaterial = new Three.PointsMaterial({
          color: 0xff0000,
          size: 3
        })
        var points = new Three.Points(pointsGeometry, pointsMaterial)

        this.pointsArray.push(points)

        /* 创建线段 */
        var lineGeometry = new Three.Geometry()
        var lineMaterial = new Three.LineBasicMaterial({ color: 0xff9800 })

        if (this.pointsArray.length >= 2) {
          lineGeometry.vertices.push(
            this.pointsArray[0].geometry.vertices[0],
            this.pointsArray[1].geometry.vertices[0]
          )

          var line = new Three.Line(lineGeometry, lineMaterial)
          this.pointsArray.shift()
          this.scene.add(line)
        }

        this.scene.add(points)
      }

      /* 鼠标右键按下时 回退到上一步的点，并中断绘制 */
      if (event.button === 2) {
        container.addEventListener('mousemove', this.onMouseMove, false)
        /* 移除事件之后，要设置为 false 为了避免事件的重复添加 */
        this.window_mouse = false

        /* 鼠标左键未点击时线段的移动状态 */
        if (this.scene.getObjectByName('line_move')) {
          this.scene.remove(this.scene.getObjectByName('line_move'))

          /* 删除数组中的元素，否则的话再次重绘会链接之前的点接着重绘 */
          this.pointsArray.shift()
        }
      }
    },
    onKeyDown(event) {
      console.log('aaa')
      let container = document.getElementById('hub_box')
      if (event.key === 'Escape' || event.key === 'Delete') {
        container.removeEventListener('mousemove', this.onMouseMove, false)

        this.window_mouse = false
        console.log(this.scene)
        console.log(this.scene.getObjectByName('line_move'))
        /* 鼠标左键未点击时线段的移动状态 */
        if (this.scene.getObjectByName('line_move')) {
          this.scene.remove(this.scene.getObjectByName('line_move'))

          /* 删除数组中的元素，否则的话再次重绘会链接之前的点接着重绘 */
          this.pointsArray.shift()
        }

        var length = this.scene.children.length - 1
        /* 按步骤移除点和先 */
        if (
          this.scene.children[length].isLine ||
          this.scene.children[length].isPoints
        ) {
          this.scene.children.pop()
          length = this.scene.children.length - 1

          /* 若最后一项不是线段或者点就不移除 */
          if (!this.scene.children[length].isMesh) {
            this.scene.children.pop()
          }
        }
      }
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
      Obj_mesh.name = obj + this.obj_index[obj]
      this.scene.add(Obj_mesh)
      this.obj_arry.push(Obj_mesh)
      console.log(this.obj_arry)
      this.transformControls.attach(Obj_mesh)
      this.transformControls.addEventListener('change', evt => {
        console.log('aaa')
        console.log(Obj_mesh.position.z)
      })
      this.obj_index[obj]++
    },
    changeObj(index) {
      this.transformControls.attach(this.obj_arry[index])
      this.i = index
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
.selObj {
  width: 100%;
  background: rgb(109, 107, 107);
  cursor: pointer;
  color: #fff;
}
</style>
