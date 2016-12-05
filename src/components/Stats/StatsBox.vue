<template>
  <div class="box">

    <level />

    <hr>

    <stats-item v-for="(stat, index) in stats" :id="index">{{ stat }}</stats-item>

    <hr>

    <stats-point />

  </div>
</template>

<script>
  import Level from './Level';
  import StatsItem from './StatsItem';
  import StatsPoint from './StatsPoint';

  export default {
    name: 'stats-box',
    components: {
      Level,
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
