import {IsEnum, IsNumber, IsOptional, IsString} from "class-validator";
import {SurveyState} from "@prisma/client";

export class UpdateSurveyDTO {
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsNumber()
    @IsOptional()
    userId?: number
    @IsEnum(SurveyState)
    @IsOptional()
    state?: SurveyState
}