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
        <nav class="level">
          <div class="level-item has-text-centered">
            <p class="heading">ATK</p>
            <p class="title">{{ atk }} + XXX ± XX</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">MATK</p>
            <p class="title">{{ matk }} + XXX ± XX</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">CRI</p>
            <p class="title">{{ cri }}</p>
          </div>
        </nav>
        <nav class="level">
          <div class="level-item has-text-centered">
            <p class="heading">DEF</p>
            <p class="title">XXX + {{ def }}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">MDEF</p>
            <p class="title">XXX + {{ mdef }}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">HIT</p>
            <p class="title">{{ hit }}</p>
          </div>
          <div class="level-item has-text-centered">
            <p class="heading">FLEE</p>
            <p class="title">{{ flee }} + {{ dodge }}</p>
          </div>
        </nav>
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
