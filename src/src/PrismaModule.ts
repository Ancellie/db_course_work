import {Module} from "@nestjs/common";
import {PrismaService} from "./PrismaService";
import {SurveyRepository} from "./repositories/SurveyRepository";
import {UserRepository} from "./repositories/UserRepository";

@Module({
    providers:[PrismaService, SurveyRepository, UserRepository],
    exports:[PrismaService, SurveyRepository, UserRepository]
})

export class PrismaModule{}