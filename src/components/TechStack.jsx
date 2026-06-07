import { useState, useEffect } from 'react'
import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiApachekafka,
  SiPostman,
  SiDocker,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import {
  Server,
  Cloud,
  Code,
  GitBranch,
  InfinityIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

// Logos de marca (react-icons/Simple Icons) com cores ajustadas para o fundo escuro.
const categories = [
  {
    label: 'Backend',
    Icon: Server,
    techs: [
      { name: 'Python', Logo: SiPython, color: '#4B8BBE' },
      { name: 'Django', Logo: SiDjango, color: '#44B78B' },
      { name: 'PostgreSQL', Logo: SiPostgresql, color: '#5A8DEE' },
      { name: 'Kafka', Logo: SiApachekafka, color: '#FFFFFF' },
      { name: 'Postman', Logo: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    Icon: Cloud,
    techs: [
      { name: 'Docker', Logo: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', Logo: InfinityIcon, color: '#E5E5E5' },
      { name: 'AWS', Logo: FaAws, color: '#FF9900' },
      { name: 'Azure', Logo: VscAzure, color: '#3B9EFF' },
    ],
  },
  {
    label: 'Frontend',
    Icon: Code,
    techs: [
      { name: 'React', Logo: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', Logo: SiTypescript, color: '#4FA3E3' },
      { name: 'JavaScript', Logo: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', Logo: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Logo: SiCss, color: '#A879E6' },
      { name: 'Tailwind', Logo: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Versionamento e Gestão',
    Icon: GitBranch,
    techs: [
      { name: 'Git', Logo: SiGit, color: '#F05032' },
      { name: 'GitHub', Logo: SiGithub, color: '#FFFFFF' },
    ],
  },
]

function CategoryCard({ label, Icon, techs }) {
  return (
    <div className="flex min-h-[13rem] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
        <h4 className="text-sm font-bold uppercase tracking-wider text-white">
          {label}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {techs.map(({ name, Logo, color }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            <Logo className="h-4 w-4 shrink-0" color={color} />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = categories.length

  const go = (i) => setIndex((i + count) % count)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <div
      className="max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Trilho do carrossel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {categories.map((cat) => (
            <div key={cat.label} className="w-full shrink-0">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => go(index - 1)}
          aria-label="Categoria anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => go(i)}
              aria-label={`Ir para ${cat.label}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-accent' : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          aria-label="Próxima categoria"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
