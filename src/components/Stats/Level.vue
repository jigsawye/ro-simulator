<template>
  <div class="control is-horizontal">
    <div class="control-label">
      <label class="label">Level</label>
    </div>
    <div class="control">
      <span class="select">
        <select v-model="selectLevel" @change="updateLevel">
          <option v-for="l in level">{{ l }}</option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
  import range from 'lodash/range';

  export default {
    name: 'level',
    beforeCreate() {
      this.level = range(1, 176);
    },
    data() {
      return {
        selectLevel: 1,
      };
    },
    methods: {
      updateLevel() {
        this.$store.dispatch('UPDATE_LEVEL', {
          level: this.selectLevel,
        });
      },
    },
  };
</script>