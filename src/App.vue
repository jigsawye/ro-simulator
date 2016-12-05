<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <stats-box />
      </div>
    </div>
  </div>
</template>

<script>
import StatsBox from './components/Stats/StatsBox';

export default {
  name: 'app',
  components: {
    StatsBox,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.css"></style>
<style>
  body {
    padding-top: 40px;
  }
</style>
