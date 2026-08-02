"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, CheckCircle2, ChevronLeft, Verified, Eye } from "lucide-react";

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
};

export default function BookingWidgetDemo({ services, isClaimed = true, title = "Este negócio" }: BookingWidgetDemoProps) {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isDemoMode, setIsDemoMode] = useState(false);
    
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleConfirmBooking = () => {
        if (!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(4);
        }, 1200);
    };

    return (
        <div 
            className="font-sans shadow-xl"
            style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #fce7f3', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '500px', 
                position: 'relative' 
            }}
        >
            {!isClaimed && !isDemoMode && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)', padding: '16px' }}>
                    <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '1px solid #f3f4f6', textAlign: 'center', maxWidth: '24rem', width: '100%', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#facc15' }}></div>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#fef9c3', color: '#ca8a04', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                            <Verified size={24} />
                        </div>
                        <h4 style={{ fontWeight: 'bold', color: '#111827', fontSize: '1.125rem', marginBottom: '8px' }}>Agenda Bloqueada</h4>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '24px' }}>Este profissional ainda não ativou a agenda inteligente na plataforma.</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button onClick={() => setIsDemoMode(true)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.875rem', color: '#fff', backgroundColor: '#FF0054', fontWeight: 'bold', padding: '12px', borderRadius: '12px', cursor: 'pointer', border: 'none', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                <Eye size={16} /> Testar Demonstração
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <div style={{ background: 'linear-gradient(to right, #db2777, #FF0054)', padding: '16px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', margin: 0 }}>Agendamento Online</h3>
                    <p style={{ color: '#fbcfe8', fontSize: '0.75rem', margin: 0 }}>{title}</p>
                </div>
                {step > 1 && step < 4 && (
                    <button onClick={() => setStep((prev) => prev - 1 as any)} style={{ padding: '4px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ChevronLeft size={20} />
                    </button>
                )}
            </div>

            <div style={{ padding: '24px', flex: 1, backgroundColor: '#f9fafb', overflowY: 'auto' }}>
                {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h4 style={{ color: '#111827', fontWeight: 500, margin: '0 0 16px 0' }}>Escolha o serviço:</h4>
                        {services.map((svc) => (
                            <button
                                key={svc.id}
                                onClick={() => { setSelectedService(svc); setStep(2); }}
                                style={{ width: '100%', textAlign: 'left', backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: '12px' }}
                            >
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '4px' }}>{svc.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12}/> {svc.duration} min</div>
                                </div>
                                <div style={{ fontWeight: 'bold', color: '#111827' }}>
                                    {typeof svc.price === 'number' ? `R$ ${svc.price.toFixed(2).replace('.', ',')}` : svc.price}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {step === 2 && selectedService && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <h4 style={{ color: '#111827', fontWeight: 500, margin: '0 0 12px 0' }}>Escolha o dia:</h4>
                            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                                {availableDays.map(day => (
                                    <button 
                                        key={day.full}
                                        onClick={() => setSelectedDate(day.full)}
                                        style={{ flexShrink: 0, padding: '12px 16px', borderRadius: '12px', border: selectedDate === day.full ? '1px solid #ec4899' : '1px solid #e5e7eb', backgroundColor: selectedDate === day.full ? '#fdf2f8' : '#fff', color: selectedDate === day.full ? '#be185d' : '#4b5563', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                    >
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '4px' }}>{day.label.split(',')[0]}</div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{day.label.split(' ')[1]}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                            <div>
                                <h4 style={{ color: '#111827', fontWeight: 500, margin: '0 0 12px 0' }}>Escolha o horário:</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                    {availableTimes.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => { setSelectedTime(time); setStep(3); }}
                                            style={{ padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fff', color: '#1f2937', fontWeight: 500, cursor: 'pointer' }}
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
                        <div style={{ backgroundColor: '#fdf2f8', border: '1px solid #fce7f3', padding: '12px', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.75rem', color: '#db2777', fontWeight: 500, marginBottom: '4px' }}>Resumo</div>
                            <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '0.875rem', marginBottom: '2px' }}>{selectedService?.name}</div>
                            <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>{selectedDate.split('-').reverse().join('/')} às {selectedTime}</div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>Seu Nome</label>
                            <div style={{ position: 'relative' }}>
                                <User size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                <input 
                                    type="text" 
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Como quer ser chamado?"
                                    style={{ width: '100%', padding: '12px 16px 12px 40px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none', color: '#111827', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>Seu WhatsApp</label>
                            <div style={{ position: 'relative' }}>
                                <Phone size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                <input 
                                    type="tel" 
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    style={{ width: '100%', padding: '12px 16px 12px 40px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none', color: '#111827', boxSizing: 'border-box' }}
                                />
                            </div>
                        </div>

                        <button 
                            onClick={handleConfirmBooking}
                            disabled={!clientName || !clientPhone || isSubmitting}
                            style={{ 
                                width: '100%', padding: '16px', background: 'linear-gradient(to right, #db2777, #FF0054)', color: '#fff', fontWeight: 'bold', borderRadius: '12px', border: 'none', cursor: (!clientName || !clientPhone || isSubmitting) ? 'not-allowed' : 'pointer', opacity: (!clientName || !clientPhone || isSubmitting) ? 0.5 : 1, marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'
                            }}
                        >
                            {isSubmitting ? 'Processando...' : 'Confirmar Agendamento'}
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                        <div style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                            <CheckCircle2 size={40} color="#22c55e" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Horário Confirmado!</h3>
                        <p style={{ color: '#4b5563', marginBottom: '24px' }}>Você receberá um lembrete no WhatsApp horas antes do seu horário.</p>
                        
                        <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '16px', borderRadius: '12px', display: 'inline-block', textAlign: 'left', marginBottom: '24px', width: '100%', boxSizing: 'border-box' }}>
                            <div style={{ fontWeight: 'bold', color: '#111827' }}>{selectedService?.name}</div>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '4px', display: 'flex', gap: '16px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={16}/> {selectedDate.split('-').reverse().join('/')}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={16}/> {selectedTime}</span>
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
                            style={{ color: '#db2777', fontWeight: 500, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Fazer novo agendamento
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
