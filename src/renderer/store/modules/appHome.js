const state = {
  activeTab: 'home'
}

const mutations = {
  STATE_CHANGE_TAB (state, newTabId) {
    state.activeTab = newTabId
  }
}

const actions = {
  CHANGE_TAB ({ commit }, newTab) {
    // do something async
    commit('CHANGE_HOME_TAB', newTab.id)
  }
}

export default {
  state,
  mutations,
  actions
}
