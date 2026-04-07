import type { Metadata } from 'next';
import Image from 'next/image';
import { getAllProducts } from '@/lib/products';
import { ArrowRight, AudioLines, Zap, Mic2, Settings2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Ofertas Especiales — Direcsa',
    description: 'Soluciones de audio profesional con diseño premium y rendimiento excepcional.',
};

export default function OffersPage() {
    const products = getAllProducts();

    return (
        <div className="min-h-screen bg-audio-bg text-audio-text selection:bg-audio-primary/30">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1)_0%,transparent_50%)] -z-10 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
                        Haz que tu <br />
                        <span className="text-audio-primary drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">sonido destaque</span>
                    </h1>
                    <p className="text-xl lg:text-3xl text-audio-text/60 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                        Soluciones de audio profesional para sonido en vivo, recintos y creadores.
                    </p>
                </div>
            </section>

            {/* Campaign Blocks */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Control */}
                    <div className="group relative bg-audio-surface rounded-[2.5rem] p-10 border border-audio-surface-border hover:border-audio-primary/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-audio-primary/10 group-hover:text-audio-primary/20 group-hover:scale-110 transition-all duration-500">
                            <Settings2 size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Control</h3>
                            <p className="text-audio-text/60 leading-relaxed text-lg mb-8 uppercase tracking-widest text-xs font-semibold">Total en tus manos</p>
                            <p className="text-audio-text/70 leading-relaxed max-w-[240px]">
                                Mezcladoras digitales diseñadas para la precisión y eficiencia en el flujo de trabajo.
                            </p>
                        </div>
                    </div>

                    {/* Power */}
                    <div className="group relative bg-audio-surface rounded-[2.5rem] p-10 border border-audio-surface-border hover:border-audio-primary/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-audio-primary/10 group-hover:text-audio-primary/20 group-hover:scale-110 transition-all duration-500">
                            <Zap size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Potencia</h3>
                            <p className="text-audio-text/60 leading-relaxed text-lg mb-8 uppercase tracking-widest text-xs font-semibold">Que puedes sentir</p>
                            <p className="text-audio-text/70 leading-relaxed max-w-[240px]">
                                Altavoces y subwoofers construidos para impacto y claridad en cada nota.
                            </p>
                        </div>
                    </div>

                    {/* Voice */}
                    <div className="group relative bg-audio-surface rounded-[2.5rem] p-10 border border-audio-surface-border hover:border-audio-primary/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-audio-primary/10 group-hover:text-audio-primary/20 group-hover:scale-110 transition-all duration-500">
                            <Mic2 size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Voz</h3>
                            <p className="text-audio-text/60 leading-relaxed text-lg mb-8 uppercase tracking-widest text-xs font-semibold">Claridad cristalina</p>
                            <p className="text-audio-text/70 leading-relaxed max-w-[240px]">
                                Micrófonos estándar de la industria que capturan cada detalle con fidelidad absoluta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid Header */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-audio-surface-border pb-12">
                    <div>
                        <span className="text-audio-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Catálogo Premium</span>
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Equipamiento Destacado</h2>
                    </div>
                    <p className="text-audio-text/60 text-lg max-w-md">
                        Seleccionamos cuidadosamente cada producto para garantizar la mejor experiencia auditiva.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <a
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="group flex flex-col items-center"
                        >
                            <div className="relative aspect-[4/5] w-full bg-audio-surface rounded-[2rem] border border-audio-surface-border group-hover:border-audio-primary/40 transition-all duration-500 overflow-hidden mb-8 p-12">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_60%)] group-hover:scale-125 transition-transform duration-700" />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                                />
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="bg-audio-navbar/80 backdrop-blur-xl border border-audio-surface-border/50 text-audio-primary px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                        Ver detalles <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                                <p className="text-audio-primary/60 text-[10px] font-bold tracking-widest uppercase mb-2">{product.category}</p>
                                <h3 className="text-2xl font-bold mb-3 tracking-tight">{product.name}</h3>
                                <p className="text-audio-text/50 text-sm leading-relaxed line-clamp-2 max-w-[240px] mx-auto">
                                    {product.shortDescription}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Newsletter/Contact Section */}
            <section className="bg-audio-surface/30 border-t border-audio-surface-border pt-32 pb-48 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl lg:text-7xl font-bold mb-12 tracking-tight">¿Listo para mejorar <br /> tu configuración?</h2>
                    <p className="text-xl text-audio-text/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Nuestros expertos están listos para ayudarte a elegir el sistema perfecto para tus necesidades específicas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/contacto"
                            className="bg-audio-primary text-audio-navbar px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg shadow-audio-primary/20"
                        >
                            Contactar Consultor
                        </a>
                        <a
                            href="/catalogo"
                            className="bg-audio-navbar text-audio-text border border-audio-surface-border px-12 py-5 rounded-full font-bold text-xl hover:bg-audio-surface transition-colors"
                        >
                            Explorar Catálogo
                        </a>
                    </div>
                </div>
                {/* Background decorative element */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-[#22D3EE] blur-[150px] opacity-[0.03] rounded-full translate-y-1/2 -z-10" />
            </section>
        </div>
    );
}
