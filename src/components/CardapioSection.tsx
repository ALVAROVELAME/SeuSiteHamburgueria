// Importando as flechas separadas
import { FlechaEsquerda, FlechaDireita } from './Flechas'; 
// IMPORTANDO OS DADOS ATUALIZADOS DO SEU NOVO ARQUIVO DATA
import { menuCategories } from '../data/cardapioData'; 

export function CardapioSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* CATEGORIA com flechas dinâmicas */}
          <div className="flex items-center justify-center gap-4 mb-4 w-full max-w-sm">
            <FlechaEsquerda color="#e32828" />
            <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#e32828] uppercase whitespace-nowrap">
              CATEGORIAS
            </span>
            <FlechaDireita color="#e32828" />
          </div>

          {/* Título Serifado */}
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 tracking-tight">
            Escolha Sua Melhor Opção
          </h2>
        </div>

        {/* Grid de Itens do Cardápio */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((item, i) => (
            <div key={i} className="bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Imagem do Cardápio Responsiva e de Alta Performance */}
              <div className="h-52 w-full overflow-hidden bg-neutral-100">
                <img 
                  srcSet={item.srcSet} 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  src={item.src} 
                  width={item.width}
                  height={item.height}
                  alt={item.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Bloco de Conteúdo */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                
                {/* Linha de Avaliação e Avatares */}
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-50">
                  <div className="flex items-center gap-2">
                    <div className="w-[3px] h-6 bg-[#e32828]" />
                    <div className="flex -space-x-2 overflow-hidden">
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" alt="cliente" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="cliente" />
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="cliente" />
                    </div>
                  </div>
                  
                  {/* Nota */}
                  <div className="flex items-center gap-1 text-sm font-bold text-neutral-800">
                    <span className="text-amber-500 text-base">★</span> {item.rating}
                  </div>
                </div>

                {/* Título e Descrição */}
                <div className="mb-5">
                  <h3 className="font-serif font-bold text-lg text-neutral-900 mb-1 leading-snug">
                    {item.alt}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Botão Pedir Agora */}
                <a 
                  href="#pedido" 
                  className="text-[#e32828] font-sans font-bold text-xs tracking-wider uppercase hover:text-red-700 transition-colors inline-flex items-center gap-1 w-fit"
                >
                  <span>Pedir Agora</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5 transform translate-y-[-0.5px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}