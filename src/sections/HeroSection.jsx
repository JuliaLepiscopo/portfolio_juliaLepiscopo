import bg from '../../IMG/background.png'
import julia from '../../IMG/img_startPage.png'
import SocialIcons from '../components/SocialIcons'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-bg"
    >
      {/* Fundo (motion blur) */}
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* PORTFOLIO gigante (atrás da foto) */}
      <h2 className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <span className="whitespace-nowrap font-display leading-none text-accent text-[24vw]">
          PORTFOLIO
        </span>
      </h2>

      {/* Foto recortada (frente) */}
      <img
        src={julia}
        alt="Julia Lepiscopo"
        className="absolute bottom-[-8vh] left-1/2 z-20 h-[135vh] max-w-none -translate-x-1/2 object-contain object-bottom"
      />

      {/* Conteúdo inferior */}
      <div className="relative z-30 w-full px-6 pb-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
          {/* Esquerda: apresentação + social + nome */}
          <div className="max-w-xs">
            <p className="mb-4 text-justify text-sm leading-relaxed text-white/90">
              Meu nome é Julia, tenho 20 anos, minha terapia é o esporte,
              cozinhar doces e ficar com minha família.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcons />
              <span className="text-sm text-white/60">Julia Lepiscopo</span>
            </div>
          </div>

          {/* Direita: citação */}
          <p className="hidden max-w-xs text-right text-sm text-white/80 sm:block">
            "A motivação te faz começar. A disciplina te mantém no jogo. — Jim Ryun"
          </p>
        </div>
      </div>
    </section>
  )
}
