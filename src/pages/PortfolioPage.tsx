import { useState } from 'react';
import type { FormEvent } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutUs } from '../components/AboutUs';
import { CardapioSection } from '../components/CardapioSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FloatingWhatsapp } from '../components/FloatingWhatsapp';
import { Footer } from '../components/Footer';
import { DeveloperBanner } from '../components/DeveloperBanner'; 
import { menuCategories } from '../data/cardapioData';
import { SITE_CONFIG, getWhatsappLink } from '../data/config';

// Tipagem para os itens dinâmicos do pedido
interface ItemPedido {
  id: number;
  nome: string;
  quantidade: number;
}

export default function PortfolioPage() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pedido, setPedido] = useState('');
  
  // Estado que guarda a lista de itens (inicia com 1 item vazio)
  const [itensPedido, setItensPedido] = useState<ItemPedido[]>([
    { id: Date.now(), nome: '', quantidade: 1 }
  ]);

  // Função para adicionar uma nova linha de produto
  const adicionarItem = () => {
    setItensPedido([...itensPedido, { id: Date.now(), nome: '', quantidade: 1 }]);
  };

  // Função para remover uma linha de produto específica
  const removerItem = (id: number) => {
    if (itensPedido.length === 1) return; // Garante que sempre terá pelo menos 1 campo
    setItensPedido(itensPedido.filter(item => item.id !== id));
  };

  // Função para atualizar o nome ou a quantidade de um item específico
  const atualizarItem = (id: number, campo: 'nome' | 'quantidade', valor: string | number) => {
    setItensPedido(itensPedido.map(item => 
      item.id === id ? { ...item, [campo]: valor } : item
    ));
  };

  const handleWhatsAppOrder = (e: FormEvent) => {
    e.preventDefault();
    
    // Formata a lista de itens (Ex: "2x Hamburguer Duplo")
    const itensFormatados = itensPedido
      .filter(item => item.nome !== '') // Ignora se o cliente deixou algum select em branco
      .map(item => `${item.quantidade}x ${item.nome}`)
      .join('\n  - '); // Quebra a linha e adiciona um tracinho para cada item
      
    const textoMensagem = `Olá! Meu nome é ${nome}. Gostaria de pedir:
  - ${itensFormatados}

Endereço de entrega: ${endereco}. 
Observações: ${pedido}`;
    
    const url = getWhatsappLink(textoMensagem);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <DeveloperBanner 
        whatsappLink={getWhatsappLink("Olá, Álvaro! Gostaria de um site com este modelo premium.")} 
      />

      <HeroSection />
      <CardapioSection />        
      <AboutUs />
      <TestimonialsSection />

      <section id="pedido" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Faça seu Pedido</h2>
            <form onSubmit={handleWhatsAppOrder} className="space-y-6">
              
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl" 
                required 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              
              {/* ÁREA DOS ITENS DINÂMICOS */}
              <div className="space-y-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Itens do Pedido</label>
                
                {itensPedido.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start">
                    
                    {/* Select do Produto */}
                    <div className="flex-1">
                      <select 
                        aria-label="Selecione seu item do cardápio"
                        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-white appearance-none"
                        required
                        value={item.nome}
                        onChange={(e) => atualizarItem(item.id, 'nome', e.target.value)}
                      >
                        <option value="" disabled>Selecione um item...</option>
                        {menuCategories.map((cat) => (
                          <option key={cat.id} value={cat.title}>{cat.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Input de Quantidade */}
                    <div className="w-20 sm:w-24">
                      <input 
                        type="number" 
                        min="1"
                        placeholder="Qtd"
                        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-center text-white" 
                        required 
                        value={item.quantidade}
                        onChange={(e) => atualizarItem(item.id, 'quantidade', parseInt(e.target.value) || 1)}
                      />
                    </div>

                    {/* Botão de Remover (Só aparece se tiver mais de 1 item) */}
                    {itensPedido.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removerItem(item.id)}
                        className="p-4 text-slate-400 hover:text-red-500 hover:bg-red-500/10 bg-slate-800 border border-slate-700 rounded-xl transition-all flex-shrink-0"
                        title="Remover item"
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                ))}

                {/* Botão Adicionar Mais Itens */}
                <button 
                  type="button" 
                  onClick={adicionarItem}
                  className="text-sm font-bold text-red-500 hover:text-red-400 flex items-center gap-2 transition-colors pt-2"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Adicionar outro item
                </button>
              </div>

              <input 
                type="text" 
                placeholder="Endereço de Entrega (Rua, Número, Bairro)" 
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl" 
                required 
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />

              <textarea 
                placeholder="Alguma observação no pedido?" 
                rows={4} 
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl" 
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
              ></textarea>
              
              <button type="submit" className="w-full bg-red-600 py-6 rounded-2xl font-bold text-xl hover:bg-red-700 transition-all">
                ENVIAR PEDIDO 📲
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Nossa Localização</h3>
            <p className="text-slate-400 mb-6">{SITE_CONFIG.contact.address}</p>
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
              <iframe 
                title="Localização Shopping Barra"
                src={SITE_CONFIG.contact.mapLink}
                width="100%" 
                height="100%" 
                className="border-none" 
                allowFullScreen
                // O loading="lazy" foi removido daqui para evitar o erro de compatibilidade do Safari
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}