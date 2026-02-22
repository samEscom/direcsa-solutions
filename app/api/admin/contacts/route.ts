import { NextRequest } from 'next/server';
import { getContactController } from '@/lib/container';

export async function GET(req: NextRequest) {
    const controller = getContactController();
    return await controller.getAll(req);
}
