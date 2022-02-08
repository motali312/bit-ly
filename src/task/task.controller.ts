import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { FindOneTaskDto } from './dto/find-one.dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor (private readonly servise: TaskService) {}

  @Get()
  @ApiOkResponse({ type: [CreateTaskDto] })
  async findAll() {
    return await this.servise.findAll()
  }

  @Get(':id')
  @ApiNotFoundResponse()
  @ApiBadRequestResponse({ description: 'Validation issues'})
  async findOne(@Param() { id }: FindOneTaskDto) {
    return await this.servise.findOne(id)
  }

  @Post()
  @ApiCreatedResponse({ type: CreateTaskDto })
  @ApiConflictResponse({ description: 'Task already exist' })
  async create(@Body() dto: CreateTaskDto) {
    return await this.servise.create(dto)
  }

  @Put(':id')
  @ApiNotFoundResponse({ type: CreateTaskDto })
  async update(
    @Param() { id }: FindOneTaskDto,
    @Body() dto: UpdateTaskDto,
  ) {
    return await this.servise.update(id, dto)
  }

  @Delete(':id')
  @ApiNotFoundResponse({ type: CreateTaskDto})
  async remove(@Param() { id }: FindOneTaskDto) {
    return await this.servise.delete(id)
  }
}