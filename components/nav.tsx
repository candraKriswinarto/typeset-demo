import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/article", label: "Article" },
  { href: "/chat", label: "Chat" },
]

export function Nav() {
  return (
    <nav className="flex items-center gap-6 border-b px-6 py-3 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
