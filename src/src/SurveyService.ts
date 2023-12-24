import {Injectable} from "@nestjs/common";
import {SurveyRepository} from "./repositories/SurveyRepository";
import {CreateSurveyDTO} from "./dto/CreateSurveyDTO";
import {UpdateSurveyDTO} from "./dto/UpdateSurveyDTO";

@Injectable()
export class SurveyService{
    constructor(private readonly surveyRepository: SurveyRepository) {}

    create(body: CreateSurveyDTO){
        return this.surveyRepository.create(body)
    }

    getById (id: number) {
        return this.surveyRepository.getById(id);
    }

    updateById (id: number, body: UpdateSurveyDTO) {
        return this.surveyRepository.updateById(id, body);
    }

    deleteById (id: number) {
        return this.surveyRepository.deleteById(id);
    }
}