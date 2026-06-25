import { getWhatsappLink } from '../data/config';

export function Footer() {
  const whatsappLink = getWhatsappLink();

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Logo com ícone escolhido */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-gray-700 flex-1 max-w-[200px]"></div>
          <div className="text-center">
            {/* Ícone de Chapéu de Chef selecionado */}
            <svg 
              className="w-14 h-14 text-white mx-auto mb-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/>
              <path d="M6 17h12"/>
            </svg>
            <h2 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">SEU SITE</h2>
          </div>
          <div className="h-px bg-gray-700 flex-1 max-w-[200px]"></div>
        </div>

        {/* Informações organizadas */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Sobre Nós</h3>
            <p className="text-sm leading-relaxed">
              Hambúrgueres artesanais com blends exclusivos e ingredientes selecionados. Bateu a fome? Não passe vontade, chame no WhatsApp e garanta o melhor burger da cidade quentinho na sua casa!
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-400 cursor-pointer transition-colors">Cardápio</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors">Nossa História</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors">Localização</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h3>
            <div className="space-y-3 text-sm">
              <p>Shopping Barra, Sua Loja<br/>Salvador - BA</p>
              {/* Alterado de text-red-600 para text-red-400 para corrigir o contraste */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-red-400 font-bold hover:text-white transition-colors">
                (75) 9933-1557
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}