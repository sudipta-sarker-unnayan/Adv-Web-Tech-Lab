import { Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
<<<<<<< HEAD

@Module({
=======
import { CourseModule } from '../course/course.module';
@Module({
  imports: [CourseModule],
>>>>>>> lab-task-03
  controllers: [EnrollmentController],
  providers: [EnrollmentService]
})
export class EnrollmentModule {}
