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
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // 1: Select Service, 2: Select Date/Time, 3: User Info, 4: Success
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isDemoMode, setIsDemoMode] = useState(false);
    
    // Form data
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Gerar datas (Próximos 3 dias úteis mockados para a demo)
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
        
        // Simular o tempo de resposta do servidor na degustação
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(4);
        }, 1200);
    };

    return (
        <div className="bg-white border border-pink-100 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[500px] relative font-sans">
            {!isClaimed && !isDemoMode && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm p-4">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 text-center max-w-sm w-full mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Verified className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Agenda Bloqueada</h4>
                        <p className="text-sm text-gray-500 mb-6">Este profissional ainda não ativou a agenda inteligente na plataforma.</p>
                        
                        <div className="flex flex-col gap-3">
                            <button onClick={() => setIsDemoMode(true)} className="flex items-center justify-center gap-2 text-sm text-white bg-[#FF0054] hover:bg-pink-600 font-bold py-3 rounded-xl transition shadow-sm">
                                <Eye className="w-4 h-4" /> Testar Demonstração
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-gradient-to-r from-pink-600 to-[#FF0054] p-4 text-white flex items-center justify-between shrink-0">
                <div>
                    <h3 className="font-bold text-lg">Agendamento Online</h3>
                    <p className="text-pink-100 text-xs">{title}</p>
                </div>
                {step > 1 && step < 4 && (
                    <button onClick={() => setStep((prev) => prev - 1 as any)} className="p-1 hover:bg-white/20 rounded-full transition">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                )}
            </div>

            <div className="p-6 flex-1 bg-gray-50 overflow-y-auto">
                {step === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h4 className="text-gray-900 font-medium mb-4">Escolha o serviço:</h4>
                        {services.map((svc) => (
                            <button
                                key={svc.id}
                                onClick={() => { setSelectedService(svc); setStep(2); }}
                                className="w-full text-left bg-white border border-gray-200 p-4 rounded-xl hover:border-pink-400 hover:shadow-md transition-all flex justify-between items-center group"
                            >
                                <div>
                                    <div className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">{svc.name}</div>
                                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Clock className="w-3 h-3"/> {svc.duration} min</div>
                                </div>
                                <div className="font-bold text-gray-900">
                                    {typeof svc.price === 'number' ? `R$ ${svc.price.toFixed(2).replace('.', ',')}` : svc.price}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {step === 2 && selectedService && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
                        <div>
                            <h4 className="text-gray-900 font-medium mb-3">Escolha o dia:</h4>
                            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                                {availableDays.map(day => (
                                    <button 
                                        key={day.full}
                                        onClick={() => setSelectedDate(day.full)}
                                        className={`shrink-0 px-4 py-3 rounded-xl border transition-colors ${selectedDate === day.full ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-200 bg-white text-gray-600 hover:border-pink-200'}`}
                                    >
                                        <div className="text-xs uppercase">{day.label.split(',')[0]}</div>
                                        <div className="font-bold text-lg">{day.label.split(' ')[1]}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h4 className="text-gray-900 font-medium mb-3">Escolha o horário:</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {availableTimes.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => { setSelectedTime(time); setStep(3); }}
                                            className="px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-800 font-medium hover:border-pink-500 hover:bg-pink-50 transition-colors"
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
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-2 duration-300">
                        <div className="bg-pink-50 border border-pink-100 p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <div className="text-xs text-pink-600 font-medium">Resumo</div>
                                <div className="font-bold text-gray-900 text-sm">{selectedService?.name}</div>
                                <div className="text-xs text-gray-600">{selectedDate.split('-').reverse().join('/')} às {selectedTime}</div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                            <div className="relative">
                                <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Como quer ser chamado?"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Seu WhatsApp</label>
                            <div className="relative">
                                <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="tel" 
                                    value={clientPhone}
                                    onChange={(e) => setClientPhone(e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none text-gray-900"
                                />
                            </div>
                        </div>

                        <button 
                            onClick={handleConfirmBooking}
                            disabled={!clientName || !clientPhone || isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-pink-600 to-[#FF0054] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                'Confirmar Agendamento'
                            )}
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-8 animate-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Horário Confirmado!</h3>
                        <p className="text-gray-600 mb-6">Você receberá um lembrete no WhatsApp horas antes do seu horário.</p>
                        
                        <div className="bg-white border border-gray-200 p-4 rounded-xl inline-block text-left mb-6 w-full">
                            <div className="font-bold text-gray-900">{selectedService?.name}</div>
                            <div className="text-sm text-gray-500 mt-1 flex gap-4">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {selectedDate.split('-').reverse().join('/')}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {selectedTime}</span>
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
                            className="text-pink-600 font-medium hover:underline"
                        >
                            Fazer novo agendamento
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
