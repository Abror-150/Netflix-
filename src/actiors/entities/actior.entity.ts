import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActiorDocument = HydratedDocument<Actior>;

@Schema()
export class Actior {
  @Prop()
  name: string;
  @Prop()
  img: string;
}

export const ActiorSchema = SchemaFactory.createForClass(Actior);
