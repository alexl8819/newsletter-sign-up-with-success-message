<script setup>
  const props = defineProps({
    email: String
  });

  const doReset = () => window.location.reload();
</script>

<template>
  <div class="newsletter__confirmation">
    <picture class="confirmation__icon">
      <img class="icon__image" src="../assets/images/icon-success.svg" alt="icon success" />
    </picture>
    <section class="confirmation__container">
      <h1 class="confirmation__heading">Thanks for subscribing!</h1>

      <p class="confirmation__message">A confirmation email has been sent to <strong>{{ props.email }}</strong>. 
      Please open it and click the button inside to confirm your subscription.</p>

      <button type="button" class="confirmation__dismiss" @click.prevent="doReset">Dismiss message</button>
    </section>
  </div>
</template>

<style scoped>
  .newsletter__confirmation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 15px 40px;
  }

  .confirmation__icon {
    display: flex;
    align-self: start;
    margin: 0;
  }

  .confirmation__container {
    color: var(--charcoal-grey);
  }
  
  .confirmation__heading {
    font-size: 2.25rem;
    color: var(--dark-slate-grey);
  }

  .confirmation__message {
    min-height: 100vh;
    max-width: 18rem;
  }

  .confirmation__dismiss {
    border: none;
    padding: 15px 40px;
    width: 100%;
    color: var(--custom-white);
    background-color: var(--dark-slate-grey);
    border-radius: 8px;
    cursor: pointer;
  }
</style>
