import { useEffect, useRef, useState } from 'react';
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

interface ItemPedido {
  id: number;
  nome: string;
  quantidade: number | string; // Permite string temporária para não quebrar a digitação quando apagar tudo
}

export default function PortfolioPage() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pedido, setPedido] = useState('');
  const [hideFloatingWhatsapp, setHideFloatingWhatsapp] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const nextItemIdRef = useRef(2);
  const mapExternalLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.contact.address)}`;
  
  const [itensPedido, setItensPedido] = useState<ItemPedido[]>([
    { id: 1, nome: '', quantidade: 1 }
  ]);

  useEffect(() => {
    const formSection = document.getElementById('pedido');
    if (!formSection) return;

    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    let observer: IntersectionObserver | null = null;

    const syncObserver = () => {
      observer?.disconnect();

      if (!mediaQuery.matches) {
        setHideFloatingWhatsapp(false);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setHideFloatingWhatsapp(entry.isIntersecting);
        },
        {
          threshold: 0.2,
        },
      );

      observer.observe(formSection);
    };

    syncObserver();
    mediaQuery.addEventListener('change', syncObserver);

    return () => {
      observer?.disconnect();
      mediaQuery.removeEventListener('change', syncObserver);
    };
  }, []);

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (!mapContainer || shouldLoadMap) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoadMap(true);
        observer.disconnect();
      },
      {
        rootMargin: '300px 0px',
      },
    );

    observer.observe(mapContainer);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  const adicionarItem = () => {
    const nextId = nextItemIdRef.current;
    nextItemIdRef.current += 1;
    setItensPedido([...itensPedido, { id: nextId, nome: '', quantidade: 1 }]);
  };

  const removerItem = (id: number) => {
    if (itensPedido.length === 1) return;
    setItensPedido(itensPedido.filter(item => item.id !== id));
  };

  const atualizarItem = (id: number, campo: 'nome' | 'quantidade', valor: string | number) => {
    setItensPedido(itensPedido.map(item => 
      item.id === id ? { ...item, [campo]: valor } : item
    ));
  };

  const handleWhatsAppOrder = (e: FormEvent) => {
    e.preventDefault();
    
    const itensFormatados = itensPedido
      .filter(item => item.nome !== '')
      .map((item, index) => {
        const qtdDefinitiva = parseInt(item.quantidade as string) || 1;
        return `${index + 1}. ${qtdDefinitiva}x ${item.nome}`;
      })
      .join('\n');

    const observacoes = pedido.trim()
      ? `\n📝 *Observações:*\n${pedido.trim()}`
      : '';

    const now = new Date();
    const horario = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const data = now.toLocaleDateString('pt-BR');

    const textoMensagem =
`🍔 *NOVO PEDIDO* 🍔
━━━━━━━━━━━━━━━━━━━━

👤 *Cliente:* ${nome}
🕐 *Horário:* ${data} às ${horario}

━━━━━━━━━━━━━━━━━━━━
🛒 *ITENS DO PEDIDO:*
━━━━━━━━━━━━━━━━━━━━
${itensFormatados}
━━━━━━━━━━━━━━━━━━━━

📍 *Endereço de Entrega:*
${endereco}${observacoes}

━━━━━━━━━━━━━━━━━━━━
✅ Aguardo confirmação!`;
    
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
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400" 
                required 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              
              <div className="space-y-4 bg-slate-800 p-5 rounded-2xl border border-slate-700">
                <label className="text-sm font-bold text-slate-200 uppercase tracking-wider">Itens do Pedido</label>
                
                {itensPedido.map((item) => (
                  <div key={item.id} className="flex flex-wrap sm:flex-nowrap gap-3 items-center border-b border-slate-700/50 sm:border-0 pb-4 sm:pb-0">
                    
                    <div className="w-full sm:flex-1">
                      <select 
                        aria-label="Selecione seu item do cardápio"
                        className="w-full p-4 bg-slate-900 border border-slate-600 rounded-xl text-white appearance-none"
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

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="w-24">
                        <input 
                          type="number" 
                          min="1"
                          placeholder="Qtd"
                          className="w-full p-4 bg-slate-900 border border-slate-600 rounded-xl text-center text-white placeholder:text-slate-400" 
                          required 
                          value={item.quantidade}
                          onChange={(e) => {
                            const val = e.target.value;
                            // CONSERTO DO BUG: Se estiver em branco, deixa em branco pro celular aceitar digitação fluida. 
                            // Caso contrário, armazena o número inteiro digitado.
                            atualizarItem(item.id, 'quantidade', val === '' ? '' : parseInt(val) || 1);
                          }}
                          onBlur={() => {
                            // Segurança extra: se o usuário sair do input e deixar em branco, redefine para 1
                            if (item.quantidade === '') {
                              atualizarItem(item.id, 'quantidade', 1);
                            }
                          }}
                        />
                      </div>

                      {itensPedido.length > 1 && (
                        <button 
                          type="button"
                          onClick={() => removerItem(item.id)}
                          className="p-4 text-slate-300 hover:text-red-400 hover:bg-red-900/30 bg-slate-900 border border-slate-600 rounded-xl transition-all flex-shrink-0"
                          title="Remover item"
                        >
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      )}
                    </div>

                  </div>
                ))}

                <button 
                  type="button" 
                  onClick={adicionarItem}
                  className="text-sm font-bold text-red-400 hover:text-red-300 flex items-center gap-2 transition-colors pt-2"
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
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400" 
                required 
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />

              <textarea 
                placeholder="Alguma observação no pedido?" 
                rows={4} 
                className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400" 
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
              ></textarea>
              
              <button type="submit" className="w-full bg-red-600 py-6 rounded-2xl font-bold text-xl hover:bg-red-700 text-white transition-all">
                ENVIAR PEDIDO 📲
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2">Nossa Localização</h3>
            <p className="text-slate-300 mb-6">{SITE_CONFIG.contact.address}</p>
            <div
              ref={mapContainerRef}
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800"
            >
              {shouldLoadMap ? (
                <iframe 
                  title="Localização do establishmento"
                  src={SITE_CONFIG.contact.mapLink}
                  width="100%" 
                  height="100%" 
                  className="border-none" 
                  allowFullScreen
                  // loading="lazy" removido — não suportado no Safari iOS < 16.4.
                  // O carregamento lazy já é gerenciado pelo IntersectionObserver acima (shouldLoadMap),
                  // então este atributo é desnecessário e causava warning de compatibilidade.
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-slate-900/80 px-6 text-center">
                  <p className="max-w-sm text-sm text-slate-300">
                    O mapa interativo sera carregado quando esta secao se aproximar da tela.
                  </p>
                  <a
                    href={mapExternalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-red-400 hover:text-red-300"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp hidden={hideFloatingWhatsapp} />
    </div>
  );
}