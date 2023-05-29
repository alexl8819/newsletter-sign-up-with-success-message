<script setup>
  import { ref, computed } from 'vue';

  // defineProps({})
  const validateEmail = () => {
    $emit('update:email', email);
  }

  const signupEmail = ref('');
</script>

<template>
  <div class="newsletter__signup">
    <figure class="newsletter__illustration">
      <img class="illustration__image" src="../assets/images/illustration-sign-up-mobile.svg" alt="mobile sign up illustration" />
    </figure>
    <section class="newsletter__content">
      <h1 class="content__heading">Stay updated!</h1>

      <p class="content__headline">Join 60,000+ product managers receiving monthly updates on:</p>

      <ol class="content__features">
        <li class="feature__item">Product discovery and building what matters</li>
        <li class="feature__item">Measuring to ensure updates are a success</li>
        <li class="feature__item">And much more!</li>
      </ol>
    
      <form id="newsletterSignup" class="content__form" name="newsletterSignup" @submit.prevent="validateEmail">
        <label for="email" class="form__label">Email address</label>
        <input type="email" class="form__input" v-model.trim="signupEmail" placeholder="email@company.com" />
        <button type="submit" class="form__submit">Subscribe to monthly newsletter</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
  .newsletter__signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }
  
  .newsletter__illustration {
    margin: 0;
    padding: 0;
  }

  .illustration__image {
    width: 100%;
  }

  .newsletter__content {
    max-width: 20.438rem;
    font-size: 1rem;
    padding: 5px;
    color: var(--charcoal-grey);
  }

  .content__heading {
    font-size: 2.5rem;
    color: var(--dark-slate-grey);
    margin: 25px 0;
  }

  .content__headline {
    line-height: 1.5rem;
  }

  .content__features {
    margin: 20px 0px;
    padding: 0;
    list-style-type: none;
    list-style-position: inside;
  }

  .feature__item::before {
    content: url('../assets/images/icon-list.svg');
    margin-right: 15px;
  }

  .feature__item {
    display: flex;
    flex-direction: row;
    line-height: 1.25rem;
    margin-bottom: 15px;
  }

  .content__form {
    display: flex;
    flex-direction: column;
  }

  .form__label {
    font-size: 0.8rem;
    font-weight: 700;
  }

  .form__input, .form__submit {
    border-radius: 8px;
  }

  .form__input {
    padding: 15px 20px;
    margin: 8px 0 20px 0;
    border: 1px solid var(--grey);
  }

  .form__submit {
    padding: 20px;
    border: none;
    background-color: var(--dark-slate-grey);
    color: var(--custom-white);
    font-weight: 700;
  }

  @media screen and (width >= 1024px) {
    .newsletter__signup {
      flex-direction: row-reverse;
      max-width: 72rem;
    }

    .newsletter__illustration, .newsletter__content {
      width: 50%;
    }
  }
</style>
