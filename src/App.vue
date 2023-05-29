<script setup>
  import { ref, computed, watch } from 'vue';
  import isValidEmail from 'is-valid-email';

  import SignUp from './components/SignUp.vue';
  import SuccessConfirmation from './components/SuccessConfirmation.vue';

  const email = ref('');
  const error = ref(false);

  const emailConfirmed = computed(() => email.value.length && !error.value);

  watch(email, (newEmail, oldEmail) => {
    error.value = !isValidEmail(newEmail);
  });
</script>

<template>
  <div class="container">
    <SuccessConfirmation v-model:email="email" v-if="emailConfirmed" />
    <SignUp v-model:email="email" :error="error" v-else />
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
