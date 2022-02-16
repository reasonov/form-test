import { createStore } from 'vuex'

const store = createStore({
    state: {
        mainData: {},
        childList: []
    },
    mutations: {
        addMainData (state, data) {
            state.mainData = data;
        },
        addChild (state, data) {
            state.childList = data
        }
    }
})

export default store