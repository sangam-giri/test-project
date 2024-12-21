import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'notes',
  timestamps: true,
})
export class Notes {
    
@Prop()
title: string;

@Prop()
desc: string;

}
export const NotesSchema = SchemaFactory.createForClass(Notes);
