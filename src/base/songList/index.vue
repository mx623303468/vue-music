<template>
  <div class="song-list">
    <ul>
      <li class="item" v-for="song in songs" :key="song.id">
        <div class="content">
          <h2 class="name" v-html="song.name"></h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getDesc(song) {
      if (!song) {
        return
      }
      return `${song.singer} · ${song.album}`
    }
  }
}
</script>

<style lang="stylus">
@import '~common/styles/mixin';
@import '~common/styles/variable';

.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    font-size: $font-size-14;

    .content {
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .name {
        no-wrap();
        color: $color-text-333;
        padding: 1px;
      }

      .desc {
        no-wrap();
        margin-top: 8px;
        color: $color-text-999;
        padding: 1px;
      }
    }
  }
}
</style>
