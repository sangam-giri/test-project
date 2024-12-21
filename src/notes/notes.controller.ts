import { Body, Controller,Delete,Get,Param,Post, Put,Req,  } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Notes } from './schema/notes.schema';
import { UpdateNotesDto } from './dto/update-notes.dto';
import { CreateNotesDto } from './dto/create-notes.dto';


@Controller('notes')
export class NotesController {
    constructor (private notesService:NotesService,){
    }

  @Get('all-notes')
    async getAllNotes():Promise<Notes[]>{
        return this.notesService.findAll()
    }
   

  @Post('add-notes')
async createNotes(
        @Body()
        notes:CreateNotesDto): Promise<{ statusCode: number; message: string; data: Notes }>{

    return this.notesService.create(notes,);
    }
    

  @Get(':id')
    async getNotes(
        @Param('id') id:string
    ):Promise<Notes>{
        return this.notesService.findById(id);
    }

      

     @Put(':id')
    async updateNotes(
        @Param('id')
        id:string,
        @Body()
         notes:UpdateNotesDto):Promise<Notes>{
    return this.notesService.updateById(id,notes);
    }
   
     @Delete(':id')
     
    async deleteNotes(
        @Param('id') id:string
    ): Promise<{ statusCode: number; message: string }>{
        return this.notesService.deleteById(id);
    }
}