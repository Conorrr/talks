# Talks

Monorepo for Slidev presentations. One root `package.json`/`pnpm` install shared
by every talk, so there's a single set of dependencies to keep up to date
instead of one per deck.

## Structure

```
talks/
├── shared/            # Slidev "addon" shared across talks
│   ├── package.json    # marks this folder as a local addon (required by Slidev)
│   ├── style.css        # global CSS shared by every talk that opts in
│   ├── layouts/          # custom layouts, e.g. layouts/section.vue -> `layout: section`
│   └── components/       # global components, e.g. components/Byline.vue -> `<Byline />`
├── example-talk/       # one directory per talk
│   └── slides.md
└── <your-next-talk>/
    └── slides.md
```

## Creating a new talk

1. `mkdir my-new-talk && cp example-talk/slides.md my-new-talk/slides.md` (or start from scratch).
2. Edit the frontmatter's `title`.
3. Keep the `addons: [./shared]` line if you want the shared layouts/components/styles.
   That path is always relative to the repo root, **not** the talk's own folder
   (this is how Slidev resolves addon paths for the top-level user config) — so
   it's always `./shared`, regardless of how deep the talk directory is nested.

Per-talk assets (images, custom one-off components) belong inside that talk's
own directory, not in `shared/`.

## Commands

There's no per-talk npm script — pass the path to the talk's `slides.md` as an
argument:

```bash
pnpm dev example-talk/slides.md      # start dev server for a specific talk
pnpm build example-talk/slides.md    # build static site (outputs to <talk>/dist)
pnpm export example-talk/slides.md   # export to PDF/PNG/PPTX (needs playwright deps)
```

## Adding to `shared/`

- `shared/layouts/*.vue` — use in a talk via slide frontmatter `layout: <filename-without-ext>`.
- `shared/components/*.vue` — auto-imported globally, use directly in markdown, e.g. `<Byline />`.
- `shared/style.css` — plain global CSS, applies to any talk that includes the addon.

## Tooling

- Package manager: pnpm (pinned via `packageManager` in `package.json`, use `corepack enable` if pnpm isn't picked up automatically).
- TypeScript is available for `<script setup lang="ts">` in shared components and any config/setup scripts.
- Build output (`dist/`), Slidev's cache (`.slidev/`), and exported files (PDF/PPTX) are gitignored — only source is committed.
