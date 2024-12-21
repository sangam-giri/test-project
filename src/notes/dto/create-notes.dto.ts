import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsString} from 'class-validator';


export class CreateNotesDto{
    

@ApiProperty()
@IsNotEmpty()
@IsString()
readonly title:string;
@ApiProperty()
@IsNotEmpty()
@IsString()
readonly desc:string;

}