<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), {
  name: 'Conor Restall',
})
</script>

<template>
  <div class="byline text-sm opacity-60">
    {{ name }}
  </div>
</template>
