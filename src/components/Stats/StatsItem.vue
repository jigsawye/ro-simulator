<template>
  <div class="control is-horizontal">
    <div class="control-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="">
      <span class="select">
        <select @change="updateStats">
          <option v-for="s in stats" :selected="s == selectStat">{{ s }}</option>
        </select>
      </span>
    </div>
    <div class="control-label additional-stat">
      <label>+ {{ bouns }}</label>
    </div>
  </div>
</template>

<script>
  import { stats } from '../../utils/constants';

  export default {
    name: 'status-item',
    beforeCreate() {
      this.stats = stats;
    },
    props: ['id'],
    computed: {
      bouns() {
        return this.$store.state.statsBounses[this.id];
      },
      selectStat() {
        return this.$store.state.stats[this.id];
      },
    },
    methods: {
      updateStats(e) {
        const { id } = this;
        const stat = +e.target.value;
        this.$store.commit('SET_STAT', { id, stat });
      },
    },
  };
</script>

<style scoped>
  .additional-stat {
    text-align: center;
  }
</style>
