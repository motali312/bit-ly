import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { TaskEntity } from './entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskEntity.name)
    private readonly entity: Model<TaskEntity>,
  ) {}

  async findAll() {
    return await this.entity.find(
      // { date: { $gt: new Date }},
      null,
    )
  }

  async findOne(id: string) {
    const task = await this.entity.findById(id);
    if (!task) {
      throw new NotFoundException();
    }
    return task
  }

  async create(dto: CreateTaskDto) {
    const { title } = dto
    const exist = await this.entity.findOne({
      title
    })
    if (exist) {
      throw new ConflictException()
    }
    return await this.entity.create(dto)
  }
  async update(id: string, dto: UpdateTaskDto) {
    const task = await this.findOne(id)

    Object.assign(task, dto)
    return await task.save()
  }
  async delete(id: string) {
    // const task = await this.delete(id)
    return await this.entity.findByIdAndDelete(id)
  }
}
