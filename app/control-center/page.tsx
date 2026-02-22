'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    description: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [contacts, setContacts] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchContacts();
    }, []);

    async function fetchContacts() {
        try {
            const res = await fetch('/api/admin/contacts');
            if (!res.ok) {
                if (res.status === 401) {
                    router.push('/control-center/login');
                    return;
                }
                throw new Error('No se pudieron obtener los mensajes');
            }
            const data = await res.json();
            setContacts(data.contacts);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    }

    async function handleLogout() {
        try {
            await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'logout' }),
            });
            router.push('/control-center/login');
        } catch (err) {
            console.error('Error al cerrar sesión:', err);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Panel de Control</h1>
                    <p className="text-sm text-gray-500">Gestión de prospectos y mensajes</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
                >
                    Cerrar Sesión
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
                <div className="mb-8 flex justify-between items-end">
                    <h2 className="text-2xl font-bold text-gray-900">Mensajes de Contacto</h2>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {contacts.length} Mensajes
                    </span>
                </div>

                {loading ? (
                    <div className="grid gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center">
                        <p className="font-semibold">{error}</p>
                        <button onClick={fetchContacts} className="mt-4 text-sm underline font-bold">Reintentar</button>
                    </div>
                ) : contacts.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📥</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Sin mensajes</h3>
                        <p className="text-gray-500">Aún no hay submissions en el formulario de contacto.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {contacts.map((contact) => (
                            <div key={contact.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                                <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors">{contact.email}</a>
                                                {contact.phone && (
                                                    <>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{contact.phone}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                {new Date(contact.createdAt).toLocaleDateString('es-MX', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {new Date(contact.createdAt).toLocaleTimeString('es-MX', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                        <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                                            {contact.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <footer className="p-6 text-center text-gray-400 text-xs">
                &copy; 2026 Direcsa Solutions - Panel Administrativo
            </footer>
        </div>
    );
}
