<template>
  <div class="recommend">
    <recommend-scroll ref="recommendScroll" class="recommend-content">
      <div>
        <div class="slider-wrapper" v-if="recommentList.length">
          <slider>
            <div v-for="item in recommentList" :key="item.id">
              <a :href="item.linkUrl">
                <img @load="imgLoad" :src="item.picUrl" alt />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul :data="discList">
            <li v-for="item in discList" :key="item.dissid" class="disc-item">
              <div class="icon">
                <img v-lazy="item.imgurl" alt />
              </div>
              <div class="text">
                <h2 class="name">{{item.dissname}}</h2>
                <p class="desc">
                  <span class="author">{{item.creator.name}}</span>
                  <span class="play-num">播放量：{{item.listennum}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <loading v-show="!discList.length || !recommentList.length"></loading>
    </recommend-scroll>
  </div>
</template>

<script type="text/javascript">
import slider from 'base/slider/Slider'
import { getRecommend, getPlayList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import recommendScroll from 'base/scroll/Scroll'
import loading from 'base/loading/Loading'

export default {
  data() {
    return {
      recommentList: [],
      discList: []
    }
  },
  methods: {
    _getRecommend() {
      getRecommend()
        .then(res => {
          if (res.code === ERR_OK) {
            this.recommentList = res.data.slider
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    _getPlayList() {
      getPlayList()
        .then(res => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    imgLoad() {
      if (!this.checkLoading) {
        this.checkLoading = true
        this.$refs['recommendScroll'].refresh()
      }
    }
  },
  components: {
    slider,
    recommendScroll,
    loading
  },
  created() {
    setTimeout(() => {
      this._getRecommend()
      this._getPlayList()
      this.$refs['recommendScroll'].refresh()
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/variable';

.recommend {
  position: absolute;
  width: 100%;
  top: 80px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-weight: 500;
        font-size: $font-size-16;
        color: $color-qq-theme;
      }

      .disc-item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 10px 20px 10px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;

          & > img {
            width: 60px;
            height: 60px;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          overflow: hidden;

          .name {
            color: $color-text-333;
            font-size: $font-size-15;
            line-height: 24px;
          }

          .desc {
            color: $color-text-666;
            font-size: $font-size-12;
            line-height: 22px;

            .author {
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
