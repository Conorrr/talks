<script setup lang="ts">
import Wordmark from './components/Wordmark.vue'
</script>

<template>
  <div class="rstl-footer fixed bottom-0 left-0 right-0 flex items-center justify-end px-6 pointer-events-none select-none z-1">
    <Wordmark size="13px" inverse />
  </div>
</template>

<style scoped>
/* A solid footer bar rather than a floating badge — always dark, so the
   inverted wordmark reads the same way on every slide regardless of the
   page underneath it, no per-slide theme detection needed. */
.rstl-footer {
  height: 34px;
  background: var(--ink-900);
  border-top: 2px solid var(--accent-600);
}
</style>
