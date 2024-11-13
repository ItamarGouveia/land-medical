import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";



// components/HeroSection.tsx
const HeroSection = () => {
    return (
        <section className="h-[900px] bg-cover bg-center text-center flex   justify-between
         bg-blue-100 border-b-8 border-[#E2A4A8]" style={{ backgroundImage: 'url(/banner-01.jpg)' }}>


            <div className="  p-0 w-full max-w-screen-xl mx-auto mt-20" >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex  max-w-[600px] text-4xl md:text-5xl lg:text-7xl text-left font-black flex-col leading-snug text-[#7DBEBC] ml-5 md:leading-snug lg:leading-snug">
                        Fisioterapia para Paralisia Cerebral  Conquiste Sua <span className="text-[#E2A4A8]">Qualidade de Vida.</span>
                        <div className="flex flex-row  text-1xl mt-20 gap-x-5">

                            <div className="h-10 w-10 bg-[#7DBEBC] rounded-full flex items-center justify-center text-white">
                                <FaInstagram size={30} />
                            </div>
                            <div className="h-10 w-10 bg-[#7DBEBC] rounded-full flex items-center justify-center text-white">
                                <FaFacebook size={30} />
                            </div>
                            <div className="h-10 w-10 bg-[#7DBEBC] rounded-full flex items-center justify-center text-white">
                                <FaYoutube size={30} />
                            </div>
                            <div className="h-10 w-10 bg-[#7DBEBC] rounded-full flex items-center justify-center text-white">
                                <FaTiktok size={30} />
                            </div>

                        </div>


                    </div>






                </div>


            </div>

        </section>
    );
};

export default HeroSection;