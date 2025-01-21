import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  {path:'',component:LandingComponent, children:[
    {path:'prodetails' , component:ProjectDetailsComponent},
    {path:'verifystu' , component:VerifyStudentComponent},
    {path:'newmessage' , component:AssignTaskComponent},
    {path:'chat' , component:ChatboxComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
