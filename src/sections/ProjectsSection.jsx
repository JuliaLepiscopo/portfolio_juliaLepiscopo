import fcThumb from '../../IMG/img_fcMobile.png'
import atelierThumb from '../../IMG/img_atelierDouce.png'
import lombreThumb from '../../IMG/img_lombre.png'
import aureaThumb from '../../IMG/img_aureaVox.png'

import fcProject from '../../IMG/img_fcMobile_project.png'
import atelierProject from '../../IMG/img_atelierDouce_project.png'
import lombreProject from '../../IMG/img_lombre_project.png'
import aureaProject from '../../IMG/img_aureaVox_project.png'

import ProjectDetail from '../components/ProjectDetail'
import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'

const gallery = [
  { id: 'fc-mobile', name: 'FC Mobile', thumb: fcThumb },
  { id: 'atelier-douce', name: 'Atelier Douce', thumb: atelierThumb },
  { id: 'lor-ombre', name: "L'Or & Ombre", thumb: lombreThumb },
  { id: 'aurea-vox', name: 'Aurea Vox', thumb: aureaThumb },
]

const projects = [
  {
    id: 'fc-mobile',
    label: 'FIRST PROJECT',
    name: 'FC Mobile',
    side: 'left',
    frame: 'browser',
    images: [fcProject],
    description:
      'FC Mobile é um aplicativo voltado para análise de desempenho de atletas, com foco em categorias de base e elenco profissional. A proposta é oferecer um sistema interativo onde técnicos, torcedores, analistas e até olheiros possam visualizar estatísticas, montar escalações e comparar jogadores em tempo real ou retrospectivo.',
    link: 'https://www.linkedin.com/in/julia-lepiscopo/',
    linkLabel: 'Ver no LinkedIn',
    quote: '"Genialidade é 1% inspiração e 99% transpiração. — Thomas Edison"',
  },
  {
    id: 'atelier-douce',
    label: 'SECOND PROJECT',
    name: 'Atelier Douce',
    side: 'right',
    frame: 'browser',
    url: 'atelier-douce.vercel.app',
    images: [atelierProject],
    description:
      'Desenvolvi a landing institucional da Atelier Douce, uma single-page com 3 seções (Home, Cardápio e Avaliações) pensada pra transmitir sofisticação e despertar o desejo pelos doces autorais da marca.',
    link: 'https://atelier-douce.vercel.app/',
    quote:
      `"Eu odiava cada minuto dos treinos, mas dizia para mim mesmo: 'Não desista. Sofra agora e viva o resto da sua vida como um campeão'." — Muhammad Ali`,
  },
  {
    id: 'lor-ombre',
    label: 'FAVORITE PROJECT',
    name: "L'Or & Ombre",
    side: 'left',
    outlined: true,
    frame: 'browser',
    url: 'l-or-ombre.vercel.app',
    images: [lombreProject],
    description:
      'Desenvolvimento de uma vitrine digital imersiva voltada ao mercado de luxo, unindo um design minimalista de alta sofisticação a uma arquitetura robusta e escalável. O projeto foca na experiência do usuário através de transições fluidas e uma interface que reflete a exclusividade do nicho de perfumaria fina.',
    link: 'https://l-or-ombre.vercel.app/',
    quote:
      '"Não tente ser o melhor, seja único e por ser único você será o melhor. — Marilyn Monroe"',
  },
  {
    id: 'aurea-vox',
    label: 'LAST PROJECT',
    name: 'Aurea Vox',
    side: 'right',
    frame: 'browser',
    url: 'aurea-vox.vercel.app/terroir',
    images: [aureaProject],
    description:
      'Desenvolvimento de uma landing page com estética editorial e arquitetura moderna, focada em elevar o padrão de interface (UI) e experiência do usuário (UX) no setor de vitivinicultura premium. O projeto prioriza a exclusividade através de tipografia serifada, hierarquia visual refinada e microinterações fluidas.',
    link: 'https://aurea-vox.vercel.app/terroir',
    quote:
      '"O sucesso não é um acidente. É trabalho duro, perseverança, aprendizado, estudo, sacrifício e, acima de tudo, amor pelo que você está fazendo. — Pelé"',
  },
]

export default function ProjectsSection() {
  return (
    <>
      {/* Galeria */}
      <section
        id="projetos"
        className="relative flex min-h-screen flex-col items-center justify-center bg-bg px-6 py-28"
      >
        <motion.h2
          {...reveal()}
          className="text-center font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
        >
          PROJECT
          <br />
          PORTFOLIO
        </motion.h2>

        <motion.div
          {...reveal(0.15)}
          className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {gallery.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img
                src={g.thumb}
                alt={g.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute inset-x-3 bottom-3 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {g.name}
              </span>
            </a>
          ))}
        </motion.div>
      </section>

      {/* Páginas de detalhe */}
      {projects.map((p) => (
        <ProjectDetail key={p.id} {...p} />
      ))}
    </>
  )
}
