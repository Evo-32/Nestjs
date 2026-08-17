import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class OneService {
  private students = [
    { id: 1, name: 'alice', major: 'engineer' },
    { id: 2, name: 'doe', major: 'med' },
  ];

  // Get all students or filter by major
  getStudent(major?: 'engineer' | 'med') {
    if (major) {
      return this.students.filter((student) => student.major === major);
    }

    return this.students;
  }

  // Get one student by ID
  getOneStudent(id: number) {
    const student = this.students.find((student) => student.id === id);

    if (!student) {
      throw new Error('student not found');
    }

    return student;
  }

  // Create a new student
  createStudent(createStudentDto: CreateStudentDto) {
    const newStudent = {
      ...createStudentDto,
      id: Date.now(),
    };

    this.students.push(newStudent);

    return newStudent;
  }

  // Update a student by ID
  updateStudent(id: number, updateStudentDto: UpdateStudentDto) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          ...updateStudentDto,
        };
      }

      return student;
    });

    return this.getOneStudent(id);
  }

  // Remove a student by ID
  removeStudent(id: number) {
    const toBeRemoved = this.getOneStudent(id);

    this.students = this.students.filter((student) => student.id !== id);

    return toBeRemoved;
  }
}
