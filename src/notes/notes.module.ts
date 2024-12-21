import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesSchema } from './schema/notes.schema';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
//This is where we have imported 


@Module({
  imports:[
    MongooseModule.forFeature([{name:'Notes',schema:NotesSchema}]),
  //Place all your imports here
   
  ],
  controllers: [NotesController],
  providers: [NotesService,]
})
export class NotesModule {}