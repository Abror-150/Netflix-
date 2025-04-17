import { HydratedDocument } from 'mongoose';
export type ActiorDocument = HydratedDocument<Actior>;
export declare class Actior {
    name: string;
    img: string;
}
export declare const ActiorSchema: import("mongoose").Schema<Actior, import("mongoose").Model<Actior, any, any, any, import("mongoose").Document<unknown, any, Actior> & Actior & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Actior, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Actior>> & import("mongoose").FlatRecord<Actior> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
