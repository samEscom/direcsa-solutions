import { ContactMessage } from '@/src/domain/entities/ContactMessage';
import { IContactRepository } from '@/src/domain/repositories/IContactRepository';

export class GetContacts {
    constructor(private readonly contactRepository: IContactRepository) { }

    async execute(): Promise<ContactMessage[]> {
        return await this.contactRepository.findAll();
    }
}
