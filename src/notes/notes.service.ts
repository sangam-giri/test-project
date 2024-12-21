import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import {Notes} from './schema/notes.schema';
import { CreateNotesDto } from './dto/create-notes.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(Notes.name)
        private notesModel: mongoose.Model<Notes>
    ) {}

  async findAll(): Promise<Notes[]> {
const notes = await this.notesModel.find();
        return notes;
    }

  async create(notes: CreateNotesDto,): Promise<{ statusCode: number; message: string; data: Notes }> {
const  res = await  this.notesModel.create(notes);
        return {
        statusCode: 201,
        message: 'Created Successfully!',
        data: res,
        };
    }

    

  async findById(id: string): Promise<Notes> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            throw new NotFoundException('Please enter correct id');
        }
        const notes = await this.notesModel.findById(id);

        if (!notes) {
            throw new NotFoundException('Not found !');
        }
        return notes;
    }

      

  async updateById(id: string, notes: UpdateNotesDto): Promise<Notes> {
        return await this.notesModel.findByIdAndUpdate(id, notes, {
            new: true,
            runValidators: true
        });
    }

  async deleteById(id: string): Promise<{ statusCode: number; message: string }> {
         await this.notesModel.findByIdAndDelete(id);
         return {
         "statusCode": 204,
         "message": "Successfully Deleted"
         };
    }
}