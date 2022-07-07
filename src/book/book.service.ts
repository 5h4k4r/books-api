import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/book/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async listBooks(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async getBookById(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }

  async delete(id: string): Promise<void> {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
