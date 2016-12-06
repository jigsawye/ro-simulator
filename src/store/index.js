/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import { statsRaiseCaculator, statsBounsesCaculator } from '../utils';

Vue.use(Vuex);

const options = {
  state: {
    baseLevel: 1,
    jobLevel: 1,
    job: 1,
    statsPoint: 100,
    stats: [1, 1, 1, 1, 1, 1],
    statsBounses: [0, 0, 0, 0, 0, 0],
  },
  mutations: {
    SET_BASE_LEVEL(state, level) {
      state.baseLevel = level;
      state.statsPoint = statsRaiseCaculator(level, state.stats);
    },
    SET_STAT(state, { id, stat }) {
      state.stats[id] = stat;
      state.statsPoint = statsRaiseCaculator(state.baseLevel, state.stats);
    },
    SET_JOB_LEVEL(state, level) {
      state.jobLevel = level;
      state.statsBounses = statsBounsesCaculator(state.job, level);
    },
    SET_JOB(state, job) {
      state.job = job;
      state.statsBounses = statsBounsesCaculator(job, state.jobLevel);
    },
  },
  actions: {
    //
  },
};

export default new Vuex.Store(options);
