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
        <label class="label">ATK: {{ atk }}</label>
        <label class="label">MATK: {{ matk }}</label>
        <label class="label">HIT: {{ hit }}</label>
        <label class="label">FLEE: {{ flee }} + {{ dodge }}</label>
        <label class="label">CRI: {{ cri }}</label>
        <label class="label">DEF: {{ def }}</label>
        <label class="label">MDEF: {{ mdef }}</label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import StatsItem from './StatsItem';
  import StatsPoint from './StatsPoint';

  export default {
    name: 'stats-box',
    components: {
      StatsItem,
      StatsPoint,
    },
    data: () => ({
      stats: ['Str', 'Agi', 'Vit', 'Int', 'Dex', 'Luk'],
    }),
    computed: mapGetters([
      'atk', 'matk', 'hit', 'flee', 'dodge', 'cri', 'def', 'mdef',
    ]),
  };
</script>
