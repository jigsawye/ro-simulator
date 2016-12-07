<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <div class="box">
        <stats-item v-for="stat in stats" :id="stat.toLowerCase()">{{ stat }}</stats-item>
        <hr>
        <stats-point />
      </div>
    </div>
    <div class="column is-half">
      <div class="box">
        <status />
      </div>
    </div>
  </div>
</template>

<script>
  import StatsItem from './StatsItem';
  import StatsPoint from './StatsPoint';
  import Status from './Status';

  export default {
    name: 'stats-box',
    components: {
      StatsItem,
      StatsPoint,
      Status,
    },
    data: () => ({
      stats: ['Str', 'Agi', 'Vit', 'Int', 'Dex', 'Luk'],
    }),
  };
</script>
