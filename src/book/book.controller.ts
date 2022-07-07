import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookService } from 'src/book/book.service';
import { Book } from './book.schema';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async createBook(@Res() response, @Body() book: Book) {
    const newBook = await this.bookService.create(book);
    return response.status(HttpStatus.CREATED).json({
      newBook,
    });
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Book,
  })
  @Get()
  async fetchAll(@Res() response) {
    const books = await this.bookService.listBooks();
    return response.status(HttpStatus.OK).json({
      books,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const book = await this.bookService.getBookById(id);
    return response.status(HttpStatus.OK).json({
      book,
    });
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() book: Book) {
    const updatedBook = await this.bookService.update(id, book);
    return response.status(HttpStatus.OK).json({
      updatedBook,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedBook = await this.bookService.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedBook,
    });
  }
}
