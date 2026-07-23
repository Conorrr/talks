<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), {
  name: 'Conor Restall',
})
</script>

<template>
  <div class="byline">
    {{ name }}
  </div>
</template>

<style scoped>
.byline {
  font: var(--text-label, 500 13px/1.3 var(--font-sans));
  color: var(--text-muted, inherit);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide, 0.04em);
}
</style>
