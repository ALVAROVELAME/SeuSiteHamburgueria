import { getResponsiveImage } from '../utils/imageLoader';

interface CtaBannerProps {
  whatsappLink: string;
}

export function CtaBanner({ whatsappLink }: CtaBannerProps) {
  const backgroundImage = getResponsiveImage('cta-background.webp', 'Atendimento consultivo');

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 my-24 w-full">
      <div className="relative bg-slate-950 rounded-xl overflow-hidden text-white p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl scroll-animate">
        <img
          src={backgroundImage.src}
          srcSet={backgroundImage.srcSet}
          sizes="(max-width: 768px) calc(100vw - 2rem), 1152px"
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none"
        />
        <div className="relative z-10 max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Entre em contato hoje para uma consultoria gratuita</h3>
          <p className="text-slate-400 text-sm">Fale diretamente com um consultor especialista e descubra como otimizar a carga tributária do seu negócio.</p>
        </div>
        <a href={whatsappLink} className="relative z-10 bg-white text-slate-950 px-8 py-4 rounded-sm font-bold text-sm hover:bg-teal-400 hover:text-slate-950 transition-all whitespace-nowrap shadow-lg hover:scale-105 transform">Agendar Avaliação</a>
      </div>
    </section>
  );
}
