'use server';

import { Resend } from 'resend';

// The API Key will be injected from the .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitMauroLeadAction(formData: FormData) {
    const name = formData.get("customer_name") as string;
    const phone = formData.get("customer_phone") as string;
    const email = formData.get("customer_email") as string;
    const details = formData.get("message") as string;

    if (!name || !phone) {
        return { error: "Nome e telefone são obrigatórios." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Site Mauro Benedetti <contato@okcomunica.com.br>',
            to: ['mrrbenedetti@gmail.com'],
            subject: `[NOVO CONTATO B2B] - ${name}`,
            html: `
                <div style="font-family: sans-serif; color: #333; max-w-xl; margin: 0 auto; border: 1px solid #ddd; padding: 20px;">
                    <h2 style="color: #d4af37;">Novo Contato - Reserva de Lote B2B</h2>
                    <p>Você recebeu uma nova mensagem através da Landing Page:</p>
                    <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Nome/Empresa:</strong> ${name}</p>
                    <p><strong>WhatsApp:</strong> ${phone}</p>
                    <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
                    <p><strong>Detalhes:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${details || 'Sem detalhes'}</p>
                    <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #777;">Enviado via OK Comunica Resend Integration.</p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { error: `Erro ao enviar e-mail: ${error.message}` };
        }

        return { success: true };
    } catch (err: any) {
        console.error('Server Action Error:', err);
        return { error: `Erro interno no servidor: ${err.message}` };
    }
}
