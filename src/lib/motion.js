// Helpers de animação (Framer Motion) reutilizáveis.
// reveal: fade + sobe (use em títulos, textos e cards)
// fade: só opacidade — seguro para elementos com transform (ex.: fotos com -translate)

const ease = [0.22, 1, 0.36, 1]

export const reveal = (delay = 0, y = 50) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease, delay },
})

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease, delay },
})
