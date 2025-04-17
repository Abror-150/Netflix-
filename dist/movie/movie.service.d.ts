import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { Model } from 'mongoose';
export declare class MovieService {
    private readonly movie;
    constructor(movie: Model<Movie>);
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
