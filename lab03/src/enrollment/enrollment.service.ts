import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

@Injectable()
export class EnrollmentService {}
=======
import { CourseService } from '../course/course.service';

@Injectable()
export class EnrollmentService {
    constructor(private courseService: CourseService) {}

  enrollStudent(studentName: string, courseId: string) {
    const course = this.courseService.getCourseById(courseId);

    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course,
    };
  }

  getEnrollments() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }
}
>>>>>>> lab-task-03
