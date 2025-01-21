import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ClassDivMasterComponent } from './class-div-master/class-div-master.component';

const routes: Routes = [
  {path:'',component:LandingComponent, children:[
    {path:'teachers' , component:AddTeacherComponent},
    {path:'classmaster' , component:ClassDivMasterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
