// components/ServicesSection.tsx
const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Serviços</h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">O que é a Paralisia Cerebral?</h3>
                    <p>A Paralisia Cerebral é um distúrbio neurológico que afeta o desenvolvimento
                        motor e a coordenação muscular. Através da Fisioterapia, é possível
                        melhorar a mobilidade, força e coordenação de crianças com Paralisia
                        Cerebral. Essa condição surge devido a uma lesão no cérebro imaturo,
                        geralmente ocorrida antes, durante ou logo após o nascimento, e pode
                        impactar também o desenvolvimento cognitivo, sensorial e social.
                        A Fisioterapia desempenha um papel crucial no tratamento da Paralisia Cerebral,
                        promovendo o progresso físico e motor.</p>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Possíveis Causas da Paralisia Cerebral</h3>
                    <p>A Paralisia Cerebral é causada por danos ao cérebro em desenvolvimento e a Fisioterapia é essencial para minimizar as limitações motoras. As causas mais comuns incluem:

                        Complicações durante a gravidez: Infecções maternas ou exposição a toxinas podem prejudicar o desenvolvimento cerebral do feto, e a Fisioterapia ajuda a tratar os impactos motores.
                        Complicações no parto: A falta de oxigênio ou traumas no nascimento podem causar lesões cerebrais que levam à Paralisia Cerebral, e a Fisioterapia é vital para a reabilitação.
                        Infecções Neonatais: Infecções nos primeiros meses de vida podem afetar o cérebro do bebê, e a Fisioterapia oferece suporte essencial para crianças com Paralisia Cerebral.
                        Hemorragias cerebrais: Sangramentos no cérebro de recém-nascidos podem levar ao desenvolvimento de Paralisia Cerebral, e a Fisioterapia ajuda a melhorar o controle motor e a mobilidade.</p>
                </div>
                <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Tipos de Paralisia Cerebral</h3>
                    <p>A Paralisia Cerebral se apresenta de diversas formas, e a Fisioterapia adapta o tratamento a cada uma delas:

                        Paralisia Cerebral Espástica: A forma mais comum, caracterizada por rigidez muscular e movimentos involuntários. A Fisioterapia trabalha para reduzir a rigidez e melhorar a mobilidade.
                        Paralisia Cerebral Atetóide: Movimentos descoordenados e involuntários são comuns. A Fisioterapia auxilia no controle motor e na coordenação fina.
                        Paralisia Cerebral Atáxica: Afeta o equilíbrio e a coordenação motora. A Fisioterapia ajuda a melhorar a postura e a estabilidade.
                        Paralisia Cerebral Mista: Combina sintomas dos diferentes tipos, e a Fisioterapia oferece um plano abrangente para lidar com os desafios motores.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;