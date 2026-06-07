import grad from '../../IMG/img_myGraduations.png'

const graduations = [
  {
    title: 'Técnico em Informática - Etec Alberto Santos Dumont',
    period: '2023 - 2024',
    desc: 'Formação técnica em informática, lógica de programação, redes e fundamentos de desenvolvimento de sistemas.',
  },
  {
    title: 'Ciência da Computação - USTJ',
    period: '2024 - Em andamento',
    desc: 'Base sólida em algoritmos, estruturas de dados, matemática e engenharia de software.',
  },
  {
    title: 'Gestão de Banco de Dados - Unicesumar',
    period: '2025 - Trancada',
    desc: 'Modelagem, administração e otimização de bancos de dados. Atualmente trancada.',
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas - UNIASSELVI',
    period: '2026 - Em andamento',
    desc: 'Foco no desenvolvimento de aplicações, do back-end ao front-end e práticas de engenharia.',
  },
]

export default function GraduationsSection() {
  return (
    <section
      id="graduacoes"
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      {/* Visual (desktop): círculo vermelho + foto à esquerda */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 md:block">
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent lg:h-[30rem] lg:w-[30rem]" />
        <img
          src={grad}
          alt="Julia Lepiscopo"
          className="absolute bottom-0 left-1/2 h-[86%] max-w-none -translate-x-1/2 object-contain object-bottom"
        />
      </div>

      {/* Conteúdo (direita) */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        <div className="md:ml-auto md:w-[52%]">
          <h2 className="font-display text-5xl leading-[0.85] sm:text-7xl lg:text-8xl">
            MY
            <br />
            GRADUATIONS
          </h2>

          {/* Foto no mobile */}
          <div className="relative my-10 flex justify-center md:hidden">
            <div className="absolute top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent" />
            <img
              src={grad}
              alt="Julia Lepiscopo"
              className="relative h-72 object-contain"
            />
          </div>

          <div className="mt-10 space-y-6">
            {graduations.map((g) => (
              <div key={g.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-white">{g.title}</h3>
                  <span className="shrink-0 text-sm text-white/60">
                    ({g.period})
                  </span>
                </div>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/70">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
