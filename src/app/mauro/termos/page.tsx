import React from 'react';
import InternalPageTemplate from '@/components/mauro/InternalPageTemplate';

export default function TermosPage() {
    return (
        <InternalPageTemplate 
            title="Termos de Uso" 
            subtitle="Benedetti Specialty Coffee"
        >
            <div className="flex flex-col gap-4 text-gray-600">
                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">1. Termos</h3>
                <p>Ao acessar ao site Mauro Benedetti, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">2. Uso de Licença</h3>
                <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Mauro Benedetti , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
                <ul className="list-disc pl-6 my-4 text-gray-600">
                    <li>modificar ou copiar os materiais;</li>
                    <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                    <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Mauro Benedetti;</li>
                    <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                    <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>
                <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Mauro Benedetti a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrí´nico ou impresso.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">3. Isenção de responsabilidade</h3>
                <p>Os materiais no site da Mauro Benedetti são fornecidos 'como estão'. Mauro Benedetti não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
                <p>Além disso, o Mauro Benedetti não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">4. Limitações</h3>
                <p>Em nenhum caso o Mauro Benedetti ou seus fornecedores serão responsáveis por quaisquer danos (inclindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Mauro Benedetti, mesmo que Mauro Benedetti ou um representante autorizado da Mauro Benedetti tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqí¼entes ou incidentais, essas limitações podem não se aplicar a você.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">5. Precisão dos materiais</h3>
                <p>Os materiais exibidos no site da Mauro Benedetti podem incluir erros técnicos, tipográficos ou fotográficos. Mauro Benedetti não garante que qualquer material em seu site seja preciso, completo ou atual. Mauro Benedetti pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Mauro Benedetti não se compromete a atualizar os materiais.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">6. Links</h3>
                <p>O Mauro Benedetti não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Mauro Benedetti do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">Modificações</h3>
                <p>O Mauro Benedetti pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

                <h3 className="text-2xl font-serif text-mauro-dark mt-8 mb-2">Lei aplicável</h3>
                <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Mauro Benedetti e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
            </div>
        </InternalPageTemplate>
    );
}

