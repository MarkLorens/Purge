import { createStore } from 'vuex'
import auth from './auth'
import issue from './issue'
import account from './account'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    issue,
    account
  }
})
