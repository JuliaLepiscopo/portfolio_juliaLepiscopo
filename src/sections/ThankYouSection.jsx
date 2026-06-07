import bg from '../../IMG/background.png'
import julia from '../../IMG/img_startPage.png'
import SocialIcons from '../components/SocialIcons'
import { motion } from 'framer-motion'
import { reveal, fade } from '../lib/motion'

export default function ThankYouSection() {
  return (
    <section
      id="contato"
      className="relative flex min-h-screen items-end overflow-hidden bg-bg"
    >
      {/* Fundo (motion blur) */}
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* THANK YOU gigante (atrás da foto) */}
      <motion.h2
        {...reveal()}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      >
        <span className="whitespace-nowrap font-display leading-none text-accent text-[19vw]">
          THANK YOU
        </span>
      </motion.h2>

      {/* Foto recortada (frente) */}
      <motion.img
        {...fade(0.2)}
        src={julia}
        alt="Julia Lepiscopo"
        className="absolute bottom-[-8vh] left-1/2 z-20 h-[135vh] max-w-none -translate-x-1/2 object-contain object-bottom"
      />

      {/* Conteúdo inferior */}
      <motion.div
        {...reveal(0.35)}
        className="relative z-30 w-full px-6 pb-10"
      >
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
          {/* Esquerda: social + nome */}
          <div className="flex items-center gap-4">
            <SocialIcons />
            <span className="text-sm text-white/60">Julia Lepiscopo</span>
          </div>

          {/* Direita: citação */}
          <p className="hidden max-w-xs text-right text-sm text-white/80 sm:block">
            "A distância entre o sonho e a realidade chama-se disciplina. — Jocko Willink"
          </p>
        </div>
      </motion.div>
    </section>
  )
}
