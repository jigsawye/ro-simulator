<template>
  <div class="control is-horizontal">
    <div class="control-label">
      <label class="label">Stats Point</label>
    </div>
    <div class="control-label">
      <span
        class="tag"
        :class="{ 'is-dark': ! isOver, 'is-danger': isOver }"
      >{{ point }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'stats-point',
    computed: {
      point() {
        return this.$store.state.statsPoint;
      },
      isOver() {
        return this.$store.state.statsPoint < 0;
      },
    },
  };
</script>