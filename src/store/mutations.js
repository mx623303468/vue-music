import * as types from './mutationTpyes'

const mutations = {
  [type.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
