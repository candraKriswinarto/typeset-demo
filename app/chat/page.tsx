"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const bubbles = [
  {
    role: "user",
    content: `Can you explain how **recursive functions** work with an example?`,
  },
  {
    role: "assistant",
    content: `Sure! A recursive function calls itself to solve smaller instances of the same problem.

Here is a classic example — computing a factorial:

\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
\`\`\`

Each call pushes a frame onto the call stack. When \`n\` reaches \`1\`, the stack unwinds and values are returned.`,
  },
  {
    role: "user",
    content: `Thanks! What about **tables** — can you show a comparison?`,
  },
  {
    role: "assistant",
    content: `Here is a quick comparison of recursion vs iteration:

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Readability | Often clearer | Can be verbose |
| Performance | Stack overhead | Usually faster |
| State | Implicit (call stack) | Explicit (variables) |

Use recursion when the problem has a natural recursive structure (trees, graphs, divide-and-conquer). Use iteration when performance matters or stack depth is a concern.`,
  },
]

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

export default function ChatPage() {
  return (
    <div className="max-w-[42em] mx-auto py-8 space-y-4">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className={`rounded-2xl px-5 py-3 ${
            bubble.role === "user"
              ? "ml-12 bg-gray-100"
              : "bg-card text-card-foreground mr-12"
          }`}
        >
          <div className="typeset typeset-chat">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {bubble.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  )
}
