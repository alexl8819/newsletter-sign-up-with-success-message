<script setup>
  import { ref } from 'vue';

  import SignUp from './components/SignUp.vue';
  import SuccessConfirmation from './components/SuccessConfirmation.vue';

  const email = ref('');
</script>

<template>
  <div class="container">
    <SuccessConfirmation v-if="email" />
    <SignUp v-model:email="email" v-else />
  </div>
</template>

<style scoped>
  .container {
    background-color: var(--custom-white);
  }

  @media screen and (width >= 1024px) {
    border-radius: 1.5rem;
  }
</style>
