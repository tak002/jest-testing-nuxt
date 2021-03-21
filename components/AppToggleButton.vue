<template>
  <div>
    <p>{{ status ? 'on' : 'off' }}</p>
    <button type="button" @click="onClick">toggle</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Data {
  status: boolean;
}

export default Vue.extend({
  data(): Data {
    return {
      status: false,
    };
  },
  methods: {
    onClick(): void {
      this.status = !this.status;
    },
  },
});
</script>

<style scoped></style>
