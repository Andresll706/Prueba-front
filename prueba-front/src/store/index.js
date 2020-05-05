import Vue from 'vue'
import Vuex from 'vuex'
import datos from './reviews.json'
Vue.use(Vuex)
export default new Vuex.Store({
  state:datos,
  mutations: {
    like(state, index){
      var boton = document.getElementById(index);
      boton.setAttribute('disabled', true);
      state.reviews[index].useful_count++;
    }
  },
  actions: {
  },
  modules: {
  }
})

