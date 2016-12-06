<template>
  <div>
    <div class="box">
      <level />
    </div>

    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <stats-item v-for="(stat, index) in stats" :id="index">{{ stat }}</stats-item>
        </div>

        <stats-point />
      </div>
    </div>


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
