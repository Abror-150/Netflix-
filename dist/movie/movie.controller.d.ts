import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(createMovieDto: CreateMovieDto): Promise<any>;
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
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<any>;
    remove(id: string): Promise<any>;
}
