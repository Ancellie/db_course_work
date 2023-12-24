import {Injectable, NotFoundException, PipeTransform} from "@nestjs/common";
import {CreateSurveyDTO} from "../dto/CreateSurveyDTO";
import {UserRepository} from "../repositories/UserRepository";

@Injectable()
export class SurveyPipe implements PipeTransform {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}
    async transform(body: CreateSurveyDTO) {
        const user = await this.userRepository.getById(body.userId);

        if (!user) throw new NotFoundException('User with such id is not found');

        return body;
    }
}