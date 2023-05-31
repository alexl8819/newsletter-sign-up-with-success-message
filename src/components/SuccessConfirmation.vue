<script setup>
  import ActionButton from './ActionButton.vue';

  const props = defineProps({
    email: String
  });

  const reload = () => window.location.reload();
</script>

<template>
  <div class="newsletter__confirmation">
    <div class="confirmation__container">
      <img class="confirmation__icon" src="../assets/images/icon-success.svg" alt="icon success" />
      <section class="confirmation__content">
        <h1 class="confirmation__heading">Thanks for subscribing!</h1>

        <p class="confirmation__message">A confirmation email has been sent to <strong>{{ props.email }}</strong>. 
        Please open it and click the button inside to confirm your subscription.</p>

        <ActionButton @click.prevent="reload" displayText="Dismiss message" aria-label="Dismiss Message" />
      </section>
    </div>
  </div>
</template>

<style scoped>
  .newsletter__confirmation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 15px 40px;
    background-color: var(--custom-white);
  }

  .confirmation__icon {
    display: flex;
    align-self: start;
    margin: 0;
  }

  .confirmation__content {
    color: var(--charcoal-grey);
  }
  
  .confirmation__heading {
    font-size: 2.25rem;
    color: var(--dark-slate-grey);
  }

  .confirmation__message {
    height: 50vh;
    width: 100%;
    max-width: 16.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  @media screen and (width >= 1024px) {
    .newsletter__confirmation, .confirmation__message {
      height: auto;
    }

    .newsletter__confirmation {
      padding: 50px;
      border-radius: 1.5rem;
      width: 100%;
      max-width: 32rem;
    }

    .confirmation__content {
      padding: 13px 0;
    }

    .confirmation__container, .confirmation__message {
      max-width: 24.5rem;
    }

    .confirmation__heading {
      font-size: 3.5rem;
      line-height: 3rem;
      margin: 25px 0 0 0;
    }

    .confirmation__message {
      margin: 40px 0;
      font-size: 1.1rem;
      line-height: 1.75rem;
    }
  }
</style>
