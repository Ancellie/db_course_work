# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

    -- MySQL Workbench Forward Engineering

    SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
    SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
    SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------

    -- -----------------------------------------------------
    -- Schema mydb
    -- -----------------------------------------------------
    CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
    USE `mydb` ;

    -- -----------------------------------------------------
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Role`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Survey`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Survey` (
    `id` INT NOT NULL,
    `title` MEDIUMTEXT NULL,
    `description` LONGTEXT NULL,
    `created` DATE NULL,
    `User_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`),
    INDEX `fk_Survey_User1_idx` (`User_id` ASC) VISIBLE,
    CONSTRAINT `fk_Survey_User1`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Question`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `type` TINYTEXT NULL,
    `Survey_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`),
    INDEX `fk_Question_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    CONSTRAINT `fk_Question_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Answer`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Answer` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `User_id` INT NOT NULL,
    `Question_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`, `Question_id`),
    INDEX `fk_Answer_User_idx` (`User_id` ASC) VISIBLE,
    INDEX `fk_Answer_Question1_idx` (`Question_id` ASC) VISIBLE,
    CONSTRAINT `fk_Answer_User`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Answer_Question1`
        FOREIGN KEY (`Question_id`)
        REFERENCES `mydb`.`Question` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Permission`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
    `id` INT NOT NULL,
    `name` TINYTEXT NOT NULL,
    PRIMARY KEY (`id`, `name`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Grant`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
    `id` INT NOT NULL,
    `appointed` DATE NULL,
    `Role_id` INT NOT NULL,
    `Permission_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`, `Permission_id`),
    INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
    INDEX `fk_Grant_Permission1_idx` (`Permission_id` ASC) VISIBLE,
    CONSTRAINT `fk_Grant_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Grant_Permission1`
        FOREIGN KEY (`Permission_id`)
        REFERENCES `mydb`.`Permission` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`State`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`State` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Action`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Action` (
    `id` INT NOT NULL,
    `date` DATE NULL,
    `Survey_id` INT NOT NULL,
    `State_id` INT NOT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`, `State_id`, `Role_id`),
    INDEX `fk_Action_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
    INDEX `fk_Action_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_Action_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_State1`
        FOREIGN KEY (`State_id`)
        REFERENCES `mydb`.`State` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
        ENGINE = InnoDB;

    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці Survey створеної в MySQL 
було створено за допомогою фреймворку Spring Boot на мові Java. 
RESTfull API представляє собою CRUD застосунок. 

### Файли для сутностей

```
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
```
```
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
```

### Підключення бази даних

```
  generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model RoleHasPermission {
  appointed     DateTime   @updatedAt @default(now())
  roleId        Int        @map("role_id")
  permissionId  Int        @map("permission_id")
  permission    Permission @relation(fields: [permissionId], references: [id], onDelete: Cascade)
  role          Role       @relation(fields: [roleId], references: [id], onDelete: Cascade)
  @@map("role_has_permission")
  @@id([roleId, permissionId])
}

model Permission {
  id      Int                     @id @default(autoincrement())
  name    String
  roles   RoleHasPermission[]
  @@map("permission")
}

model AnswerVariant {
  id            Int       @id @default(autoincrement())
  text          String
  question      Question  @relation(fields: [questionId], references: [id], onDelete: Cascade)
  questionId    Int       @map("question_id")
  answers       Answer[]
  @@map("answer_variant")
}

model Question {
  id                Int                @id @default(autoincrement())
  text              String
  surveyId         Int                 @map("survey_id")
  survey            Survey             @relation(fields: [surveyId], references: [id], onDelete: Cascade)
  answerVariants   AnswerVariant[]
  @@map("question")
}

model Role {
  id            Int                     @id @default(autoincrement())
  name          String
  permissions   RoleHasPermission[]
  users         User[]
  @@map("role")
}

enum SurveyState {
  OPENED
  CLOSED
  PAUSED
}

model Survey {
  id             Int              @id @default(autoincrement())
  title          String
  description    String?
  created        DateTime         @default(now())
  userId        Int              @map("user_id")
  state          SurveyState      @default(OPENED)
  questions      Question[]
  passedSurvey  PassedSurvey[]
  user           User             @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@map("survey")
}

model PassedSurvey {
  id         Int          @id @default(autoincrement())
  survey     Survey       @relation(fields: [surveyId], references: [id], onDelete: Cascade)
  surveyId  Int          @map("survey_id")
  passed     DateTime     @default(now())
  user       User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    Int           @map("user_id")
  answers    Answer[]
  @@map("passedSurvey")
}

model Answer {
  id                  Int               @id @default(autoincrement())
  variant             AnswerVariant     @relation(fields: [variantId], references: [id], onDelete: Cascade)
  variantId          Int               @map("variant_id")
  passedSurveyId    Int               @map("passed_survey_id")
  survey              PassedSurvey      @relation(fields: [passedSurveyId], references: [id], onDelete: Cascade)
  @@map("answer")
}

model User {
  id              Int      @id @default(autoincrement())
  firstname       String
  lastname        String
  nickname        String
  email           String
  password        String
  roleId         Int       @map("role_id")
  passedSurveys  PassedSurvey[]
  surveys         Survey[]
  role            Role     @relation(fields: [roleId], references: [id], onDelete: Cascade)
  @@map("user")
}


```

### Основний клас для запуску API
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

```

### Контролер для роботи з опитуваннями

```
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
```

### Репозиторій для роботи з опитуванняи

```
import {Injectable} from "@nestjs/common";
import {PrismaService} from "../PrismaService";
import {Prisma} from "@prisma/client";

@Injectable()
export class SurveyRepository{
    constructor(private readonly prismaService: PrismaService) {}
    create(data: Prisma.SurveyUncheckedCreateInput){
        return this.prismaService.survey.create({data})
    }

    getById (id: number) {
        return this.prismaService.survey.findUnique({
            where: {
                id,
            },
        });
    }

    updateById (id: number, data: Prisma.SurveyUncheckedUpdateInput) {
        return this.prismaService.survey.update({
            where: {
                id,
            },
            data,
        });
    }

    deleteById (id: number) {
        return this.prismaService.survey.delete({
            where: {
                id,
            },
        });
    }
}
```
### Репозиторій для роботи з користувачем
```
import {Injectable} from "@nestjs/common";
import {PrismaService} from "../PrismaService";

@Injectable()
export class UserRepository {
    constructor (
        private readonly prismaService: PrismaService,
    ) {}

    getById (id: number) {
        return this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
    }
}
```
### Сервіс для роботи з опитуваннями

```
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
```

### Виняткові ситуації, які можуть виникнути

```
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
```

```
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
```