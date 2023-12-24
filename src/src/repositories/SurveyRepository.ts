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