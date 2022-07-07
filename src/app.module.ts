import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { Book, BookSchema } from './book/book.schema';
import { BookService } from './book/book.service';
import { dbConfig } from './config/dbConfig';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018', {
      dbName: 'demo',
      auth: {
        username: 'user',
        password: '1q2w3e',
      },
    }),
    ConfigModule.forRoot({
      load: [dbConfig],
    }),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
