<template>
  <div>
    <h2>カウンター</h2>
    <h3>Count: {{ count }}</h3>
    <button type="button" @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    ...mapActions(['increment']),
  },
});
</script>

<style scoped></style>
