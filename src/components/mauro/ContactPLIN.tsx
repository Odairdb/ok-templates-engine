'use client';

import { useState } from 'react';
import { MessageSquare, AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { submitMauroLeadAction } from '@/actions/submitMauroLead';

export default function ContactPLIN() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const formData = new FormData(e.currentTarget);
        
        const response = await submitMauroLeadAction(formData);

        if (response.error) {
            setError(response.error);
        } else {
            setSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
                setSuccess(false);
            }, 5000);
        }
        setLoading(false);
    };

    if (!isOpen) {
        return (
            <section 
                className="bg-mauro-dark flex justify-center items-center relative overflow-hidden border-t border-mauro-gold/10"
                style={{ paddingTop: '150px', paddingBottom: '150px' }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mauro-gold/5 via-mauro-dark to-mauro-dark pointer-events-none"></div>

                <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
                    
                    <div className="absolute top-0 right-0 w-64 h-64 bg-mauro-gold/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-mauro-gold/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
                    
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.4em] uppercase font-sans mb-6">
                            Exclusividade B2B
                        </h4>
                        <h3 className="text-4xl md:text-6xl font-serif text-mauro-light mb-8 leading-tight">
                            Gostaria de presentear <br/>seus parceiros?
                        </h3>
                        <p 
                            className="text-mauro-light/70 font-sans leading-relaxed max-w-lg font-light text-base md:text-lg"
                            style={{ marginBottom: '40px' }}
                        >
                            Vamos agendar uma conversa. A Benedetti Specialty Coffee está pronta para atender sua empresa.
                        </p>
                        
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="group relative px-12 py-5 overflow-hidden border border-mauro-gold bg-transparent text-mauro-gold font-sans font-medium uppercase tracking-[0.2em] transition-all hover:text-mauro-dark"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <MessageSquare size={18} />
                                Iniciar Conversa
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-mauro-gold transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section 
            className="bg-mauro-dark flex justify-center items-center border-t border-mauro-gold/10 relative px-4 md:px-6"
            style={{ paddingTop: '150px', paddingBottom: '150px' }}
        >
            <div className="w-full max-w-xl bg-mauro-dark rounded-sm p-6 sm:p-8 md:p-12 border border-mauro-gold/30 relative text-mauro-light font-sans shadow-2xl">
                
                <h3 className="text-3xl font-serif text-mauro-light mb-10">Como podemos ajudá-lo(a)</h3>

                {success ? (
                    <div className="bg-mauro-dark border border-mauro-gold/50 p-12 text-center flex flex-col items-center">
                        <CheckCircle2 size={64} className="text-mauro-gold mb-6" />
                        <h4 className="font-serif text-mauro-light text-3xl mb-4">Solicitação Recebida</h4>
                        <p className="text-mauro-light/70 font-light">Nossa equipe executiva entrará em contato em breve para detalhar o seu projeto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        {error && (
                            <div className="bg-red-900/20 text-red-400 p-4 rounded-sm text-sm flex items-start gap-3 border border-red-900/50">
                                <AlertCircle size={18} className="flex-shrink-0" />
                                <p>{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs tracking-[0.1em] uppercase font-bold text-mauro-light/60 mb-2">Seu Nome / Empresa</label>
                            <input 
                                type="text" 
                                name="customer_name" 
                                required 
                                className="w-full h-14 px-4 bg-transparent border border-mauro-gold/20 outline-none text-mauro-light focus:border-mauro-gold transition-colors font-light placeholder:text-mauro-light/20"
                                placeholder="Sr. João Silva - Empresa X"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs tracking-[0.1em] uppercase font-bold text-mauro-light/60 mb-2">WhatsApp</label>
                                <input 
                                    type="tel" 
                                    name="customer_phone" 
                                    required 
                                    className="w-full h-14 px-4 bg-transparent border border-mauro-gold/20 outline-none text-mauro-light focus:border-mauro-gold transition-colors font-light placeholder:text-mauro-light/20"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-xs tracking-[0.1em] uppercase font-bold text-mauro-light/60 mb-2">E-mail</label>
                                <input 
                                    type="email" 
                                    name="customer_email" 
                                    className="w-full h-14 px-4 bg-transparent border border-mauro-gold/20 outline-none text-mauro-light focus:border-mauro-gold transition-colors font-light placeholder:text-mauro-light/20"
                                    placeholder="ceo@empresa.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs tracking-[0.1em] uppercase font-bold text-mauro-light/60 mb-2">Detalhes do Pedido</label>
                            <textarea 
                                name="message" 
                                required 
                                rows={4}
                                className="w-full p-4 bg-transparent border border-mauro-gold/20 outline-none text-mauro-light focus:border-mauro-gold transition-colors font-light resize-none"
                                placeholder=""
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <button 
                                type="button" 
                                onClick={() => setIsOpen(false)}
                                className="flex-1 h-14 font-sans uppercase tracking-widest text-xs font-bold text-mauro-light/50 hover:text-mauro-light transition-colors"
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="flex-[2] h-14 bg-mauro-gold text-mauro-dark font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-mauro-gold-dark transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Enviando...' : (
                                    <>
                                        <Send size={16} />
                                        Solicitar Contato
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}


