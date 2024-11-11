import Image from "next/image";

// components/HeroSection.tsx
const HeroSection = () => {
    return (
        <section className="h-[700px] bg-cover bg-center text-center flex items-center justify-center bg-blue-100" style={{ backgroundImage: 'url(/banner-01.jpg)' }}>


            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1300px]">
                <div className="w-full max-w-[700px] mx-auto p-4 text-7xl text-left font-bold leading-tight" >


                    Fisioterapia para Paralisia Cerebral - Conquiste Sua<span className="text-[#80bf63]"> Qualidade de Vida.</span>
                </div>
                <div>

                </div>

            </div>



        </section>
    );
};

export default HeroSection;