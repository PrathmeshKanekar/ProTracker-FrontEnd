import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatboxComponent } from './chatbox/chatbox.component';


@NgModule({
  declarations: [
    LandingComponent,
    RegistrationFormComponent,
    ProjectdetailsComponent,
    DashboardComponent,
    ChatboxComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
