import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
<<<<<<< HEAD
=======
   exports: [CourseService],
>>>>>>> lab-task-03
})
export class CourseModule {}