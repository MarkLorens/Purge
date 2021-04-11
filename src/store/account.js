import axios from 'axios'

export default {
    namespaced: true,

    state: {
        profile: []
    },
    getters :{
        getProfile: (state) => state.profile
    },
    mutations: {
        SET_PROFILE: (state, data) =>
            state.profile = data
    },
    actions :{
        async fetchProfile({ commit }, id) {
            const response = await axios.get(`/v1/protected/user/${id}`, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
            commit('SET_PROFILE', response.data.data)
        }
    }
}