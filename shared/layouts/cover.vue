<template>
  <div class="slidev-layout rstl-cover relative overflow-hidden">
    <div class="cover-block" aria-hidden="true" />
    <div class="rstl-cover-content relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Deliberately not named "cover" — @slidev/theme-default ships its own
   `.slidev-layout.cover { display: grid }` rule (globally loaded CSS, not
   scoped to its own component), which silently out-specificities plain
   utility classes like `flex`/`justify-center` and breaks vertical
   centering. Using our own class name sidesteps the collision entirely
   instead of fighting it with !important. */
.rstl-cover {
  background: var(--ink-900);
  color: var(--paper-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rstl-cover-content {
  width: 100%;
}

/* A flat, unblurred geometric block rather than a glow/gradient — the
   RSTL system is explicit about flat color only, no gradients or blur. */
.cover-block {
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: 320px;
  background: var(--accent-900);
  clip-path: polygon(100% 0, 100% 100%, 0 0);
}

.rstl-cover :deep(h1) {
  color: var(--paper-50);
  font-size: 80px;
  line-height: 1.05;
  text-align: left;
}

.rstl-cover :deep(h1 + p),
.rstl-cover :deep(h1 + h3),
.rstl-cover :deep(h3),
.rstl-cover :deep(.byline) {
  color: var(--ink-150) !important;
  opacity: 1 !important;
  text-align: left;
}

.rstl-cover :deep(.accent) {
  color: var(--accent-300);
}
</style>
