import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  {path:'',component:LandingComponent, children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"regform", component:RegistrationFormComponent},
    {path:"prodetail", component:ProjectdetailsComponent},
    {path:"chat", component:ChatboxComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
