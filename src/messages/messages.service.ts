import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepository: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // !!!IMPORTANT: DONT DO THIS IN REAL APPS!
    this.messageRepository = new MessagesRepository();
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  findOne(id: string) {
    return this.messageRepository.findById(id);
  }

  create(content: string) {
    return this.messageRepository.create(content);
  }
}

