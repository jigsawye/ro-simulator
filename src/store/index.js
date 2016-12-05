/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import { statsRaiseCalculator } from '../utils';

Vue.use(Vuex);

const options = {
  state: {
    level: 1,
    statsPoint: 100,
    stats: [1, 1, 1, 1, 1, 1],
  },
  mutations: {
    SET_LEVEL(state, level) {
      state.level = level;
      state.statsPoint = statsRaiseCalculator(level, state.stats);
    },
    SET_STAT(state, { id, stat }) {
      state.stats[id] = stat;
      state.statsPoint = statsRaiseCalculator(state.level, state.stats);
    },
  },
  actions: {
    UPDATE_LEVEL({ commit }, { level }) {
      commit('SET_LEVEL', level);
    },
    UPDATE_STAT({ commit }, { id, stat }) {
      commit('SET_STAT', { id, stat });
    },
  },
};

export default new Vuex.Store(options);
