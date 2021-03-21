<template>
  <div>
    <p v-if="clicked">clicked</p>
    <button type="button" @click="onClick">click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Data {
  clicked: boolean;
}

export default Vue.extend({
  data(): Data {
    return {
      clicked: false,
    };
  },
  methods: {
    onClick(): void {
      this.clicked = true;
    },
  },
});
</script>

<style scoped></style>
