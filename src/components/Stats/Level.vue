<template>
  <div class="control is-horizontal">

    <div class="control-label">
      <label class="label">Base Lv.</label>
    </div>
    <span class="select">
      <select v-model="selectBaseLevel">
        <option v-for="level in baseLevel">{{ level }}</option>
      </select>
    </span>

    <div class="control-label">
      <label class="label">Job Lv.</label>
    </div>
    <span class="select">
      <select v-model="selectJobLevel">
        <option v-for="level in jobLevel">{{ level }}</option>
      </select>
    </span>

    <div class="control-label">
      <label class="label">Job</label>
    </div>
    <span class="select">
      <select v-model="selectJob">
        <option v-for="job in jobs" :value="job.id">{{ job.name }}</option>
      </select>
    </span>

  </div>
</template>

<script>
  import { thirdBaseLevel, thirdJobLevel, jobs } from '../../utils/constants';

  export default {
    name: 'level',
    beforeCreate() {
      this.baseLevel = thirdBaseLevel;
      this.jobLevel = thirdJobLevel;
      this.jobs = jobs;
    },
    computed: {
      selectBaseLevel: {
        get() {
          return this.$store.state.baseLevel;
        },
        set(value) {
          this.$store.commit('SET_BASE_LEVEL', +value);
        },
      },
      selectJobLevel: {
        get() {
          return this.$store.state.jobLevel;
        },
        set(value) {
          this.$store.commit('SET_JOB_LEVEL', +value);
        },
      },
      selectJob: {
        get() {
          return this.$store.state.job;
        },
        set(value) {
          this.$store.commit('SET_JOB', +value);
        },
      },
    },
  };
</script>