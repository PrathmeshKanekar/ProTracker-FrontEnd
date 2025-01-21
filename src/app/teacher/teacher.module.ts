import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { FormsModule } from '@angular/forms';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ChatboxComponent } from './chatbox/chatbox.component';


@NgModule({
  declarations: [
    LandingComponent,
    ProjectDetailsComponent,
    VerifyStudentComponent,
    AssignTaskComponent,
    ChatboxComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TeacherModule { }
