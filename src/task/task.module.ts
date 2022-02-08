import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskEntity, TaskSchema } from './entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TaskEntity.name, schema: TaskSchema }]),
  ],

  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
