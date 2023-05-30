<script setup>
  defineProps({
    buttonType: {
      default: 'button',
      type: String
    },
    displayText: String,
    shouldDisable: Boolean,
  });
</script>

<template>
  <button type="buttonType" class="btn btn--primary" :disabled="shouldDisable">{{ displayText }}</button>
</template>

<style scoped>
  .btn {
    border: none;
    width: 100%;
    cursor: pointer;
  }

  .btn--primary {
    background-color: var(--dark-slate-grey);
    color: var(--custom-white);
    font-size: 0.875rem;
    font-weight: 700;
    border-radius: 8px;
  }

  .btn--primary:hover {
    background: linear-gradient(to right, var(--light-red) 40%, var(--tomato));
    box-shadow: var(--button-shadow);
  }

  .btn--success {
    background-color: var(--success);
  }
</style>
