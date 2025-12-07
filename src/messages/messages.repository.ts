import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  private messages = readFile('messages.json', 'utf8')
    .then((data) => JSON.parse(data))
    .catch(() => []); // Initialize with empty array if file doesn't exist

  async findAll() {
    return await this.messages;
  }

  async findById(id: string) {
    return (await this.messages)[id];
  }

  async create(content: string) {
    const messages = await this.findAll();
    const id = Math.floor(Math.random() * 999);
    messages[id.toString()] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
    return messages[id.toString()];
  }
}
