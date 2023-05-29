<script setup>
  defineProps({
    email: String
  });

  const doReset = window.location.reload();
</script>

<template>
  <div class="newsletter__confirmation">
    <h1 class="confirmation__heading">Thanks for subscribing!</h1>

    <p class="confirmation__message">A confirmation email has been sent to {{ email }}. 
    Please open it and click the button inside to confirm your subscription.</p>

    <button type="button" class="confirmation__dismiss" @click.prevent="doReset">Dismiss message</button>
  </div>
</template>

<style scoped>
  .newsletter__confirmation {

  }
  
  .confirmation__heading {

  }

  .confirmation__dismiss {
    
  }
</style>
