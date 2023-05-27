<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>

<template>
  <div>
    <h1>Thanks for subscribing!</h1>

    <p>A confirmation email has been sent to ash@loremcompany.com. 
    Please open it and click the button inside to confirm your subscription.</p>

    <button type="button">Dismiss message</button>
  </div>
</template>

<style scoped>
</style>
