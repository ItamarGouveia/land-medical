import Image from "next/image";

// components/TeamSection.tsx
const TeamSection = () => {
    return (
        <section id="team" className="py-20 bg-white">
            <h2 className="text-6xl font-bold text-center mb-10">Nossa Equipe</h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                    <Image src="/med1.png" alt="Dr. João" className="w-40 h-40 rounded-full mx-auto mb-4" width={100} height={100} />
                    <h3 className="text-2xl font-semibold">Dr. João Silva</h3>
                    <p>Pediatra especializado em neonatologia.</p>
                </div>
                <div className="text-center">
                    <Image src="/med2.jpg" alt="Dra. Maria" className="w-40 h-40 rounded-full mx-auto mb-4" width={100} height={100} />
                    <h3 className="text-2xl font-semibold">Dra. Maria Oliveira</h3>
                    <p>Pediatra com foco em acompanhamento de desenvolvimento infantil.</p>
                </div>
                <div className="text-center">
                    <Image src="/med3.jpg" alt="Dra. Marcos" className="w-40 h-40 rounded-full mx-auto mb-4" width={100} height={100} />
                    <h3 className="text-2xl font-semibold">Dra. Marcos Sampaio</h3>
                    <p>Pediatra com foco em acompanhamento de desenvolvimento infantil.</p>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;