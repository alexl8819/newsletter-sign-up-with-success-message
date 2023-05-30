<script setup>
  import { ref, computed } from 'vue';
  import isValidEmail from 'is-valid-email';

  import SignUp from './components/SignUp.vue';
  import SuccessConfirmation from './components/SuccessConfirmation.vue';

  const email = ref('');
  const emailConfirmed = computed(() => email.value && email.value.length && isValidEmail(email.value));
</script>

<template>
  <div class="container">
    <Transition name="fade" mode="out-in">
      <SuccessConfirmation v-model:email="email" v-if="emailConfirmed" />
      <SignUp v-model:email="email" :error="email ? !emailConfirmed : false" v-else />
    </Transition>
  </div>
</template>

<style scoped>
  .container {
    background-color: var(--custom-white);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @media screen and (width >= 1024px) {
    .container {
      border-radius: 1.5rem;
    }
  }
</style>
