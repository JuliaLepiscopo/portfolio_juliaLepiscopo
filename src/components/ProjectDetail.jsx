import { ExternalLink } from 'lucide-react'
import BrowserFrame from './BrowserFrame'

export default function ProjectDetail({
  id,
  label,
  name,
  description,
  link,
  linkLabel = 'Acessar site',
  quote,
  images,
  side = 'left',
  outlined = false,
  frame,
  url,
}) {
  const [firstWord, ...rest] = label.split(' ')
  const restText = rest.join(' ')

  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center overflow-hidden bg-bg py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Imagens do projeto */}
        <div
          className={`space-y-4 ${side === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {frame === 'browser' ? (
            <>
              <BrowserFrame url={url}>
                <img src={images[0]} alt={name} className="w-full" />
              </BrowserFrame>
              {images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={name}
                  className="w-full rounded-2xl border border-white/10 shadow-2xl"
                />
              ))}
            </>
          ) : (
            images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            ))
          )}
        </div>

        {/* Texto */}
        <div className={side === 'right' ? 'lg:order-1' : 'lg:order-2'}>
          <h2 className="font-display text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            <span className={outlined ? 'text-outline' : undefined}>
              {firstWord}
            </span>
            <br />
            {restText}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {description}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold tracking-wide text-white transition hover:brightness-125 sm:text-sm"
          >
            {linkLabel}
            <ExternalLink className="h-4 w-4" />
          </a>

          {quote && (
            <p className="mt-8 max-w-md text-sm italic leading-relaxed text-white/55">
              {quote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
