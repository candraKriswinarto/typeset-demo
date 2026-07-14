# typeset-demo

A Next.js demo project showcasing [shadcn/typeset](https://ui.shadcn.com/docs/typeset) — a single stylesheet that styles rendered markdown content.

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/docs` | Documentation page with markdown rendered via react-markdown |
| `/article` | Long-form article with typography, lists, tables, and code blocks |
| `/chat` | Chat interface with user/assistant message bubbles |

All pages use the `typeset typeset-chat` preset with Geist (body), Roboto (headings), and Geist Mono (code) fonts.

## Fonts

- **Geist** — body text (`--font-geist`)
- **Roboto** — headings (`--font-roboto`)
- **Geist Mono** — code (`--font-geist-mono`)

## Adding components

```bash
npx shadcn@latest add button
```

## Using typeset

Wrap markdown content in a `typeset` container with a preset class:

```tsx
<div className="typeset typeset-chat max-w-[42em]">
  <ReactMarkdown>{content}</ReactMarkdown>
</div>
```

To exclude an embedded component from typeset styles, add `not-typeset` class or `data-not-typeset` attribute to it.
