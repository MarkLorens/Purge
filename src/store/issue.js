import axios from 'axios'

export default {
    namespaced: true,
    state: {
        issues: [],
        specificIssue: []
    },
    getters : {
        allIssues: (state) => state.issues,
        issueDetails: (state) => state.specificIssue
    },
    mutations: {
        SET_ISSUES: (state, issues) =>
            state.issues = issues,
        SET_DETAILS: (state, specificIssue) =>
            state.specificIssue = specificIssue
    },
    actions: {
        async fetchIssues({ commit }) {
            const response = await axios.get('/v1/protected/issue/index', {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
            commit('SET_ISSUES', response.data.data)
        },
        async fetchIssuesID({ commit }, id) {
            const response = await axios.get(`/v1/protected/issue/show/${id}`, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
            commit('SET_DETAILS', response.data)
        },
        async createIssue(_, form) {
            const response = await axios.post('/v1/protected/issue/create', form, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
        },
        async deleteIssue(_, id) {
            await axios.delete(`/v1/protected/issue/delete/${id}`, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
        },
        async postReply(_, form) {
            await axios.post(`/v1/protected/issue/show/${form.issueID}/reply`,
            {
                Body: form.Body
            }, 
            {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: localStorage.getItem('uID')
                }
            })
        }
    }
}