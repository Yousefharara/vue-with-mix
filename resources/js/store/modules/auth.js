export default {
    namespaced: true,

    state: {
        user: null,

        token: null,

        isLoggedIn: false,
    },

    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },

        SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_LOGIN_STATUS(state, status) {
            state.isLoggedIn = status;
        },
    },

    actions: {
        login({ commit }, payload) {
            commit("SET_USER", payload.user);

            commit("SET_TOKEN", payload.token);

            commit("SET_LOGIN_STATUS", true);
        },

        logout({ commit }) {
            commit("SET_USER", null);

            commit("SET_TOKEN", null);

            commit("SET_LOGIN_STATUS", false);
        },
    },

    getters: {
        currentUser(state) {
            return state.user;
        },

        token(state) {
            return state.token;
        },

        isAuthenticated(state) {
            return state.isLoggedIn;
        },
    },
};
