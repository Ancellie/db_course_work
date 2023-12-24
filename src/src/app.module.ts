import { Module } from '@nestjs/common';
import {SurveyController} from "./SurveyController";
import {SurveyService} from "./SurveyService";
import {PrismaModule} from "./PrismaModule";
import {SurveyPipe} from "./pipes/SurveyPipe";
import {SurveyByIdPipe} from "./pipes/SurveyByIdPipe";

@Module({
  imports: [PrismaModule],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyPipe, SurveyByIdPipe],
})
export class AppModule {}
