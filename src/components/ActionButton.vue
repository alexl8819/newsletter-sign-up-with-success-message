<script setup>
  defineProps({
    buttonType: {
      default: 'button',
      type: String
    },
    shouldDisable: {
      default: false,
      type: Boolean
    },
    displayText: String
  });
</script>

<template>
  <button :type="buttonType" class="btn btn--primary" :disabled="shouldDisable">{{ displayText }}</button>
</template>

<style scoped>
  .btn {
    border: none;
    padding: 20px;
    width: 100%;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .btn:disabled {
    cursor: not-allowed;
  }

  .btn--primary {
    background-color: var(--dark-slate-grey);
    color: var(--custom-white);
    font-weight: 700;
    border-radius: 8px;
  }

  .btn--primary:not(:disabled):hover {
    background: linear-gradient(to right, var(--light-red) 25%, var(--tomato));
    box-shadow: var(--button-shadow);
  }

  .btn--success {
    background-color: var(--success);
  }

  @media screen and (width >= 1024px) {
    .btn {
      font-size: 1rem;
    }
  }
</style>
