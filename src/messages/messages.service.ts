import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  findAll() {
    return this.messagesRepository.findAll();
  }

  findOne(id: string) {
    return this.messagesRepository.findById(id);
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
