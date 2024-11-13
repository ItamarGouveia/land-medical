import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

// components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-[#7FBEBD] text-white py-6">
            <div className="max-w-screen-xl mx-auto text-center">

                <div className="grid grid-cols-1 md:grid-cols-2 mb-5">

                    <div className="flex flex-row justify-center md:justify-start mb-5">

                        <div className=" h-10 w-10 bg-[#7DBEBC] rounded-full flex items-center justify-center text-white">
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
                    <Link href="https://api.whatsapp.com/send?phone=5511960385169&text=Ol%C3%A1%20Time%20Balance!!%20Gostaria%20de%20mais%20Informa%C3%A7%C3%B5es%20Sobre%20Fisioterapia%20Especializada%20para%20Paralisia+Facial!%20"
                        target="_blank" >

                        <div className="text-white flex flex-row  justify-center md:justify-end items-center">

                            <FaWhatsapp size={45} className=" md:block" />

                            <div className=" ml-2  md:block">
                                <div className="text-sm flex justify-end" >
                                    Entre em contato
                                </div>
                                <div className="font-bold text-lg">
                                    (11) 96038-5169
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>



                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className=" flex  flex-col justify-center md:justify-start md:text-left">
                        <p>&copy; 2024 BALANCE FISIOTERAPIA. Todos os direitos reservados.</p>
                    </div>
                    <div className=" flex  flex-col justify-center md:justify-end md:text-right">
                        <p className="mt-2 ">BALANCE FISIOTERAPIA, EDUCACAO, SAUDE E BEM ESTAR LTDA | RE 12577 </p>
                        <p className="">CNPJ: 35.120.736/0001-88</p>
                    </div>
                </div>
            </div>


        </footer >
    );
};

export default Footer;