import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import aboutIframe from './aboutIframe'
let store = new Vuex.Store({
    modules:{
        aboutIframe
    }
})
export default store;