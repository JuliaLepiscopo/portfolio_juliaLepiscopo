import timenow from '../../IMG/img_timenow.png'
import sfc from '../../IMG/img_sfc.png'
import chinalink from '../../IMG/img_chinalink.png'
import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'

const experiences = [
  {
    company: 'Santos Futebol Clube',
    period: '2024 - 2025',
    desc: 'Realizei a gestão documental de atletas e criei relatórios gerenciais com Excel e TOTVS para otimizar processos operacionais.',
  },
  {
    company: 'Timenow Engenharia',
    period: '2025 - 2026',
    desc: 'Atuei no planejamento de projetos e na automação de dados com Python, Power BI e Power Apps para a criação de dashboards.',
  },
  {
    company: 'China Link',
    period: '2026 - Atual',
    desc: 'Atuo como desenvolvedora front-end focada na criação de interfaces dinâmicas e responsivas. Utilizo React e Tailwind CSS para construir aplicações com design moderno e ótima usabilidade.',
  },
]

// rotate: logo em banner horizontal → girado 90° para preencher o card vertical
const companies = [
  { name: 'timenow', img: timenow, rotate: true },
  { name: 'Santos FC', img: sfc, rotate: false },
  { name: 'ChinaLink', img: chinalink, rotate: true },
]

function CompanyCard({ name, img, rotate }) {
  return (
    <div className="relative h-72 w-28 shrink-0 overflow-hidden rounded-2xl bg-accent shadow-xl sm:h-80 sm:w-32">
      <img
        src={img}
        alt={name}
        className={
          rotate
            ? 'absolute left-1/2 top-1/2 h-32 w-80 max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-cover sm:h-32'
            : 'absolute inset-0 h-full w-full object-cover'
        }
      />
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section
      id="experiencias"
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        <motion.div
          {...reveal()}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
        >
          <h2 className="font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            WORK
            <br />
            EXPERIENCE
          </h2>

          <p className="max-w-md text-sm italic leading-relaxed text-white/55 lg:pt-10 lg:text-right">
            "No que diz respeito ao empenho, ao compromisso, ao esforço e à
            dedicação, não existe meio termo. Ou você faz uma coisa bem feita ou
            não faz. — Ayrton Senna"
          </p>
        </motion.div>

        <motion.div
          {...reveal(0.15)}
          className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
        >
          {/* Lista de experiências */}
          <div className="max-w-xl space-y-7">
            {experiences.map((e) => (
              <div key={e.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold text-white">{e.company}</h3>
                  <span className="shrink-0 text-sm text-white/60">
                    ({e.period})
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/75">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Cards das empresas */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
            {companies.map((c) => (
              <CompanyCard key={c.name} {...c} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
