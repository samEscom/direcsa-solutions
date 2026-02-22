import { NextRequest, NextResponse } from 'next/server';
import { CreateContact } from '@/src/application/use-cases/contact/CreateContact';
import { GetContacts } from '@/src/application/use-cases/contact/GetContacts';

export class ContactController {
    constructor(
        private readonly createContact: CreateContact,
        private readonly getContacts: GetContacts,
    ) { }

    async create(req: NextRequest): Promise<NextResponse> {
        // ... (existing code remains substantially same, just making sure types match)
        try {
            const body = await req.json();
            const contact = await this.createContact.execute({
                name: body.name,
                email: body.email,
                phone: body.phone,
                description: body.description,
            });

            return NextResponse.json({
                message: 'Mensaje enviado correctamente',
                contact: {
                    id: contact.id,
                    createdAt: contact.createdAt
                }
            }, { status: 201 });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al procesar el mensaje de contacto';
            return NextResponse.json({ error: message }, { status: 400 });
        }
    }

    async getAll(_req: NextRequest): Promise<NextResponse> {
        try {
            const contacts = await this.getContacts.execute();
            return NextResponse.json({ contacts });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Error al obtener mensajes de contacto';
            return NextResponse.json({ error: message }, { status: 500 });
        }
    }
}
