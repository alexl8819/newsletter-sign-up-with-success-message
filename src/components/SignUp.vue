<script setup>
  import { ref } from 'vue';

  import ActionButton from './ActionButton.vue';

  const props = defineProps({
    email: String,
    error: Boolean
  });

  defineEmits(['update:email']);

  const signupEmail = ref(props.email || '');
</script>

<template>
  <div class="newsletter__signup">
    <picture class="newsletter__illustration">
      <source srcset="../assets/images/illustration-sign-up-desktop.svg" media="(min-width: 1024px)" />
      <img class="illustration__image" src="../assets/images/illustration-sign-up-mobile.svg" alt="sign up illustration" />
    </picture>
    <section class="newsletter__content">
      <h1 class="content__heading">Stay updated!</h1>

      <p class="content__headline">Join 60,000+ product managers receiving monthly updates on:</p>

      <ol class="content__features">
        <li class="feature__item">Product discovery and building what matters</li>
        <li class="feature__item">Measuring to ensure updates are a success</li>
        <li class="feature__item">And much more!</li>
      </ol>
    
      <form id="newsletterSignup" class="content__form" name="newsletterSignup" @submit.prevent="$emit('update:email', signupEmail.length ? signupEmail : ' ')" novalidate="true">
        <div class="form__field">
          <input type="email" id="email" name="email" class="form__input" :class="{ 'form__input--error': props.error }" v-model.trim="signupEmail" placeholder="email@company.com" required />
          <label for="email" class="form__label">Email address</label>
        </div>
        <ActionButton buttonType="submit" displayText="Subscribe to monthly newsletter" aria-label="Email Confirmation" />
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
    min-height: 100vh;
    padding-bottom: 15px;
    background-color: var(--custom-white);
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
    margin-bottom: 10px;
  }

  .content__form {
    display: flex;
    flex-direction: column;
  }

  .form__field {
    display: flex;
    flex-direction: column-reverse;
  }

  .form__label {
    font-size: 0.8rem;
    font-weight: 700;
  }

  .form__input {
    border-radius: 8px;
  }

  .form__input {
    padding: 15px 20px;
    margin: 8px 0 20px 0;
    border: 1px solid var(--grey);
  }

  .form__input:active, .form__input:focus {
    outline: none;
    border: 1px solid var(--dark-slate-grey);
  }

  .form__input--error + .form__label::after {
    content: 'Valid email required';
    color: var(--tomato);
    float: right;
  }

  .form__input--error {
    border: 1px solid var(--tomato);
    background-color: var(--transparent-tomato);
    color: var(--tomato);
  }

  @media screen and (width >= 1024px) {
    .newsletter__signup {
      flex-direction: row-reverse;
      padding: 20px 25px;
      border-radius: 1.5rem;
      max-width: 57rem;
      min-height: auto;
    }

    .newsletter__illustration {
      width: 47%;
    }

    .newsletter__content {
      margin-top: -20px;
      margin-left: 25px;
      margin-right: 55px;
      max-width: 24rem;
    }

    .content__heading {
      font-size: 3.5rem;
      margin: 23px 0;
    }

    .content__features {
      margin: 30px 0;
    }

    .form__field {
      margin-bottom: 5px;
    }
  }
</style>
