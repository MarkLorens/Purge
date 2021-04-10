import axios from 'axios'

export default {
    namespaced: true,
    state: {
        issues: []
    },
    getters : {
        allIssues: (state) => state.issues
    },
    mutations: {
        SET_ISSUES: (state, issues) =>
            state.issues = issues
    },
    actions: {
        async fetchIssues({ commit}) {
            const response = await axios.get('/v1/protected/issue/index', {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
            commit('SET_ISSUES', response.data.data)
        },
        async createIssue({__}, form) {
            const response = await axios.post('/v1/protected/issue/create', form, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
        }
    }
}