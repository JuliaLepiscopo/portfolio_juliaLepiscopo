import skillsImg from '../../IMG/img_personalSkills.png'
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

//   = espaço inquebrável para "— Bear Bryant" não se separar na quebra de linha
const QUOTE =
  '"A vontade de se preparar tem que ser maior do que a vontade de vencer. — Bear Bryant"'

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden bg-bg">
      {/* Visual (desktop): citação + círculo vermelho + câmera + cubo */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden md:block">
        <p className="absolute right-8 top-32 z-20 max-w-[16rem] text-right text-sm leading-snug text-white/80">
          {QUOTE}
        </p>

        <div className="flex h-full items-center justify-end pr-4">
          {/* círculo como âncora da composição */}
          <div className="relative h-[24rem] w-[24rem] rounded-full bg-accent lg:h-[30rem] lg:w-[30rem]">
            {/* câmera ancorada no canto inferior-direito (braço sai pelo canto) */}
            <img
              src={skillsImg}
              alt="Câmera fotográfica"
              className="absolute bottom-0 right-0 z-10 h-[28rem] translate-x-[8%] translate-y-[7%] object-contain object-bottom lg:h-[34rem]"
            />
          </div>
        </div>
      </div>

      {/* Conteúdo (esquerda) */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        <div className="md:w-1/2">
          <h2 className="font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            PERSONAL
            <br />
            SKILLS
          </h2>

          <div className="mt-10 max-w-md divide-y divide-white/10">
            {skills.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-4 py-4">
                <img
                  src={icon}
                  alt=""
                  className="h-11 w-11 shrink-0 object-contain"
                />
                <p className="text-base text-white/90">{label}</p>
              </div>
            ))}
          </div>

          {/* Visual no mobile */}
          <div className="md:hidden">
            <div className="relative mt-14 flex justify-center">
              <div className="absolute top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-accent" />
              <img
                src={skillsImg}
                alt="Câmera fotográfica"
                className="relative h-64 object-contain"
              />
            </div>
            <p className="mt-6 text-center text-sm text-white/80">{QUOTE}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
