// Moldura de janela de navegador (estilo macOS) para exibir screenshots.
export default function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl">
      {/* Barra superior (chrome) */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        {url && (
          <div className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-center text-xs text-white/45">
            {url}
          </div>
        )}
      </div>

      {/* Conteúdo (screenshot) */}
      <div className="bg-black">{children}</div>
    </div>
  )
}
