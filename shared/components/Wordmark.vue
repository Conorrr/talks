<script setup lang="ts">
withDefaults(defineProps<{ size?: string; inverse?: boolean }>(), {
  size: '20px',
  inverse: false,
})
</script>

<template>
  <span class="rstl-wordmark" :class="{ inverse }" :style="{ fontSize: size }">
    RSTL<span class="dot">.</span>
  </span>
</template>

<style scoped>
.rstl-wordmark {
  font-family: var(--font-sans);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  color: var(--ink-900);
  white-space: nowrap;
}
.rstl-wordmark .dot {
  color: var(--accent-600);
}
.rstl-wordmark.inverse {
  color: var(--paper-50);
}
.rstl-wordmark.inverse .dot {
  color: var(--accent-300);
}
</style>
