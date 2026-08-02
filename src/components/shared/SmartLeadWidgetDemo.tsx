"use client";

import { useState } from "react";
import { MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function SmartLeadWidgetDemo({ businessName = "Construtora Exemplo" }: { businessName?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
                setSuccess(false);
            }, 3000);
        }, 1200);
    };

    if (!isOpen) {
        return (
            <div 
                style={{ 
                    background: 'linear-gradient(to bottom right, #041E30, #3B4146)', 
                    borderRadius: '16px', 
                    padding: '24px', 
                    color: '#E7DFDB', 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', 
                    position: 'relative', 
                    overflow: 'hidden', 
                    height: '500px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    border: '1px solid rgba(231,223,219,0.1)', 
                    fontFamily: 'sans-serif' 
                }}
            >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '256px', height: '256px', backgroundColor: 'rgba(150,119,100,0.15)', borderRadius: '50%', filter: 'blur(80px)', marginRight: '-40px', marginTop: '-40px' }}></div>
                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%', maxWidth: '384px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '12px', color: '#E7DFDB' }}>Precisa de um orçamento?</h3>
                    <p style={{ color: 'rgba(231,223,219,0.6)', fontSize: '1rem', marginBottom: '32px', lineHeight: 1.6 }}>
                        Envie os detalhes do que você precisa e a equipe da <strong style={{ color: '#fff' }}>{businessName}</strong> entrará em contato rapidamente.
                    </p>
                    <button 
                        onClick={() => setIsOpen(true)}
                        style={{ 
                            width: '100%', 
                            backgroundColor: '#967764', 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            padding: '16px', 
                            borderRadius: '12px', 
                            boxShadow: '0 0 20px rgba(150,119,100,0.3)', 
                            border: 'none', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '8px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#7a5f4f';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(150,119,100,0.5)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#967764';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(150,119,100,0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <MessageSquare size={20} />
                        Solicitar Orçamento Expresso
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div 
            style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '16px', 
                padding: '24px', 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', 
                position: 'relative', 
                height: '500px', 
                overflowY: 'auto', 
                fontFamily: 'sans-serif',
                boxSizing: 'border-box'
            }}
        >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>Solicitar Orçamento</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '24px' }}>Preencha os dados abaixo para a empresa entrar em contato.</p>

            {success ? (
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '32px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '-64px', boxSizing: 'border-box' }}>
                    <CheckCircle2 size={64} color="#22c55e" style={{ margin: '0 auto 16px auto' }} />
                    <h4 style={{ fontWeight: 'bold', color: '#14532d', fontSize: '1.5rem', marginBottom: '8px' }}>Solicitação Enviada!</h4>
                    <p style={{ color: '#15803d', fontSize: '1rem' }}>A empresa recebeu seu pedido e entrará em contato em breve.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {error && (
                        <div style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', gap: '8px', border: '1px solid #fecaca' }}>
                            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <p style={{ margin: 0 }}>{error}</p>
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Seu Nome *</label>
                        <input 
                            type="text" 
                            name="customer_name" 
                            required 
                            style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.875rem', backgroundColor: '#f9fafb', color: '#111827', boxSizing: 'border-box' }}
                            placeholder="Como devemos chamá-lo?"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Seu WhatsApp *</label>
                            <input 
                                type="tel" 
                                name="customer_phone" 
                                required 
                                style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.875rem', backgroundColor: '#f9fafb', color: '#111827', boxSizing: 'border-box' }}
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>E-mail (Opcional)</label>
                            <input 
                                type="email" 
                                name="customer_email" 
                                style={{ width: '100%', height: '48px', padding: '0 16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.875rem', backgroundColor: '#f9fafb', color: '#111827', boxSizing: 'border-box' }}
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>O que você precisa? *</label>
                        <textarea 
                            name="message" 
                            required 
                            rows={3}
                            style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.875rem', backgroundColor: '#f9fafb', color: '#111827', resize: 'none', boxSizing: 'border-box' }}
                            placeholder="Descreva detalhadamente o serviço ou projeto..."
                        ></textarea>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
                        <button 
                            type="button" 
                            onClick={() => setIsOpen(false)}
                            style={{ flex: 1, height: '48px', borderRadius: '12px', fontWeight: 600, color: '#4b5563', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            disabled={loading}
                            style={{ flex: 2, height: '48px', backgroundColor: '#967764', color: '#fff', borderRadius: '12px', fontWeight: 'bold', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? 'Enviando...' : (
                                <>
                                    <Send size={16} />
                                    Enviar Solicitação
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
