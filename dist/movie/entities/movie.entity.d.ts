import { HydratedDocument } from 'mongoose';
export type MovieDocument = HydratedDocument<Movie>;
export declare class Movie {
    name: string;
    img: string;
}
export declare const MovieSchema: import("mongoose").Schema<Movie, import("mongoose").Model<Movie, any, any, any, import("mongoose").Document<unknown, any, Movie> & Movie & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Movie, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Movie>> & import("mongoose").FlatRecord<Movie> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
