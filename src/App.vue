<script setup>
  import { ref } from 'vue';

  import SignUp from './components/SignUp.vue';
  import SuccessConfirmation from './components/SuccessConfirmation.vue';

  const email = ref('');
</script>

<template>
  <div class="container">
    <SuccessConfirmation v-if="email" />
    <SignUp v-else />
  </div>
</template>

<style scoped>
  .container {
  }
</style>
