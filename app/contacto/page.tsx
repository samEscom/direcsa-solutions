'use client';

import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-audio-bg py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-audio-surface rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-audio-surface-border">
                    {/* Información de contacto */}
                    <div className="bg-audio-navbar p-12 text-audio-text">
                        <h1 className="text-3xl font-bold mb-6">Hablemos de tu próximo proyecto</h1>
                        <p className="text-audio-text/60 mb-12">
                            Estamos listos para escucharte y diseñar la solución técnica que tu espacio necesita.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-audio-primary/20 rounded-full flex items-center justify-center border border-audio-primary/30">📍</div>
                                <span>Ciudad de México, México</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-audio-primary/20 rounded-full flex items-center justify-center border border-audio-primary/30">✉️</div>
                                <span className="text-xl font-semibold">direcsa.solutions@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="p-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
