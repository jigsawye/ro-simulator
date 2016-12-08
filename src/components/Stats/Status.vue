<template>
  <div>
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
        <p class="title">{{ def }} + XXX</p>
      </div>
      <div class="level-item has-text-centered">
        <p class="heading">MDEF</p>
        <p class="title">{{ mdef }} + XXX</p>
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
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'status',
    computed: mapGetters([
      'atk', 'matk', 'hit', 'flee', 'dodge', 'cri', 'def', 'mdef',
    ]),
  };
</script>
