import { ContactMessage } from '@/src/domain/entities/ContactMessage';

export interface IContactRepository {
    create(data: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage>;
    findAll(): Promise<ContactMessage[]>;
}
