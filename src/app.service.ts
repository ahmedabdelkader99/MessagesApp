import { MessagesRepositroy } from './app.repository';
// this is best soluation insted of using instance from class service
export class MessagesService {
  constructor(public messageRepo: MessagesRepositroy) {}
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  creat(message: string) {
    return this.messageRepo.CreateMessage(message);
  }
}
