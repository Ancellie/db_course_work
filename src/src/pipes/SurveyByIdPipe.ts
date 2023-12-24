import {Injectable, NotFoundException, PipeTransform} from "@nestjs/common";
import {SurveyRepository} from "../repositories/SurveyRepository";
@Injectable()
export class SurveyByIdPipe implements PipeTransform {
    constructor(
        private readonly surveyRepository: SurveyRepository,
    ) {}
    async transform(surveyId: number) {
        const survey = await this.surveyRepository.getById(+surveyId);

        if (!survey) throw new NotFoundException('Survey with such id is not found');

        return +surveyId;
    }
}