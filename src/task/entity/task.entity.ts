import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITask } from '../interface';

@Schema()
export class TaskEntity implements ITask {
  @Prop({
    type: String,
    required: true,
  })
  title: string;
  // date: string

  @Prop({
    type: String,
    required: false,
  })
  description?: string;

  @Prop({
    type: Date,
    required: true,
  })
  date: string;
}

export const TaskSchema = SchemaFactory.createForClass(TaskEntity);
