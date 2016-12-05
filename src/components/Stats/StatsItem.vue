<template>
  <div class="control is-horizontal">
    <div class="control-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="control">
      <span class="select">
        <select v-model="selectStat" @change="updateStat">
          <option v-for="s in stats">{{ s }}</option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
  import range from 'lodash/range';

  export default {
    name: 'status-item',
    beforeCreate() {
      this.stats = range(1, 131);
    },
    props: ['id'],
    data() {
      return {
        selectStat: 1,
      };
    },
    methods: {
      updateStat() {
        this.$store.dispatch('UPDATE_STAT', {
          id: this.id,
          stat: +this.selectStat,
        });
      },
    },
  };
</script>
