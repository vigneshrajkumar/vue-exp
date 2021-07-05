import Vue from 'vue'
import Vuex from 'vuex'
import cats from '@/data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },

  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    },
    allCats: (state) => {
      return state.pets.filter(p => p.species === 'cat')
    }
  },
  mutations: {
    appendPet: (state, { species, pet }) => {
      state[species].push(pet)
    }
  },
  actions: {
    // commit is given by vuex & pet by the user.
    addPet: ({ commit }, payload) => {
      commit('appendPet', payload)
    }
  },
  modules: {
  }
})
