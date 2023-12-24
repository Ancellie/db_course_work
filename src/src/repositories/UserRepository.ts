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