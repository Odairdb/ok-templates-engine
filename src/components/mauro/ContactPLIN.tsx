"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitLeadAction } from "@/actions/submitLead";

export default function ContactPLIN() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        formData.append("template_type", "Mauro Benedetti");

        // Assuming submitLeadAction exists from the SERV build
        try {
            const result = await submitLeadAction(formData);
            if (result?.error) {
                setError(result.error);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setIsOpen(false);
                    setSuccess(false);
                }, 4000);
            }
        } catch (err) {
            setError("Erro ao enviar mensagem. Tente novamente.");
        }
        setLoading(false);
    };

    if (!isOpen) {
        return (
            <section className="bg-mauro-darkbrown flex justify-center items-center" style={{ padding: '120px 24px' }}>
                <div 
                    className="w-full max-w-lg rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl border border-white/10"
                    style={{ background: 'linear-gradient(to bottom right, #3B2B1E, #050505)' }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-mauro-amber/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    
                    <div className="relative z-10 w-full">
                        <div className="mb-8">
                            <h3 className="text-3xl md:text-4xl font-serif text-mauro-cream mb-4">Vamos conversar?</h3>
                            <p className="text-white/60 font-sans leading-relaxed">
                                Envie uma mensagem diretamente para o Mauro Benedetti e a nossa equipe entrará em contato com você o mais rápido possível.
                            </p>
                        </div>
                        
                        <button 
                            onClick={() => setIsOpen(true)}
                            className="w-full bg-mauro-amber hover:bg-mauro-cream text-mauro-black font-bold uppercase tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(228,150,56,0.3)] hover:shadow-[0_0_30px_rgba(228,150,56,0.5)] transition-all flex items-center justify-center gap-3"
                        >
                            <MessageSquare size={20} />
                            Agendar Consultoria
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-mauro-darkbrown flex justify-center items-center" style={{ padding: '120px 24px' }}>
            <div className="w-full max-w-lg bg-mauro-cream rounded-3xl p-8 shadow-2xl border border-white/10 relative text-mauro-black font-sans">
                
                <h3 className="text-2xl font-serif font-bold text-mauro-darkbrown mb-2">Contato Direto</h3>
                <p className="text-mauro-brown/80 text-sm mb-6">Preencha os dados abaixo para darmos o primeiro passo.</p>

                {success ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center">
                        <CheckCircle2 size={64} className="text-green-500 mb-4" />
                        <h4 className="font-bold text-green-900 text-2xl mb-2">Mensagem Enviada!</h4>
                        <p className="text-green-700">O Mauro Benedetti recebeu sua mensagem e retornará em breve.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        
                        {error && (
                            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-start gap-2 border border-red-200">
                                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                                <p>{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-mauro-darkbrown mb-1">Seu Nome *</label>
                            <input 
                                type="text" 
                                name="customer_name" 
                                required 
                                className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none bg-white focus:border-mauro-amber focus:ring-1 focus:ring-mauro-amber transition-all"
                                placeholder="Como devemos chamá-lo?"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-mauro-darkbrown mb-1">Seu WhatsApp *</label>
                                <input 
                                    type="tel" 
                                    name="customer_phone" 
                                    required 
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none bg-white focus:border-mauro-amber focus:ring-1 focus:ring-mauro-amber transition-all"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-mauro-darkbrown mb-1">E-mail (Opcional)</label>
                                <input 
                                    type="email" 
                                    name="customer_email" 
                                    className="w-full h-12 px-4 rounded-xl border border-gray-300 outline-none bg-white focus:border-mauro-amber focus:ring-1 focus:ring-mauro-amber transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-mauro-darkbrown mb-1">O que você precisa? *</label>
                            <textarea 
                                name="message" 
                                required 
                                rows={4}
                                className="w-full p-4 rounded-xl border border-gray-300 outline-none bg-white focus:border-mauro-amber focus:ring-1 focus:ring-mauro-amber transition-all resize-none"
                                placeholder="Me fale mais sobre o seu negócio e como posso ajudar..."
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-3 mt-2">
                            <button 
                                type="button" 
                                onClick={() => setIsOpen(false)}
                                className="flex-1 h-12 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                Voltar
                            </button>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="flex-[2] h-12 bg-mauro-amber text-mauro-black rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Enviando...' : (
                                    <>
                                        <Send size={16} />
                                        Enviar Mensagem
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
