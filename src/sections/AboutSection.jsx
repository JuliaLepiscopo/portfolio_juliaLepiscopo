import aboutMe from '../../IMG/img_aboutMe.png'
import TechStack from '../components/TechStack'
import { motion } from 'framer-motion'
import { reveal, fade } from '../lib/motion'

export default function AboutSection() {
  return (
    <section id="sobre" className="relative min-h-screen overflow-hidden bg-bg">
      {/* Visual (desktop): círculo vermelho + foto sangrando à direita */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block">
        <div className="absolute right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-accent lg:h-[32rem] lg:w-[32rem]" />
        <motion.img
          {...fade(0.2)}
          src={aboutMe}
          alt="Julia Lepiscopo"
          className="absolute bottom-0 right-0 h-[82%] max-w-none object-contain object-bottom"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28">
        <div className="max-w-xl">
          <motion.h2
            {...reveal()}
            className="font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl"
          >
            ABOUT
            <br />
            ME
          </motion.h2>

          <motion.p
            {...reveal(0.15)}
            className="mt-8 text-justify text-sm leading-relaxed text-white/90 sm:text-base"
          >
            Tenho 20 anos, sou desenvolvedora Fullstack e DevOps, no momento
            desenvolvo programas em Python e Django com infraestruturas
            automatizadas. Atuo na área enquanto curso Ciência da Computação na
            USTJ, ADS na Uniasselvi e Gestão de Banco de Dados na Unicesumar. No
            meu tempo livre gosto de estar com minha família e ir para academia.
          </motion.p>

          {/* Foto no mobile */}
          <div className="relative my-10 flex justify-center md:hidden">
            <div className="absolute top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent" />
            <img
              src={aboutMe}
              alt="Julia Lepiscopo"
              className="relative h-72 object-contain"
            />
          </div>

          <motion.div {...reveal(0.25)}>
            <h3 className="mb-4 mt-10 text-2xl font-semibold text-white">
              Stack
            </h3>
            <TechStack />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
