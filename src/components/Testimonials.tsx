import Image from "next/image";

// components/Testimonials.tsx
const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-100">
            <h2 className="text-6xl font-bold text-center mb-10">Depoimentos</h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>
                    <p>A melhor clínica para meu filho. O atendimento é super humanizado!</p>
                    <strong> João e Fernanda, Pais do Miguel</strong>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>
                    <p>Profissionais incríveis, sempre atentos às nossas preocupações.</p>
                    <strong> Mariana e Carlos, Pais da Ana</strong>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>
                    <p>Profissionais incríveis, sempre atentos às nossas preocupações.</p>
                    <strong> Mariana e Carlos, Pais da Ana</strong>
                </div>
            </div>


            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">

                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>

                    <p>A melhor clínica para meu filho. O atendimento é super humanizado!</p>
                    <strong> João e Fernanda, Pais do Miguel</strong>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>
                    <p>Profissionais incríveis, sempre atentos às nossas preocupações.</p>
                    <strong> Mariana e Carlos, Pais da Ana</strong>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex flex-row justify-center items-center gap-4 font-extrabold">
                        -----------------
                        <Image src='/dep2.jpeg' alt='' width={60} height={60} className="rounded-full" />
                        -----------------
                    </div>
                    <p>Profissionais incríveis, sempre atentos às nossas preocupações.</p>
                    <strong> Mariana e Carlos, Pais da Ana</strong>
                </div>

            </div>
        </section >
    );
};

export default Testimonials;