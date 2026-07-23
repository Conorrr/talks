<template>
  <div class="slidev-layout section flex flex-col justify-center h-full">
    <slot />
  </div>
</template>

<style scoped>
.section {
  background: var(--surface-sunken);
}
.section :deep(h1) {
  font-size: 2.5em;
}
</style>
