import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { OneService } from './one.service';

@Controller('one')
export class OneController {
    constructor(private readonly oneService: OneService){

    }

  // GET names
  @Get()
  getStudent(@Query('major') major: 'engineer' | 'med'){
    return this.oneService.getStudent(major)
  }

  //GET by id
  @Get(':id')
  getOneStudent(@Param('id') id: string){
    return this.oneService.getOneStudent(+id)
  }


  //POST names
  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto){
    return this.oneService.createStudent(createStudentDto)
  }


  //PUT by id
  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() updateStudentDto:UpdateStudentDto){
    return this.oneService.updateStudent(+id, updateStudentDto)
  }


  //DELETE by id
  @Delete(':id')
  removeStudent(@Param('id') id: string){
    return this.oneService.removeStudent(+id)
  }
}
