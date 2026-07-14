import { useState } from 'react';

interface DeveloperBannerProps {
  whatsappLink: string;
}

export function DeveloperBanner({ whatsappLink }: DeveloperBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="sticky inset-x-0 top-[72px] z-40 mt-[72px] border-b border-red-900/10 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white shadow-lg shadow-red-950/10"
      aria-label="Banner do desenvolvedor"
    >
      <div className="relative flex min-h-10 w-full items-center justify-center px-11 py-1 sm:min-h-11 sm:px-16">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Fechar banner"
          className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-red-700 shadow-sm shadow-red-950/20 transition-colors hover:bg-yellow-200 hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:left-6 sm:h-8 sm:w-8"
        >
          <span aria-hidden="true" className="text-base leading-none sm:text-lg">
            ×
          </span>
        </button>

        <div className="flex min-w-0 items-center justify-center gap-2 text-center sm:gap-3">
          <p className="min-w-0 truncate text-center text-[10px] font-semibold leading-none text-white/90 sm:text-sm">
            <span className="font-extrabold text-white">Site para hamburguerias</span>
            <span className="text-white/85 sm:hidden"> com pedidos pelo WhatsApp.</span>
            <span className="hidden text-white/85 sm:inline">
              {' '}
              pronto para cardápio, pedidos e WhatsApp.
            </span>
          </p>

          <span className="hidden h-4 w-px shrink-0 bg-white/25 md:block" />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 shrink-0 items-center justify-center rounded-full bg-white px-3 text-[10px] font-extrabold uppercase tracking-[0.08em] text-red-700 shadow-sm shadow-red-950/20 transition-colors hover:bg-yellow-200 hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:h-8 sm:px-5 sm:text-[11px]"
          >
            <span className="sm:hidden">Quero site</span>
            <span className="hidden sm:inline">Quero um site assim</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
