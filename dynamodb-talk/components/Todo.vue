<!-- Placeholder for content still to be filled in (client specifics, screenshots).
     `grep -n "<Todo" dynamodb-talk/slides.md` lists everything outstanding. -->
<template>
  <div class="todo">
    <span class="todo-label">To fill in</span>
    <slot />
  </div>
</template>

<style scoped>
.todo {
  border: 2px dashed var(--accent);
  background: var(--accent-soft);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin: 0.75rem 0;
}
.todo-label {
  display: block;
  font: 500 12px/1.3 var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--accent-strong);
  margin-bottom: 0.25rem;
}
</style>
