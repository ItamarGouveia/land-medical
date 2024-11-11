// components/ContactForm.tsx
const ContactForm = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10">Agende uma Consulta</h2>
            <form className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                <input type="text" className="w-full p-3 mb-4 border rounded" placeholder="Seu nome" />
                <input type="email" className="w-full p-3 mb-4 border rounded" placeholder="Seu e-mail" />
                <input type="text" className="w-full p-3 mb-4 border rounded" placeholder="Telefone" />
                <textarea className="w-full p-3 mb-4 border rounded" placeholder="Mensagem (opcional)" rows={4}></textarea>
                <button type="submit" className="w-full bg-yellow-400 text-black py-3 rounded-lg">Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;