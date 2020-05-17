export const state = () => ({
    diglog: {
        isShow: false,
        title: '',
        massage: ''
    },
    register: {
        firstname: "",
        lastname: "",
        gender: 1,
        email: "",
        phone: "",
        birthday: new Date().toISOString().substr(0, 10),
        company: "",
        postion: ""
    }
})

export const getters = {
    getRegister(state) {
        return state.register
    },
    getDialog(state) {
        return state.diglog
    }
}

export const mutations = {
    SET_REGISTER(state, data) {
        state.register = {
            ...state.register,
            ...data
        }
    },
    SET_DIALOG(state, data) {
        state.diglog = {
            ...state.diglog,
            ...data
        }
    }
}

export const actions = {
    setDialog({ commit }, data) {
        commit('SET_DIALOG', data)
    },
    setRegister({ commit }, data) {
        commit('SET_REGISTER', data)
    }
}