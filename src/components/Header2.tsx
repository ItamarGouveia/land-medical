'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-[#E2A4A8] border-b-4 border-[#F2C4AF]">

            <nav className="p-4 w-full max-w-screen-xl mx-auto ">
                {/* Logo e links para dispositivos grandes */}
                <div className="flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                        <Link href="/">
                            <Image src='/logo.svg' alt='logo' width={227} height={66} />
                        </Link>
                    </div>

                    {/* Menu para dispositivos grandes */}
                    <div className="hidden md:flex space-x-4 text-white font-bold">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/cuidados">
                            Cuidados
                        </Link>
                        <Link href="/pessoas">
                            Pessoas
                        </Link>
                    </div>

                    <Link href="https://api.whatsapp.com/send?phone=5511960385169&text=Ol%C3%A1%20Time%20Balance!!%20Gostaria%20de%20mais%20Informa%C3%A7%C3%B5es%20Sobre%20Fisioterapia%20Especializada%20para%20Paralisia+Facial!%20"
                        target="_blank" className=
                        " p-3 rounded-lg hover:bg-[#e88b8f]">

                        <div className="text-white flex flex-row justify-end items-center">

                            <FaWhatsapp size={45} className="hidden md:block" />

                            <div className=" ml-2 hidden md:block">
                                <div className="text-sm flex justify-end" >
                                    Entre em contato
                                </div>
                                <div className="font-bold text-lg">
                                    (11) 96038-5169
                                </div>
                            </div>

                        </div>
                    </Link>

                    {/* Botão de menu hambúrguer para dispositivos pequenos */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menu hambúrguer visível em telas pequenas */}
                {
                    isOpen && (
                        <div className="md:hidden bg-blue-600 mt-2 space-y-2">
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/cuidados">
                                Cuidado
                            </Link>
                            <Link href="/pessoas">
                                Pessoas
                            </Link>
                        </div>
                    )
                }
            </nav >
        </div >
    );
};

export default Navbar;