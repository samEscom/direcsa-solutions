import type { Metadata } from 'next';
import Image from 'next/image';
import {
    ChevronRight,
    Calendar,
    MapPin,
    ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Casos de Éxito — DIRECSA',
    description: 'Nuestra trayectoria a través de proyectos audiovisuales emblemáticos.',
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "Auditorio Institucional 'Paz y Bien'",
            category: "Espacios Religiosos",
            location: "Ciudad de México",
            date: "Noviembre 2024",
            description: "Modernización integral del sistema de audio con tecnología de formación de haces (beamsteering) para garantizar cobertura uniforme en un espacio con alta reverberación.",
            image: "/images/live_events.jpg", // Placeholder
            tags: ["Audio Pro", "Nexo", "Beamsteering"]
        },
        {
            title: "Corporate Hub Santa Fe",
            category: "Espacios Corporativos",
            location: "Santa Fe, CDMX",
            date: "Enero 2025",
            description: "Implementación de 12 salas de juntas híbridas con sistemas de videoconferencia automática y control táctil centralizado.",
            image: "/images/audio_room.jpg", // Placeholder
            tags: ["Video Conferencia", "Automatización", "Shure"]
        },
        {
            title: "Teatro Universitario de Vanguardia",
            category: "Educación y Capacitación",
            location: "Monterrey, NL",
            date: "Agosto 2023",
            description: "Diseño electroacústico y montaje de sistema Line Array con optimización digital de sala y sistema de monitoreo en tiempo real.",
            image: "/images/live_events.jpg", // Placeholder
            tags: ["Line Array", "Iluminación", "Diseño Acústico"]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Project Hero */}
            <section className="bg-gray-900 py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-6 block">Trayectoria y Resultados</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Nuestros Casos de Éxito</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transformamos espacios con ingeniería audiovisual de precisión. Aquí presentamos algunos de nuestros proyectos más destacados.
                    </p>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-24 px-4 bg-gray-50/50">
                <div className="max-w-7xl mx-auto space-y-24">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Project Image Wrapper */}
                            <div className="w-full lg:w-1/2 group relative">
                                <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-500 -z-10 opacity-50"></div>
                                <div className="aspect-[16/10] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2">
                                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{project.title}</h2>
                                <div className="flex flex-wrap gap-6 mb-8 text-gray-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} className="text-blue-500" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} className="text-blue-500" />
                                        {project.date}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 mb-10">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-xl bg-white shadow-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors group">
                                    Ver detalles del proyecto
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5 opacity-30"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Buscas resultados similares?</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Cada espacio tiene su propia voz. Permítenos diseñar la solución técnica que potencie la tuya.
                        </p>
                        <a
                            href="/contacto"
                            className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all inline-block shadow-xl shadow-blue-500/20"
                        >
                            Cuéntanos tu visión
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
