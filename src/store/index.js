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
    stats: { str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 },
    statsBounses: { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 },
  },
  getters: {
    atk: ({ baseLevel, stats, statsBounses }) =>
      stats.str + statsBounses.str +
      Math.floor(baseLevel / 4) +
      Math.floor((stats.luk + statsBounses.luk) / 3) +
      Math.floor((stats.dex + statsBounses.dex) / 5),
    matk: ({ baseLevel, stats, statsBounses }) =>
      Math.floor(baseLevel / 4) +
      Math.floor((stats.int + statsBounses.int) * 1.5) +
      Math.floor((stats.luk + statsBounses.luk) / 3) +
      Math.floor((stats.dex + statsBounses.dex) / 5),
    hit: ({ baseLevel, stats, statsBounses }) =>
      Math.floor((stats.luk + statsBounses.luk) / 3) +
      stats.dex + statsBounses.dex + baseLevel + 175,
    flee: ({ baseLevel, stats, statsBounses }) =>
      Math.floor((stats.luk + statsBounses.luk) / 5) +
      stats.agi + statsBounses.agi + baseLevel + 100,
    dodge: ({ stats, statsBounses }) => Math.floor((stats.luk + statsBounses.luk) / 10) + 1,
    cri: ({ stats, statsBounses }) => Math.floor((stats.luk + statsBounses.luk) * 0.3) + 1,
    def: ({ baseLevel, stats, statsBounses }) =>
      Math.floor((stats.agi + statsBounses.agi) / 5) +
      Math.floor((baseLevel + stats.vit + statsBounses.vit) / 2),
    mdef: ({ baseLevel, stats, statsBounses }) =>
      stats.int + statsBounses.int +
      Math.floor(baseLevel / 4) +
      Math.floor((stats.vit + statsBounses.vit) / 5) +
      Math.floor((stats.dex + statsBounses.dex) / 5),
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
