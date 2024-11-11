// components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-6">
            <div className="max-w-screen-xl mx-auto text-center">
                <p>&copy; 2024 Clínica Infantil. Todos os direitos reservados.</p>
                <div className="space-x-4 mt-4">
                    <a href="#" className="text-white">Facebook</a>
                    <a href="#" className="text-white">Instagram</a>
                </div>
                <p className="mt-2">Endereço: Rua Exemplo, 123, Cidade</p>
                <p>Horário de funcionamento: Segunda a Sexta, 8h - 18h</p>
            </div>
        </footer>
    );
};

export default Footer;