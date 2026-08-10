"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, CheckCircle2, ChevronLeft, Verified, Eye, AlertCircle } from "lucide-react";
import { submitLeadAction } from "@/actions/submitLead";

type Service = {
    id: string;
    name: string;
    price: number | string;
    duration: number;
};

type BookingWidgetDemoProps = {
    services: Service[];
    isClaimed?: boolean;
    title?: string;
    templateType?: string;
    niche?: string;
};

export default function BookingWidgetDemo({ services, isClaimed = true, title = "AURA", templateType = "aura", niche = "" }: BookingWidgetDemoProps) {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isDemoMode, setIsDemoMode] = useState(false);
    
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const getNextDays = () => {
        const days = [];
        for(let i=1; i<=3; i++) {
            const d = new Date();
            d.setDate(d.getDate() + i);
            days.push({
                full: d.toISOString().split('T')[0],
                label: d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })
            });
        }
        return days;
    };
    const availableDays = getNextDays();
    const availableTimes = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"];

    const handleConfirmBooking = async () => {
        if (!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone) return;
        setIsSubmitting(true);
        setError("");

        const fullSource = niche ? `${templateType} (${niche})` : templateType;
        const messageBody = `Data Escolhida: ${selectedDate.split('-').reverse().join('/')}\nHorário Escolhido: ${selectedTime}\nDuração Estimada: ${selectedService.duration} minutos`;

        const formData = new FormData();
        formData.append("customer_name", clientName);
        formData.append("customer_email", ""); // E-mail é opcional no agendamento expresso
        formData.append("customer_phone", clientPhone);
        formData.append("template_type", fullSource);
        formData.append("service", `Agendamento: ${selectedService.name}`);
        formData.append("message", messageBody);

        const result = await submitLeadAction(formData);

        setIsSubmitting(false);

        if (result.error) {
            setError(result.error);
        } else if (result.success) {
            setStep(4);
        }
    };

    const goldColor = "#C5A880";
    const darkBg = "#111111";

    return (
        <div 
            className="font-sans shadow-2xl"
            style={{ 
                backgroundColor: '#ffffff', 
                border: `1px solid ${goldColor}`, 
                borderRadius: '16px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '500px', 
                position: 'relative' 
            }}
        >
            {!isClaimed && !isDemoMode && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)', padding: '16px' }}>
                    <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '1px solid #f3f4f6', textAlign: 'center', maxWidth: '24rem', width: '100%', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#facc15' }}></div>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#fef9c3', color: '#ca8a04', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                            <Verified size={24} />
                        </div>
                        <h4 style={{ fontWeight: 'bold', color: '#111827', fontSize: '1.125rem', marginBottom: '8px' }}>Agenda Bloqueada</h4>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '24px' }}>Este profissional ainda não ativou a agenda inteligente na plataforma.</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button onClick={() => setIsDemoMode(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.875rem', color: '#fff', backgroundColor: darkBg, fontWeight: 'bold', padding: '12px', borderRadius: '12px', cursor: 'pointer', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                <Eye size={16} /> Testar Demonstração
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <div style={{ background: `linear-gradient(to right, ${darkBg}, #000)`, padding: '20px 16px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, borderBottom: `2px solid ${goldColor}` }}>
                <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', margin: 0, color: goldColor, textTransform: 'uppercase', letterSpacing: '1px' }}>Agendamento Online</h3>
                    <p style={{ color: '#999', fontSize: '0.75rem', margin: '4px 0 0 0' }}>{title}</p>
                </div>
                {step > 1 && step < 4 && (
                    <button onClick={() => setStep((prev) => prev - 1 as any)} style={{ padding: '4px', background: 'transparent', border: 'none', color: goldColor, cursor: 'pointer', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ChevronLeft size={24} />
                    </button>
                )}
            </div>

            <div style={{ padding: '24px', flex: 1, backgroundColor: '#FDFBF7', overflowY: 'auto' }}>
                {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h4 style={{ color: '#111827', fontWeight: 600, margin: '0 0 16px 0', fontFamily: 'serif', fontSize: '1.25rem' }}>Escolha o serviço:</h4>
                        {services.map((svc) => (
                            <button
                                key={svc.id}
                                onClick={() => { setSelectedService(svc); setStep(2); }}
                                style={{ width: '100%', textAlign: 'left', backgroundColor: '#fff', border: '1px solid #eaeaea', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: '12px', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                                onMouseOver={(e) => e.currentTarget.style.borderColor = goldColor}
                                onMouseOut={(e) => e.currentTarget.style.borderColor = '#eaeaea'}
                            >
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '4px', fontSize: '1.05rem' }}>{svc.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12}/> {svc.duration} min</div>
                                </div>
                                <div style={{ fontWeight: 'bold', color: goldColor }}>
                                    {typeof svc.price === 'number' ? `R$ ${svc.price.toFixed(2).replace('.', ',')}` : svc.price}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {step === 2 && selectedService && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <h4 style={{ color: '#111827', fontWeight: 600, margin: '0 0 12px 0', fontFamily: 'serif', fontSize: '1.25rem' }}>Escolha o dia:</h4>
                            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                                {availableDays.map(day => (
                                    <button 
                                        key={day.full}
                                        onClick={() => setSelectedDate(day.full)}
                                        style={{ flexShrink: 0, padding: '12px 16px', borderRadius: '12px', border: selectedDate === day.full ? `2px solid ${goldColor}` : '1px solid #e5e7eb', backgroundColor: selectedDate === day.full ? '#fffbf2' : '#fff', color: selectedDate === day.full ? '#000' : '#4b5563', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                    >
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px', fontWeight: selectedDate === day.full ? 'bold' : 'normal', color: selectedDate === day.full ? goldColor : '#6b7280' }}>{day.label.split(',')[0]}</div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{day.label.split(' ')[1]}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                            <div>
                                <h4 style={{ color: '#111827', fontWeight: 600, margin: '0 0 12px 0', fontFamily: 'serif', fontSize: '1.25rem' }}>Escolha o horário:</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                    {availableTimes.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => { setSelectedTime(time); setStep(3); }}
                                            style={{ padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fff', color: '#1f2937', fontWeight: 500, cursor: 'pointer', transition: 'border 0.2s ease' }}
                                            onMouseOver={(e) => e.currentTarget.style.borderColor = goldColor}
                                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {step === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        
                        {error && (
                            <div style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', gap: '8px', border: '1px solid #fecaca' }}>
                                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <p style={{ margin: 0 }}>{error}</p>
                            </div>
                        )}

                        <div style={{ backgroundColor: '#fffbf2', border: `1px solid ${goldColor}`, padding: '16px', borderRadius: '12px' }}>
                            <div style={{ fontSize: '0.75rem', color: goldColor, fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resumo do Agendamento</div>
                            <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '1rem', marginBottom: '4px' }}>{selectedService?.name}</div>
                            <div style={{ fontSize: '0.85rem', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Calendar size={14} color={goldColor}/> {selectedDate.split('-').reverse().join('/')} 
                                <span style={{ color: '#ccc' }}>|</span> 
                                <Clock size={14} color={goldColor}/> {selectedTime}
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Seu Nome</label>
                            <div style={{ position: 'relative' }}>
                                <User size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: goldColor }} />
                                <input 
                                    type="text" 
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Como quer ser chamado?"
                                    style={{ width: '100%', padding: '14px 16px 14px 40px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none', color: '#111827', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Seu WhatsApp</label>
                            <div style={{ position: 'relative' }}>
                                <Phone size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: goldColor }} />
                                <input 
                                    type="tel" 
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    style={{ width: '100%', padding: '14px 16px 14px 40px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none', color: '#111827', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>

                        <button 
                            onClick={handleConfirmBooking}
                            disabled={!clientName || !clientPhone || isSubmitting}
                            style={{ 
                                width: '100%', padding: '16px', backgroundColor: darkBg, color: goldColor, fontWeight: 'bold', borderRadius: '12px', border: `1px solid ${darkBg}`, cursor: (!clientName || !clientPhone || isSubmitting) ? 'not-allowed' : 'pointer', opacity: (!clientName || !clientPhone || isSubmitting) ? 0.7 : 1, marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '1px'
                            }}
                        >
                            {isSubmitting ? 'Processando...' : 'Confirmar Agendamento'}
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                        <div style={{ width: '80px', height: '80px', backgroundColor: '#fefcf8', border: `2px solid ${goldColor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                            <CheckCircle2 size={40} color={goldColor} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px', fontFamily: 'serif' }}>Horário Confirmado!</h3>
                        <p style={{ color: '#4b5563', marginBottom: '24px' }}>Você receberá um lembrete no WhatsApp horas antes do seu horário.</p>
                        
                        <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', display: 'inline-block', textAlign: 'left', marginBottom: '24px', width: '100%', boxSizing: 'border-box', borderTop: `4px solid ${goldColor}` }}>
                            <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '1.1rem' }}>{selectedService?.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '8px', display: 'flex', gap: '16px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} color={goldColor}/> {selectedDate.split('-').reverse().join('/')}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} color={goldColor}/> {selectedTime}</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => {
                                setStep(1);
                                setSelectedService(null);
                                setSelectedDate("");
                                setSelectedTime("");
                                setClientName("");
                                setClientPhone("");
                            }}
                            style={{ color: '#111', fontWeight: 600, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Fazer novo agendamento
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
