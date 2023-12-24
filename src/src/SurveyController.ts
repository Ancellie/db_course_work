import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {SurveyService} from "./SurveyService";
import {CreateSurveyDTO} from "./dto/CreateSurveyDTO";
import {SurveyPipe} from "./pipes/SurveyPipe";
import {SurveyByIdPipe} from "./pipes/SurveyByIdPipe";
import {UpdateSurveyDTO} from "./dto/UpdateSurveyDTO";

@Controller('/survey')
export class SurveyController {
    constructor(private readonly surveyService: SurveyService) {
    }

    @Post()
    create(@Body(SurveyPipe) body: CreateSurveyDTO) {
        return this.surveyService.create(body)

    }

    @Get('/:surveyId')
    getById (
        @Param('surveyId', SurveyByIdPipe) surveyId: number
    ) {
        return this.surveyService.getById(surveyId);
    }

    @Patch('/:surveyId')
    update (
        @Param('surveyId', SurveyByIdPipe) surveyId: number,
        @Body() body: UpdateSurveyDTO,
    ) {
        return this.surveyService.updateById(surveyId, body);
    }

    @Delete('/:surveyId')
    deleteById (
        @Param('surveyId', SurveyByIdPipe) surveyId: number,
    ) {
        return this.surveyService.deleteById(surveyId);
    }
}