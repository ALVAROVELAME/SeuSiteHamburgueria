import { FlechaEsquerda, FlechaDireita } from './Flechas'; 
import { menuCategories } from '../data/cardapioData'; 
import { getResponsiveImage } from '../utils/imageLoader';

const reviewAvatars = [
  getResponsiveImage('avatar-mariana.webp', 'Cliente satisfeita'),
  getResponsiveImage('avatar-carlos.webp', 'Cliente satisfeito'),
  getResponsiveImage('avatar-cliente.webp', 'Cliente satisfeita'),
];

export function CardapioSection() {
  return (
    <section id="menu" className="section-spacing bg-white">
      <div className="site-container">
        
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 w-full max-w-xs sm:max-w-sm">
            <FlechaEsquerda color="#e32828" className="w-14 sm:w-20 md:w-24" />
            <span className="text-[11px] sm:text-xs font-sans font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-[#e32828] uppercase whitespace-nowrap">
              CATEGORIAS
            </span>
            <FlechaDireita color="#e32828" className="w-14 sm:w-20 md:w-24" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-neutral-900 tracking-tight text-balance">
            Escolha Sua Melhor Opção
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {menuCategories.map((item) => (
            <article key={item.id} className="bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img 
                  src={item.imagem.src}
                  srcSet={item.imagem.srcSet}
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) calc((100vw - 4rem) / 2), 304px"
                  width={item.imagem.width}
                  height={item.imagem.height}
                  alt={item.imagem.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-50">
                  <div className="flex items-center gap-2">
                    <div className="w-[3px] h-6 bg-[#e32828]" />
                    <div className="flex -space-x-2 overflow-hidden">
                      {reviewAvatars.map((avatar) => (
                        <img
                          key={avatar.alt}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                          src={avatar.src}
                          srcSet={avatar.srcSet}
                          sizes="24px"
                          width={avatar.width}
                          height={avatar.height}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm font-bold text-neutral-800">
                    <span className="text-amber-500 text-base">★</span> {item.rating}
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="font-serif font-bold text-lg text-neutral-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-neutral-900">{item.price}</span>
                  <a 
                    href="#pedido" 
                    className="text-[#e32828] font-sans font-bold text-xs tracking-wider uppercase hover:text-red-700 transition-colors inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Pedir Agora</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5 transform translate-y-[-0.5px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
