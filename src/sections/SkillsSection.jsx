import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'
import cakeIcon from '../../IMG/icon_cake.png'
import cubeIcon from '../../IMG/icon_cube.png'
import bookIcon from '../../IMG/icon_book.png'
import tvIcon from '../../IMG/icon_tv.png'
import musicIcon from '../../IMG/icon_music.png'
import gymIcon from '../../IMG/icon_gym.png'

const skills = [
  { label: 'Cozinhar (principalmente doces)', icon: cakeIcon },
  { label: 'Montar cubo mágico', icon: cubeIcon },
  { label: 'Ler romance ou suspense', icon: bookIcon },
  { label: 'Ver animes e doramas', icon: tvIcon },
  { label: 'Ouvir música e canção militar', icon: musicIcon },
  { label: 'Treinar calistenia', icon: gymIcon },
]

const QUOTE =
  '"A vontade de se preparar tem que ser maior do que a vontade de vencer. — Bear Bryant"'

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-bg">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        {/* Título + citação */}
        <motion.div
          {...reveal()}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            PERSONAL
            <br />
            SKILLS
          </h2>
          <p className="max-w-md text-sm italic leading-relaxed text-white/60 sm:text-base lg:text-right">
            {QUOTE}
          </p>
        </motion.div>

        {/* Painéis expansíveis (accordion) */}
        <motion.div
          {...reveal(0.15)}
          className="mt-12 flex flex-col gap-3 lg:h-[26rem] lg:flex-row"
        >
          {skills.map((s) => (
            <div
              key={s.label}
              className="group/panel relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-500 ease-out hover:border-accent/50 hover:bg-white/[0.06] lg:hover:flex-[3]"
            >
              <div className="flex items-center gap-4 lg:flex-col">
                <img
                  src={s.icon}
                  alt=""
                  className="h-14 w-14 shrink-0 object-contain transition duration-300 lg:group-hover/panel:scale-110"
                />
                <span className="whitespace-nowrap text-sm text-white opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover/panel:opacity-100">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
