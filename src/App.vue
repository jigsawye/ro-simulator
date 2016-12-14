<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <base-info />
      </div>
      <div class="column">
        <!-- <save /> -->
      </div>
    </div>

    <stats-box />

  </div>
</template>

<script>
import BaseInfo from './components/BaseInfo';
// import Save from './components/Save';
import StatsBox from './components/Stats/StatsBox';

export default {
  name: 'app',
  components: {
    BaseInfo,
    // Save,
    StatsBox,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.css"></style>
<style src="../node_modules/font-awesome/css/font-awesome.css"></style>
<style>
  body {
    padding-top: 40px;
  }
</style>
