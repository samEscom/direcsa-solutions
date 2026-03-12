import type { Metadata } from 'next';
import ContactForm from './components/ContactForm';

export const metadata: Metadata = {
    title: 'DIRECSA — Soluciones Audiovisuales',
    description: 'Diseño, venta, instalación y soporte de soluciones audiovisuales profesionales.',
    openGraph: {
        title: 'DIRECSA — Expertos en Audio y Video',
        description: 'Transformamos espacios con tecnología de vanguardia.',
        images: [
            {
                url: '/images/audio_room.jpg',
                width: 1200,
                height: 630,
                alt: 'DIRECSA Hero Workspace',
            }
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DIRECSA — Audio & Video Profesional',
        description: 'Líderes en integración audiovisual.',
        images: ['/images/audio_room.jpg'],
    },
};

export default function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/images/audio_room.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-audio-bg/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <span className="inline-block bg-audio-primary/20 text-audio-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-audio-primary/30">
                        Soluciones Tecnológicas
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-audio-text">
                        Transformamos ideas en experiencias audiovisuales
                    </h1>
                    <p className="text-xl text-audio-text/70 mb-10 max-w-2xl mx-auto">
                        DIRECSA es una empresa tecnológica dedicada al diseño, venta, instalación y soporte
                        de soluciones audiovisuales con compromiso, honestidad y pasión por la excelencia.
                    </p>
                </div>
            </section>

            {/* Quienes somos */}
            <section className="py-20 px-4 bg-audio-surface">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-audio-text mb-6">Quiénes somos</h2>
                    <p className="text-lg text-audio-text/70 leading-relaxed">
                        DIRECSA es una empresa tecnológica dedicada al diseño, venta, instalación y soporte
                        de soluciones audiovisuales. Creamos soluciones audiovisuales que transforman ideas en
                        experiencias, con compromiso, honestidad y pasión por la excelencia.
                    </p>
                </div>
            </section>

            {/* Nuestros servicios */}
            <section className="py-20 px-4 bg-audio-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-audio-text mb-12">
                        Nuestros servicios
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '📐',
                                title: 'Diseño de sistemas audiovisuales',
                                desc: 'Conceptualización y planificación técnica de espacios.',
                            },
                            {
                                icon: '🛍️',
                                title: 'Venta de equipos de audio y video',
                                desc: 'Distribución de las mejores marcas del mercado.',
                            },
                            {
                                icon: '🔧',
                                title: 'Instalación y configuración profesional',
                                desc: 'Puesta en marcha garantizada por expertos.',
                            },
                            {
                                icon: '🛡️',
                                title: 'Soporte y mantenimiento',
                                desc: 'Aseguramos la operatividad continua de tus equipos.',
                            },
                            {
                                icon: '🎥',
                                title: 'Renta de equipos audiovisuales',
                                desc: 'Soluciones para eventos de todo tipo.',
                            },
                        ].map((s) => (
                            <div key={s.title} className="bg-audio-surface rounded-2xl p-8 border border-audio-surface-border hover:border-audio-primary/40 transition-colors">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="text-lg font-semibold text-audio-text mb-2">{s.title}</h3>
                                <p className="text-audio-text/60 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por qué elegirnos */}
            <section className="py-20 px-4 bg-audio-surface">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-audio-text mb-12">
                        Por qué elegirnos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🏆',
                                title: 'Experiencia comprobada',
                                desc: 'Proyectos de todos los tamaños con resultados exitosos.',
                            },
                            {
                                icon: '🎯',
                                title: 'Enfoque en soluciones',
                                desc: 'Priorizamos resolver tus necesidades, no solo vender equipos.',
                            },
                            {
                                icon: '🤝',
                                title: 'Atención personalizada',
                                desc: 'Soporte constante y trato directo en cada etapa.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-audio-text mb-2">{item.title}</h3>
                                <p className="text-audio-text/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section className="py-24 px-4 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-audio-primary rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-audio-secondary rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-audio-text">
                                Hablemos de tu próximo proyecto
                            </h2>
                            <p className="text-xl text-audio-text/60 mb-12 max-w-lg leading-relaxed">
                                Estamos listos para escucharte y diseñar la solución técnica que tu espacio necesita.
                                Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-audio-primary/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-audio-primary/20">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-audio-text/50 text-sm font-medium uppercase tracking-wider">Ubicación</p>
                                        <p className="text-lg font-semibold text-audio-text">Ciudad de México, México</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-audio-primary/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-audio-primary/20">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="text-audio-text/50 text-sm font-medium uppercase tracking-wider">Correo</p>
                                        <p className="text-lg font-semibold text-audio-text">direcsa.solutions@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
