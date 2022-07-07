import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  author: string;

  @ApiProperty()
  @Prop()
  publishYear: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
