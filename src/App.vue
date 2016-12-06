<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <base-info />
      </div>
    </div>

    <stats-box />

  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo';
import StatsBox from './components/Stats/StatsBox';

export default {
  name: 'app',
  components: {
    BaseInfo,
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
