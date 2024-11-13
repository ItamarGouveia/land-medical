import Image from "next/image";

import { FaRegCheckCircle } from "react-icons/fa";

// components/AboutSection.tsx
const AboutSection = () => {
    return (
        <div className="w-full mt-14 mb-20">

            <div className="  p-4 w-full max-w-screen-xl mx-auto " >

                <div className="grid grid-cols-1 md:grid-cols-2 ">

                    <div className="flex">

                        <Image src='/about2.jpg' alt='about' height={770} width={448}
                            className="rounded-2xl " />

                    </div>

                    <div className="text-1xl ">
                        <h1 className="text-6xl mb-8 text-[#7DBEBC] font-bold">Quem Somos</h1>
                        A Balance Fisioterapia Moema é uma clínica especializada em tratamentos de fisioterapia para uma ampla variedade de condições, com um foco particular no atendimento de pessoas com paralisia cerebral. Localizada no bairro de Moema, em São Paulo, a clínica combina experiência, tecnologia e uma abordagem humanizada para promover a reabilitação e o bem-estar dos seus pacientes.

                        Com uma equipe altamente capacitada e comprometida, a Balance Fisioterapia Moema oferece tratamentos personalizados, visando melhorar a qualidade de vida dos pacientes com paralisia cerebral e outras condições neurológicas. A clínica utiliza técnicas avançadas de fisioterapia, incluindo fisioterapia motora, terapia de integração sensorial, e abordagens terapêuticas inovadoras que auxiliam no desenvolvimento motor, funcional e cognitivo.

                        Além de tratamentos individuais, a Balance Fisioterapia Moema também oferece orientação e suporte contínuo para as famílias, garantindo um acompanhamento integral para o paciente e proporcionando um ambiente de cuidados profissionais e acolhedores.
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-3" >
                            <div >
                                <div className="flex flex-row items-center mb-3">
                                    <FaRegCheckCircle size={30} className="text-[#E2A4A8] font-bold mr-2" />
                                    Clínica especializada
                                </div>

                                <div className="flex flex-row items-center mb-3">
                                    <FaRegCheckCircle size={30} className="text-[#E2A4A8] font-bold mr-2" />
                                    Equipe capacitada

                                </div>

                                <div className="flex flex-row items-center mb-3">
                                    <FaRegCheckCircle size={30} className="text-[#E2A4A8] font-bold mr-2" />
                                    Tratamentos personalizados
                                </div>
                                <div className="flex flex-row items-center mb-3">
                                    <FaRegCheckCircle size={30} className="text-[#E2A4A8] font-bold mr-2" />
                                    Bem-estar
                                </div>
                            </div>



                            <div>
                                <Image src='/med5.jpg' alt='med' width={300} height={150} className="rounded-xl" />
                            </div>

                        </div>

                    </div>


                </div>

            </div>



        </div>

    );
};

export default AboutSection;