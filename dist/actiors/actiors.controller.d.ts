import { ActiorsService } from './actiors.service';
import { CreateActiorDto } from './dto/create-actior.dto';
import { UpdateActiorDto } from './dto/update-actior.dto';
export declare class ActiorsController {
    private readonly actiorsService;
    constructor(actiorsService: ActiorsService);
    create(createActiorDto: CreateActiorDto): Promise<any>;
    findAll(query: any): Promise<{
        total: number;
        page: number;
        limit: number;
        data: (import("mongoose").FlattenMaps<{
            name: string;
            img: string;
        }> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        message?: undefined;
        error?: undefined;
    } | {
        message: string;
        error: any;
        total?: undefined;
        page?: undefined;
        limit?: undefined;
        data?: undefined;
    }>;
    findOne(id: string): Promise<any>;
    update(id: string, updateActiorDto: UpdateActiorDto): Promise<any>;
    remove(id: string): Promise<any>;
}
