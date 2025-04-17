import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Rolee } from '../enum/en';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  role: Rolee;
}

export const UserSchema = SchemaFactory.createForClass(User);
