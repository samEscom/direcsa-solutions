import { NextRequest } from 'next/server';
import { getContactController } from '@/lib/container';

export async function POST(req: NextRequest) {
    const contactController = getContactController();
    return await contactController.create(req);
}
