import { useState } from 'react'
import { X } from 'lucide-react'
import { FaHeart } from 'react-icons/fa'

export default function WelcomeModal() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="animate-welcome relative w-full max-w-2xl rounded-[2rem] bg-welcome/90 p-8 shadow-2xl sm:p-12">
        {/* Fechar */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-5 top-5 cursor-pointer text-white/80 transition hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6 flex justify-center gap-3 text-2xl text-accent">
          {[0, 1, 2].map((i) => (
            <FaHeart
              key={i}
              className="animate-heartbeat drop-shadow-[0_2px_6px_rgba(145,3,4,0.5)]"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>

        <h2 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl">
          Bem-vindo(a) ao meu espaço!
        </h2>

        <p className="text-justify text-base leading-relaxed text-white/95 sm:text-lg">
          Este portfólio é um projeto vivo e em constante evolução, assim como o
          meu código. Fique à vontade para explorar meus trabalhos mais recentes
          e acompanhar minha jornada na tecnologia.
        </p>

        <div className="mt-8 flex justify-end">
          <a
            href="#projetos"
            onClick={() => setOpen(false)}
            className="rounded-full bg-accent px-7 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition hover:brightness-125 sm:text-sm"
          >
            EXPLORE PROJECTS
          </a>
        </div>
      </div>
    </div>
  )
}
