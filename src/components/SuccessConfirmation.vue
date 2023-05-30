<script setup>
  import Button from './Button.vue';

  const props = defineProps({
    email: String
  });

  const reload = () => window.location.reload();
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

      <Button @click.prevent="reload" displayText="Dismiss message" aria-label="Dismiss Message" />
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
    height: 100vh;
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
    height: 50vh;
    max-width: 16.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .btn--primary {
    padding: 15px 40px;
  }

  @media screen and (width >= 1024px) {
    .newsletter__confirmation {
      height: auto;
      padding: 40px 60px;
    }

    .confirmation__container, .confirmation__message {
      max-width: 20rem;
    }

    .confirmation__heading {
      font-size: 3rem;
      line-height: 3rem;
      margin: 35px 0 0 0;
    }

    .confirmation__message {
      margin: 30px 0;
      height: auto;
    }
  }
</style>
