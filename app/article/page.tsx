"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const markdown = `# The Art of Reading

A short essay on typography, rhythm, and the reading experience.

## On Typography

Typography is the craft of making written language readable and appealing. When type is set well, the reader forgets they are reading and sinks into the content.

> A good book is the precious lifeblood of a master spirit.
> — John Milton

### The Role of Whitespace

Whitespace is not empty space. It gives content room to breathe. Margins, padding, line height, and paragraph spacing all contribute to the rhythm of the page.

- **Leading** — the vertical space between lines of text. Too tight and the text feels cramped; too loose and it feels disjointed.
- **Measure** — the width of a line of text. The ideal measure is 45–75 characters per line.
- **Flow** — the space between block elements. Consistent flow creates a steady reading rhythm.

### A Data Table

| Element | Ideal Value | Notes |
|---------|-------------|-------|
| Leading | 1.5–2.0 | Depends on measure and font size |
| Measure | 45–75 chars | Narrower for larger type |
| Flow | 1.0–1.5em | Consistent rhythm |

## Code in Context

Sometimes code appears naturally in an article:

\`\`\`python
def reading_time(word_count: int, wpm: int = 238) -> str:
    minutes = round(word_count / wpm)
    if minutes < 1:
        return "less than a minute"
    return f"{minutes} min read"
\`\`\`

## Closing Thoughts

Good typography is invisible. When done well, the reader does not notice it — they only notice the absence of friction. Typeset provides that foundation so you can focus on your content.

---

*This article was styled with the \`.typeset-chat\` preset.*
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

export default function ArticlePage() {
  return (
    <div className="typeset typeset-chat max-w-[42em] mx-auto py-12">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
