'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) setStatus('success');
            else setStatus('error');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-audio-surface rounded-3xl">
                <div className="w-16 h-16 bg-audio-primary/20 text-audio-primary rounded-full flex items-center justify-center text-2xl mb-4">
                    ✓
                </div>
                <h2 className="text-2xl font-bold text-audio-text mb-2">¡Mensaje enviado!</h2>
                <p className="text-audio-text/60">Nos pondremos en contacto contigo lo antes posible.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-audio-primary font-medium hover:underline"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-audio-surface p-8 md:p-12 rounded-3xl">
            <div>
                <label className="block text-sm font-medium text-audio-text/80 mb-1">Nombre completo</label>
                <input
                    required
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-audio-surface-border bg-audio-bg text-audio-text placeholder-audio-text/40 focus:ring-2 focus:ring-audio-primary focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-audio-text/80 mb-1">Correo electrónico</label>
                    <input
                        required
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-audio-surface-border bg-audio-bg text-audio-text placeholder-audio-text/40 focus:ring-2 focus:ring-audio-primary focus:border-transparent outline-none transition-all"
                        placeholder="correo@ejemplo.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-audio-text/80 mb-1">Teléfono</label>
                    <input
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-audio-surface-border bg-audio-bg text-audio-text placeholder-audio-text/40 focus:ring-2 focus:ring-audio-primary focus:border-transparent outline-none transition-all"
                        placeholder="55 1234 5678"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-audio-text/80 mb-1">Descripción</label>
                <textarea
                    required
                    name="description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-audio-surface-border bg-audio-bg text-audio-text placeholder-audio-text/40 focus:ring-2 focus:ring-audio-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos un poco sobre tu necesidad..."
                ></textarea>
            </div>
            {status === 'error' && (
                <p className="text-audio-highlight text-sm">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
            )}
            <button
                disabled={status === 'loading'}
                type="submit"
                className="w-full bg-audio-primary text-audio-navbar font-bold py-4 rounded-xl hover:bg-audio-secondary transition-colors shadow-lg disabled:opacity-50 cursor-pointer"
            >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>
    );
}
