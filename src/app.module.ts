import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { ServiseService } from './servise/servise.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@cluster0.hpzde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    TaskModule,
  ],
  controllers: [],
  providers: [ServiseService],
})
export class AppModule {}
