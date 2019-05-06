<template>
  <div>
    <div :class="box_class">
      <table class="sudo_box" cellpadding="0" cellspacing="0">
        <tr v-for="row in suduArry" :key="row">
          <template v-for="items in row">
            <template v-for="itemss in items">
              <td class="unit" :key="itemss">{{itemss==='.'?'':itemss}}</td>
            </template>
          </template>
        </tr>
      </table>
      <div style="margin-top:20px;">
        <el-button type="primary" v-if="button_show" @click="show()">解数独</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Sudoku',
  data() {
    return {
      box_class: 'big_box',
      suduArry: [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
      ],
      button_show: true
    }
  },
  created() {
    if (this.$route.path === '/workspace/index') {
      this.box_class = 'sm_box'
      this.button_show = false
    } else {
      this.box_class = 'big_box'
    }
  },
  methods: {
    show() {
      const unit = document.getElementsByClassName('unit')
      console.log(unit)
      var stoke = []
      var flag = false
      var num
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; ) {
          if (this.suduArry[i][j] === '.' || flag) {
            flag = false
            if (this.suduArry[i][j] === '.') {
              num = 0
            } else {
              num = parseInt(this.suduArry[i][j])
            }
            num += 1

            while (num < 10) {
              if (this.check(num, i, j)) {
                this.suduArry[i][j] = '' + num
                console.log(unit[i * 9 + j])
                unit[i * 9 + j].innerHTML = '' + num
                stoke.push([i, j++])
                break
              }
              num++
            }
            if (num > 9) {
              this.suduArry[i][j] = '.'
              var Last = stoke.pop()
              i = Last[0]
              j = Last[1]
              flag = true
            }
          } else {
            j++
          }
        }
      }
    },
    check(num, i, j) {
      var row = new Map()
      var col = new Map()
      var box = new Map()
      for (let k = 0; k < 9; k++) {
        row.set(this.suduArry[i][k], k)
        col.set(this.suduArry[k][j], k)
        box.set(
          this.suduArry[Math.floor(i / 3) * 3 + Math.floor(k / 3)][
            Math.floor(j / 3) * 3 + (k % 3)
          ],
          k
        )
      }
      if (row.has('' + num) || col.has('' + num) || box.has('' + num)) {
        return false
      } else {
        return true
      }
    },
    sleep(delay) {
      var start = new Date().getTime()
      while (new Date().getTime() - start < delay) {
        continue
      }
      console.log('end')
    }
  }
}
</script>

<style lang="scss" scoped>
.big_box {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;

  top: 100px;
  .sudo_box {
    width: 100%;
    border-collapse: collapse;
    tr {
      width: 100%;
      height: 55px;
      border-left: 3px solid #000;
      border-right: 3px solid #000;
      td {
        height: 55px;
        border: 1px solid rgb(100, 99, 99);
      }
    }

    tr:nth-child(1) {
      border-top: 3px solid #000;
    }
    tr:nth-child(3) {
      border-bottom: 3px solid #000;
    }
    tr:nth-child(6) {
      border-bottom: 3px solid #000;
    }
    tr:nth-child(9) {
      border-bottom: 3px solid #000;
    }
    tr td:nth-child(3) {
      border-right: 3px solid #000;
    }
    tr td:nth-child(6) {
      border-right: 3px solid #000;
    }
  }
}
.sm_box {
  width: 270px;
  height: 270px;
  margin: 0 auto;
  padding-top: 8px;
  .sudo_box {
    width: 100%;
    border-collapse: collapse;
    tr {
      width: 100%;
      height: 26px;
      border-left: 2px solid #000;
      border-right: 2px solid #000;
      td {
        width: 26px;
        height: 26px;
        border: 1px solid rgb(100, 99, 99);
      }
    }

    tr:nth-child(1) {
      border-top: 2px solid #000;
    }
    tr:nth-child(3) {
      border-bottom: 2px solid #000;
    }
    tr:nth-child(6) {
      border-bottom: 2px solid #000;
    }
    tr:nth-child(9) {
      border-bottom: 2px solid #000;
    }
    tr td:nth-child(3) {
      border-right: 2px solid #000;
    }
    tr td:nth-child(6) {
      border-right: 2px solid #000;
    }
  }
}
</style>
