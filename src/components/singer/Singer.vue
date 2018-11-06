<template>
  <div class="singer">
    <list-view :data="singerList"></list-view>
  </div>
</template>

<script type="text/javascript">
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer, { HOT_NAME, HOT_SINGER_LENGTH } from 'common/js/singer'
import ListView from 'base/listView/ListView'

export default {
  data () {
    return {
      singerList: []
    }
  },
  components: {
    ListView
  },
  created() {
    this._getsingerList()
  },
  methods: {
    _getsingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this._normalizeSingerList(res.data.list)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 按照 A-Z 字母分类，格式化歌手列表数据
    _normalizeSingerList(list) {
      // 1. 定义一个对象
      let map = {
        hot: {
          title: HOT_NAME,
          singers: []
        }
      }

      // 2. 遍历传入的 list 数据
      list.forEach((ele, index) => {
        // 2.1 按照 HOT_SINGER_LENGTH 的长度，取出作为热门数据，push 到  hot 中
        if (index < HOT_SINGER_LENGTH) {
          map.hot.singers.push(new Singer({
            name: ele.Fsinger_name,
            id: ele.Fsinger_mid
          }))
        }
        // 2.2 按照字母，把数据存入 singers 中
        const key = ele.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            singers: []
          }
        }
        map[key].singers.push(new Singer({
          name: ele.Fsinger_name,
          id: ele.Fsinger_mid
        }))
      })

      // 3. 把格式化后的数据进行排序处理
      let ret = [] // 所有数据
      let hot = [] // 热门数据

      // 3.1 遍历格式化后的数据 map
      for (let key in map) {
        let singer = map[key]
        if (singer.title.match(/[a-zA-Z]/)) {
          ret.push(singer)
        } else if (singer.title === HOT_NAME) {
          hot.push(singer)
        }
      }

      // 3.2 对数据进行排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
