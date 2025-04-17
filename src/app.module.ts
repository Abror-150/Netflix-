import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ActiorsModule } from './actiors/actiors.module';
import { MovieModule } from './movie/movie.module';
import { MulterController } from './multer/multer.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-howw'),
    UserModule,
    ActiorsModule,
    MovieModule,
  ],
  controllers: [AppController, MulterController],
  providers: [AppService],
})
export class AppModule {}
