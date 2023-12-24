import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {SurveyState} from "@prisma/client";
export class CreateSurveyDTO{
    @IsString()
    @IsNotEmpty()
    title: string
    @IsString()
    @IsOptional()
    description?: string
    @IsNumber()
    @IsNotEmpty()
    userId: number
    @IsEnum(SurveyState)
    @IsOptional()
    state?: SurveyState
}