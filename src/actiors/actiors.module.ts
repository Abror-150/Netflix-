import { Module } from '@nestjs/common';
import { ActiorsService } from './actiors.service';
import { ActiorsController } from './actiors.controller';
import { Actior, ActiorSchema } from './entities/actior.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Actior.name, schema: ActiorSchema }]),
  ],
  controllers: [ActiorsController],
  providers: [ActiorsService],
})
export class ActiorsModule {}
