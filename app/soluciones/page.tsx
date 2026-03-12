import type { Metadata } from 'next';
import Image from 'next/image';
import {
    Briefcase,
    GraduationCap,
    Theater,
    Music,
    Church,
    Hotel,
    Landmark,
    ShoppingBag,
    Video,
    Settings,
    Users,
    Layers,
    Wrench,
    Cpu,
    Play,
    Presentation,
    LifeBuoy,
    Volume2,
    CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Soluciones — DIRECSA',
    description: 'Expertos en integración audiovisual para centros religiosos, entretenimiento y corporativos.',
};

export default function SolutionsPage() {
    const solutions = [
        {
            icon: <Briefcase className="w-8 h-8 text-audio-primary" />,
            title: "Espacios Corporativos",
            description: "Diseñamos soluciones audiovisuales para salas de juntas, salas de consejo y espacios de colaboración. Integramos audio claro para voz, videoconferencia profesional y sistemas de control sencillos que mejoran la comunicación y productividad."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-audio-primary" />,
            title: "Educación y Capacitación",
            description: "Implementamos sistemas audiovisuales para aulas, auditorios y espacios educativos. Nuestras soluciones permiten clases presenciales, híbridas y remotas, garantizando claridad en el audio, calidad visual y facilidad de operación."
        },
        {
            icon: <Theater className="w-8 h-8 text-audio-primary" />,
            title: "Auditorios y Teatros",
            description: "Desarrollamos proyectos para auditorios y teatros con un enfoque en cobertura uniforme, inteligibilidad y potencia controlada. Realizamos diseño electroacústico, integración de sistemas de sonido profesional y optimización del rendimiento del espacio."
        },
        {
            icon: <Music className="w-8 h-8 text-audio-primary" />,
            title: "Entretenimiento y Espectáculos",
            description: "Creamos soluciones para foros, venues y centros de entretenimiento. Integramos sistemas de audio de alto desempeño, monitoreo y control, diseñados para ofrecer experiencias sonoras impactantes y confiables."
        },
        {
            icon: <Church className="w-8 h-8 text-audio-primary" />,
            title: "Espacios Religiosos",
            description: "Diseñamos sistemas audiovisuales para templos e iglesias, priorizando la claridad de la voz, la cobertura uniforme y una integración discreta. Facilitamos también la transmisión y grabación de servicios."
        },
        {
            icon: <Hotel className="w-8 h-8 text-audio-primary" />,
            title: "Hoteles y Hospitalidad",
            description: "Integramos soluciones audiovisuales para salones de eventos, salas de conferencias y áreas comunes. Ofrecemos sistemas flexibles, escalables y fáciles de operar que se adaptan a distintos tipos de eventos."
        },
        {
            icon: <Landmark className="w-8 h-8 text-audio-primary" />,
            title: "Espacios Públicos y Culturales",
            description: "Implementamos soluciones para auditorios públicos, centros culturales y salas institucionales. Nuestros sistemas aseguran comunicación clara, operación confiable y cumplimiento con los requerimientos técnicos del sector."
        },
        {
            icon: <ShoppingBag className="w-8 h-8 text-audio-primary" />,
            title: "Comercial y Retail",
            description: "Diseñamos sistemas de audio ambiental y pantallas informativas que fortalecen la experiencia del cliente y la identidad de marca, con control zonificado y operación automatizada."
        },
        {
            icon: <Video className="w-8 h-8 text-audio-primary" />,
            title: "Producción y Streaming",
            description: "Integramos soluciones para transmisión en vivo, grabación y producción audiovisual. Implementamos sistemas con cámaras, audio profesional y automatización para una operación eficiente y consistente."
        }
    ];

    const professionalServices = [
        { name: "Consultoría audiovisual", icon: <Users size={20} /> },
        { name: "Diseño e ingeniería AV", icon: <Layers size={20} /> },
        { name: "Integración e instalación", icon: <Wrench size={20} /> },
        { name: "Programación y control", icon: <Cpu size={20} /> },
        { name: "Puesta en marcha", icon: <Play size={20} /> },
        { name: "Capacitación", icon: <Presentation size={20} /> },
        { name: "Soporte y mantenimiento", icon: <LifeBuoy size={20} /> }
    ];

    const brands = [
        { name: 'Shure', logo: '/images/logos/shure.png' },
        { name: 'Sonos', logo: '/images/logos/sonos.png' },
        { name: 'Biamp', logo: '/images/logos/biamp.png' },
        { name: 'Nexo', logo: '/images/logos/nexo.webp' },
    ];

    return (
        <div className="bg-audio-bg">
            {/* Header Hero */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/images/live_events.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-audio-navbar/90 via-audio-bg/70 to-audio-bg backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
                    <div className="flex justify-center mb-6">
                        <span className="p-3 bg-audio-primary/20 rounded-full border border-audio-primary/30 backdrop-blur-md">
                            <Volume2 className="w-8 h-8 text-audio-primary" />
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tight text-audio-text">Nuestras Soluciones</h1>
                    <p className="text-xl md:text-2xl text-audio-text/70 max-w-3xl mx-auto leading-relaxed">
                        En Direcsa diseñamos, integramos e implementamos soluciones audiovisuales profesionales que se adaptan a cada espacio y necesidad. Nos enfocamos en la funcionalidad, la experiencia del usuario y la confiabilidad de cada sistema.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 px-4 bg-audio-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-audio-surface p-8 rounded-[2.5rem] border border-audio-surface-border hover:shadow-2xl hover:shadow-audio-primary/10 hover:-translate-y-2 hover:border-audio-primary/30 transition-all duration-500"
                            >
                                <div className="mb-6 p-4 bg-audio-primary/10 w-fit rounded-2xl group-hover:bg-audio-primary group-hover:text-audio-navbar transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-audio-text mb-4 group-hover:text-audio-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-audio-text/60 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Services */}
            <section className="py-24 px-4 bg-audio-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[500px] h-[500px] bg-audio-primary rounded-full blur-[100px] opacity-5"></div>
                <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[500px] h-[500px] bg-audio-secondary rounded-full blur-[100px] opacity-5"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div
                        className="relative bg-audio-navbar rounded-[3rem] overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage: 'url("/images/monitoring2.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-audio-navbar via-audio-navbar/95 to-audio-bg/90 backdrop-blur-[2px]"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-20 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <Settings className="w-8 h-8 text-audio-primary animate-spin-slow" />
                                    <span className="text-audio-primary font-semibold tracking-widest uppercase text-sm">Expertise Técnica</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-audio-text mb-8">Servicios Profesionales</h2>
                                <p className="text-audio-text/50 text-xl leading-relaxed mb-10">
                                    Acompañamos cada proyecto con servicios especializados que garantizan el éxito de tu inversión desde el diseño hasta la operación diaria.
                                </p>
                            </div>
                            <div className="bg-audio-surface/50 p-12 lg:p-20 backdrop-blur-xl border-l border-audio-surface-border">
                                <div className="space-y-6">
                                    {professionalServices.map((service, index) => (
                                        <div key={index} className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-xl bg-audio-primary/10 flex items-center justify-center text-audio-primary group-hover:bg-audio-primary group-hover:text-audio-navbar transition-all duration-300">
                                                {service.icon}
                                            </div>
                                            <span className="text-lg md:text-xl font-medium text-audio-text/70 group-hover:text-audio-text transition-colors">
                                                {service.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-24 px-4 bg-audio-bg">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-audio-text mb-16">Alianzas con líderes globales</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {brands.map((brand) => (
                            <div key={brand.name} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500">
                                <div className="relative w-40 h-20">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 px-4 bg-audio-surface overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-audio-primary font-semibold tracking-widest uppercase text-sm">Metodología Direcsa</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-audio-text mt-4">Nuestro Proceso</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-audio-surface-border -translate-y-8"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                {
                                    step: "01",
                                    title: "Consultoría",
                                    desc: "Entendemos tus necesidades y presupuesto para trazar el camino correcto.",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    step: "02",
                                    title: "Ingeniería",
                                    desc: "Diseñamos el plano técnico y elegimos el hardware ideal para tu espacio.",
                                    icon: <Layers className="w-6 h-6" />
                                },
                                {
                                    step: "03",
                                    title: "Ejecución",
                                    desc: "Instalación limpia, estética y garantizada por nuestros expertos.",
                                    icon: <Wrench className="w-6 h-6" />
                                },
                                {
                                    step: "04",
                                    title: "Certificación",
                                    desc: "Pruebas exhaustivas de rendimiento y capacitación completa a tu equipo.",
                                    icon: <CheckCircle2 className="w-6 h-6" />
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="bg-audio-bg p-8 rounded-3xl border border-audio-surface-border group-hover:shadow-xl group-hover:shadow-audio-primary/10 group-hover:border-audio-primary/30 transition-all duration-500 relative z-10">
                                        <div className="w-16 h-16 bg-audio-primary rounded-2xl flex items-center justify-center text-audio-navbar mb-6 transform group-hover:rotate-6 transition-transform">
                                            {item.icon}
                                        </div>
                                        <span className="text-audio-primary font-bold text-5xl opacity-10 absolute top-8 right-8">{item.step}</span>
                                        <h3 className="text-xl font-bold text-audio-text mb-3">{item.title}</h3>
                                        <p className="text-audio-text/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 px-4 bg-audio-navbar text-audio-text">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
                        <p className="text-audio-text/50">Todo lo que necesitas saber sobre trabajar con nosotros.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "¿Realizan envíos y trabajos fuera de la CDMX?",
                                a: "Sí. En Direcsa contamos con cobertura en toda la República Mexicana. Realizamos envíos de equipo, proyectos de integración e instalación en diferentes estados, garantizando la misma calidad y seguimiento en cada proyecto."
                            },
                            {
                                q: "¿Qué tipo de garantías ofrecen?",
                                a: "Todos los equipos cuentan con garantía directa del fabricante conforme a sus políticas. Adicionalmente, ofrecemos planes de mantenimiento preventivo para asegurar el óptimo funcionamiento del sistema y prolongar la vida útil del equipo."
                            },
                            {
                                q: "¿Cómo es el proceso para iniciar un proyecto?",
                                a: "El proceso comienza con una visita o reunión para conocer las necesidades del espacio. Posteriormente, desarrollamos una propuesta técnica y económica personalizada. Una vez aprobada, coordinamos la instalación y puesta en marcha del sistema."
                            },
                            {
                                q: "¿Cuánto cuesta un proyecto de audio o video?",
                                a: "Cada proyecto es diferente, ya que depende del tamaño del espacio, las necesidades técnicas y el nivel de integración requerido. En Direcsa realizamos un diagnóstico previo para ofrecer una propuesta personalizada, clara y ajustada a cada presupuesto."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-audio-surface/50 p-8 rounded-3xl border border-audio-surface-border backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-4 text-audio-primary flex items-center gap-3">
                                    <span className="text-2xl">*</span>
                                    {faq.q}
                                </h3>
                                <p className="text-audio-text/70 text-lg leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-audio-primary/10 border border-audio-surface-border" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-audio-primary rounded-full blur-3xl opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-audio-text">¿Listo para transformar tu espacio?</h2>
                        <p className="text-xl text-audio-text/60 mb-12 max-w-2xl mx-auto">
                            Nuestro equipo de ingenieros está listo para diseñar la solución perfecta para tus necesidades.
                        </p>
                        <a
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-audio-primary text-audio-navbar px-10 py-5 rounded-2xl font-bold text-xl hover:bg-audio-secondary transition-all shadow-xl hover:-translate-y-1"
                        >
                            Solicitar asesoria
                            <CheckCircle2 className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
