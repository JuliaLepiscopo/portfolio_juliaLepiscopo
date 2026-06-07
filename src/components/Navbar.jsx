import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import SocialIcons from './SocialIcons'

// Cada link "acende" quando a seção atual está na lista `match`.
const links = [
  { label: 'START', href: '#inicio', match: ['inicio', 'hero'] },
  { label: 'ABOUT ME', href: '#sobre', match: ['sobre', 'graduacoes', 'skills'] },
  { label: 'EXPERIENCES', href: '#experiencias', match: ['experiencias'] },
  {
    label: 'PROJECTS',
    href: '#projetos',
    match: ['projetos', 'fc-mobile', 'atelier-douce', 'lor-ombre', 'aurea-vox', 'contato'],
  },
]

// Menu completo (todas as seções) aberto pelo hamburger.
const menuLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Graduações', href: '#graduacoes' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('inicio')

  // Scroll spy: detecta a seção visível e atualiza o link ativo.
  useEffect(() => {
    const ids = links.flatMap((l) => l.match)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Hamburger */}
          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="p-1 text-white transition hover:text-accent"
          >
            <Menu className="h-7 w-7" />
          </button>

          {/* Links (desktop) */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = l.match.includes(activeId)
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`relative text-sm font-medium tracking-wide transition ${
                      active ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-accent" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contato"
            className="rounded-full bg-accent px-6 py-2.5 text-xs font-bold tracking-wide text-white shadow-lg transition hover:brightness-125 sm:text-sm"
          >
            TALK TO ME
          </a>
        </nav>
      </header>

      {/* Menu overlay (todas as seções) */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-bg/95 backdrop-blur-xl">
          {/* Botão fechar */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="p-1 text-white transition hover:text-accent"
            >
              <X className="h-7 w-7" />
            </button>
            <span className="text-sm font-medium tracking-wide text-white/50">
              Julia Lepiscopo
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-5">
            {menuLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.05}s` }}
                className="animate-welcome font-display text-4xl uppercase tracking-wide text-white/85 transition hover:text-accent sm:text-5xl"
              >
                {l.label}
              </a>
            ))}

            <SocialIcons className="mt-8" />
          </nav>
        </div>
      )}
    </>
  )
}
