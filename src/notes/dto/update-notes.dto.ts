import { IsOptional,IsString} from 'class-validator';

import { IntersectionType } from '@nestjs/swagger';
import { CreateNotesDto } from './create-notes.dto';

export class UpdateNotesDto extends IntersectionType(CreateNotesDto) {
    

@IsOptional()
@IsString()
readonly title:string;
@IsOptional()
@IsString()
readonly desc:string;

}