"use server";

export async function submitLeadAction(formData: FormData) {
    const name = formData.get("customer_name") as string;
    const email = formData.get("customer_email") as string;
    const phone = formData.get("customer_phone") as string;
    const message = formData.get("message") as string;
    const templateType = formData.get("template_type") as string;
    const customService = formData.get("service") as string;

    const data = {
        name,
        email: email || "sem-email@cliente.com",
        phone,
        service: customService ? `${templateType.toUpperCase()} - ${customService}` : `Template: ${templateType.toUpperCase()}`,
        message
    };

    try {
        const response = await fetch("https://plin-crm.vercel.app/api/leads/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            return { error: errData.message || `Erro do servidor CRM: ${response.status}` };
        }

        return { success: true };
    } catch (error: any) {
        return { error: `Erro de conexão interna: ${error.message}` };
    }
}
