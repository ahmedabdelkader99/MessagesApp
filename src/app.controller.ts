import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { MessagesService } from './app.service';
import { CreateMessageDto } from './dtos/create-messages-dto';

@Controller('messages')
export class AppController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    this.messageService.creat(body.content);
    console.log(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message Not Found');
    }
    return message;
  }
}
