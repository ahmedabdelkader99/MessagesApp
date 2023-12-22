import { readFile, writeFile } from 'fs/promises';

export class MessagesRepositroy {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async CreateMessage(message: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    //generate new id to store new mess in messages
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
