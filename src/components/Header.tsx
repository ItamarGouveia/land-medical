'use client'
import Image from 'next/image';
import Link from 'next/link';

import { useState } from "react";





const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#F6FAFF] p-4 h-[100px]">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Image src='/logo.png' alt='logo' width={195} height={60} quality={1.0} />
                </div>

                {/* Menu de Navegação */}
                <nav className="relative">
                    {/* Menu para telas grandes */}
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#about">Sobre</Link></li>
                        <li><Link href="#services">Serviços</Link></li>
                        <li><Link href="#team">Equipe</Link></li>
                        <li><Link href="#contact">Contato</Link></li>
                    </ul>

                    {/* Menu de hambúrguer para telas pequenas */}
                    <div className="md:hidden">
                        <button
                            className="text-2xl"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? "X" : "☰"}
                        </button>

                        {isMobileMenuOpen && (
                            <ul className="absolute right-0 top-[60px] bg-white shadow-lg w-full p-4 space-y-4 text-center">
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#about">Sobre</Link></li>
                                <li><Link href="#services">Serviços</Link></li>
                                <li><Link href="#team">Equipe</Link></li>
                                <li><Link href="#contact">Contato</Link></li>
                            </ul>
                        )}
                    </div>
                </nav>

                {/* Botão "Agendar Consulta", escondido em telas pequenas */}
                <Link href="https://api.whatsapp.com/send?phone=5511960385169&text=Ol%C3%A1%20Time%20Balance!!%20Gostaria%20de%20mais%20Informa%C3%A7%C3%B5es%20Sobre%20Fisioterapia%20Especializada%20para%20Paralisia+Facial!%20"
                    target="_blank" className="bg-[#80BF63] text-white py-2 px-4 rounded-lg hidden sm:block font-bold">
                    Agendar Consulta
                </Link>
            </div>
        </header>
    );
};

export default Header;