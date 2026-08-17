import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('one')
export class OneController {
  // GET names
  @Get()
  getStudent(@Query('major') major: string){
    return [
        {major}
    ]
  }

  //GET by id
  @Get(':id')
  getOneStudent(@Param('id') id: string){
    return {
        id
    }
  }


  //POST names
  @Post()
  createStudent(@Body() createStudentDto:CreateStudentDto){
    return {
        name: createStudentDto.name
    }
  }


  //PUT by id
  @Put(':id')
  createOneStudent(@Param('id') id: string, @Body() UpdateStudentDto:UpdateStudentDto){
    return {
        id,
        name: UpdateStudentDto
    }
  }


  //DELETE by id
  @Delete(':id')
  removeStudent(@Param('id') id: string){
    return {}
  }
}
