'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const brands = [
    { name: 'Shure', logo: '/images/logos/shure.png' },
    { name: 'Nexo', logo: '/images/logos/nexo.webp' },
    { name: 'Biamp', logo: '/images/logos/biamp.png' },
    { name: 'Sonos', logo: '/images/logos/sonos.png' },
];

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-audio-bg">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image with Parallax-like effect */}
                <div
                    className="absolute inset-0 z-0 scale-105"
                    style={{
                        backgroundImage: 'url("/images/audio_room.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Multi-layered overlay for depth */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(15,23,42,0.3), #0F172A)' }}></div>
                    <div className="absolute inset-0 bg-audio-navbar/10 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block bg-audio-primary/20 backdrop-blur-md text-audio-primary text-sm font-semibold px-6 py-2 rounded-full border border-audio-primary/30 mb-8 tracking-widest uppercase">
                            Excelencia Tecnológica
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-audio-text">
                            Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-audio-primary to-audio-secondary">Soluciones</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-audio-text/70 max-w-3xl mx-auto leading-relaxed font-light">
                            Innovación constante en cada componente. Actualmente nos encontramos integrando nuestro catálogo completo; por ahora, conoce a los aliados tecnológicos con los que transformamos tus espacios.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-audio-bg to-transparent z-10"></div>
            </section>

            {/* Brands Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={brand.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="relative w-full aspect-[3/2] bg-audio-surface rounded-2xl p-8 flex items-center justify-center border border-audio-surface-border transition-all duration-300 group-hover:shadow-xl group-hover:shadow-audio-primary/10 group-hover:border-audio-primary/40 group-hover:-translate-y-1">
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain p-6 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                                <span className="mt-4 text-sm font-medium text-audio-text/50 group-hover:text-audio-primary transition-colors">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placeholder Content */}
            <section className="py-20 bg-audio-surface px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-audio-primary/10 text-audio-primary rounded-2xl mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-audio-text mb-4">Próximamente más productos</h2>
                    <p className="text-lg text-audio-text/60 mb-10">
                        Nuestra red de proveedores es amplia para ofrecerte lo mejor en tecnología audiovisual.
                        Pregunta alguna marca en específico y con gusto te atenderemos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-audio-bg rounded-2xl border border-audio-surface-border">
                            <h3 className="font-bold text-audio-text mb-2">Audio Profesional</h3>
                            <p className="text-sm text-audio-text/50">Sistemas de microfonía, altavoces y procesamiento digital.</p>
                        </div>
                        <div className="p-6 bg-audio-bg rounded-2xl border border-audio-surface-border">
                            <h3 className="font-bold text-audio-text mb-2">Video & Control</h3>
                            <p className="text-sm text-audio-text/50">Pantallas LED, videoproyección y automatización de espacios.</p>
                        </div>
                        <div className="p-6 bg-audio-bg rounded-2xl border border-audio-surface-border">
                            <h3 className="font-bold text-audio-text mb-2">Conectividad</h3>
                            <p className="text-sm text-audio-text/50">Infraestructura de red y soluciones de colaboración híbrida.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl shadow-audio-primary/10 border border-audio-surface-border" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-audio-primary rounded-full blur-3xl opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-audio-text">¿Buscas algo específico?</h2>
                        <p className="text-xl text-audio-text/60 mb-10 max-w-2xl mx-auto">
                            Aunque no veas el producto en línea todavía, lo más probable es que podamos conseguirlo para ti.
                        </p>
                        <a
                            href="/contacto"
                            className="inline-block bg-audio-primary text-audio-navbar font-bold px-10 py-4 rounded-2xl hover:bg-audio-secondary transition-colors shadow-lg"
                        >
                            Solicitar Cotización
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
