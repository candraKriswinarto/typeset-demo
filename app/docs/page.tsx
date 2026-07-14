"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const markdown = `# Documentation

This page demonstrates the **typeset-chat** preset. All content inside the \`.typeset\` container is styled automatically — nothing outside is affected.

## Getting Started

Typeset is a single stylesheet that styles rendered markdown. Wrap your output in a \`typeset\` container and everything inside — headings, lists, tables, code, blockquotes — is styled.

### Installation

Add the stylesheet to your project and import it in your global CSS file:

\`\`\`css
@import "./typeset.css";
\`\`\`

### Usage

Wrap your markdown content in a container with the \`typeset\` class and a preset class:

\`\`\`tsx
<div className="typeset typeset-docs">
  <ReactMarkdown>{content}</ReactMarkdown>
</div>
\`\`\`

## Features

- **Headings** — styled from h1 through h6 with proper hierarchy
- **Paragraphs** — consistent spacing and readable line height
- **Lists** — ordered and unordered lists with proper indentation
- **Tables** — responsive tables with horizontal scroll on overflow

### Table Example

| Package | Version | Description |
|---------|---------|-------------|
| react-markdown | 10.x | Markdown renderer |
| remark-gfm | 4.x | GitHub Flavored Markdown |
| typeset | 1.x | Markdown styling |

## Code Blocks

Code blocks are styled with a monospace font and proper spacing:

\`\`\`typescript
function fibonacci(n: number): number {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`

## Blockquotes

> Typeset is designed for documentation, articles, and any content-heavy surfaces.
> It leaves the rest of your UI untouched.

That covers the basics. Wrap your markdown and you are done.
`

function Table({ children }: { children?: React.ReactNode }) {
  return (
    <div className="typeset-scroll">
      <table>{children}</table>
    </div>
  )
}

const components = {
  table: Table,
}

export default function DocsPage() {
  return (
    <div className="typeset typeset-chat max-w-[42em] mx-auto py-12">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
