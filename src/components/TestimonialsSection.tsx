
import { getResponsiveImage } from '../utils/imageLoader';
import type { ResponsiveImage } from '../utils/imageLoader';

// Interface para garantir a tipagem estrita no TypeScript
interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: ResponsiveImage;
}

export function TestimonialsSection() {
  // ARRAY LOCAL DE DEPOIMENTOS - Seguro, limpo e sem dependências fantasmas
  const testimonials: TestimonialItem[] = [
    {
      name: "Carlos Eduardo",
      role: "Cliente VIP",
      text: "O Smash Burger Duplo é simplesmente o melhor que já comi. A carne vem no ponto perfeito e o molho artesanal da casa é viciante. Entrega super rápida!",
      rating: 5,
      avatar: getResponsiveImage('avatar-carlos.webp', 'Carlos Eduardo')
    },
    {
      name: "Mariana Silva",
      role: "Crítica Gastronômica Local",
      text: "Uma avalanche de sabor! O Cheddar & Bacon Supreme é gigante e o bacon realmente vem muito crocante. O atendimento pelo WhatsApp também foi excelente.",
      rating: 5,
      avatar: getResponsiveImage('avatar-mariana.webp', 'Mariana Silva')
    },
    {
      name: "Rodrigo Ramos",
      role: "Amante de Burgers",
      text: "As batatas especiais e os anéis de cebola gigantes fecham o combo perfeito. A crocância é absurda, mesmo chegando por delivery. Recomendo de olhos fechados!",
      rating: 5,
      avatar: getResponsiveImage('avatar-rodrigo.webp', 'Rodrigo Ramos')
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-sans font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Grid dos Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-500 group"
            >
              <div>
                {/* Estrelas baseadas na nota numérica */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={idx} className="text-lg">★</span>
                  ))}
                </div>
                
                {/* Texto */}
                <p className="text-slate-300 font-sans leading-relaxed text-[15px] italic mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Rodapé do card */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                <div className="relative">
                  <img 
                    src={item.avatar.src}
                    srcSet={item.avatar.srcSet}
                    sizes="48px"
                    width={item.avatar.width}
                    height={item.avatar.height}
                    alt={item.avatar.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/[0.05] group-hover:ring-red-500/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-white">{item.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
