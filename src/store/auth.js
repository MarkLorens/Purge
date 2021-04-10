import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        msg: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user 
        },
        msg(state) {
            return state.msg
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        },
        SET_MSG(state, msg) {
            state.msg = msg
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('v1/public/login', credentials)
            
            localStorage.setItem('uID', response.data.userID)
            return dispatch('attempt', response.data.token)
        },
        async attempt ({ commit }, token) {
            //Store token to compare
            commit('SET_TOKEN',token)
            //Check token is valid
            try {
                commit('SET_USER', localStorage.getItem('uID'))
            }
            catch(e){
                //Invalid token, delete token and user data
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
         },
        signOut({ commit }){
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        },
        async signUp({ dispatch }, credentials) {
            let response = await axios.post('/v1/public/register', credentials)

            if(response.status == 201) {
                return dispatch('signIn', credentials)
            }
        },
        async changePassword({__ }, credentials) {
            var id = localStorage.getItem('uID')
            await axios.patch(`/v1/protected/user/${id}/change-password`, credentials, {
                headers: {
                    token: localStorage.getItem('token'),
                    userId: id
                }
            })
        }
    }
}