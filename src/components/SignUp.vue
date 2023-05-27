<script setup>
  import { ref } from 'vue'

  // defineProps({}) 
</script>

<template>
  <section>
    <h1>Stay updated!</h1>

    <p>Join 60,000+ product managers receiving monthly updates on:</p>

    <ol>
      <li>Product discovery and building what matters</li>
      <li>Measuring to ensure updates are a success</li>
      <li>And much more!</li>
    </ol>
    
    <form @submit.prevent="">
      <label for="email">Email address</label>
      <input type="email" v-model.trim="email" placeholder="email@company.com" />

      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  </div>
</template>

<style scoped>
</style>
