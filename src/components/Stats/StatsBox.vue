<template>
  <div class="columns">
    <div class="column is-half">
      <div class="box">
        <stats-item v-for="(stat, index) in stats" :id="index">{{ stat }}</stats-item>
        <hr>
        <stats-point />
      </div>
    </div>
  </div>
</template>

<script>
  import StatsItem from './StatsItem';
  import StatsPoint from './StatsPoint';

  export default {
    name: 'stats-box',
    components: {
      StatsItem,
      StatsPoint,
    },
    data() {
      return {
        stats: ['Str', 'Agi', 'Vit', 'Int', 'Dex', 'Luk'],
      };
    },
  };
</script>
