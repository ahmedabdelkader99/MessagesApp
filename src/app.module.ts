import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessagesService } from './app.service';
import { MessagesRepositroy } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  //things can be used as dependenices for other classes
  providers: [MessagesService, MessagesRepositroy],
})
export class AppModule {}
