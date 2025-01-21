import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  stu_data:any = [];
  form_data:any;
  enrollment_no : any;
  roll_no : any;
  name : any;

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.form_data = new FormGroup({
      login_id_id: new FormControl(),
      class_name:new FormControl(''),
      div:new FormControl(''),
      batch:new FormControl(''),
      group_no:new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      // enrollment_no: new FormControl(''),
      // roll_no: new FormControl(''),
      // name: new FormControl(''),
      security_question: new FormControl(''),
      security_question_ans: new FormControl(''),
      post:new FormControl('student'),
      flag:new FormControl('P'),
    })
    
    this.Add(1);
  }

  Add(count:number){
    
    if(this.stu_data.length < 4){
      // this.stu_data.push(data);
      this.stu_data.push({
        enrollment_no:this.enrollment_no,
        roll_no:this.roll_no,
        name:this.name
      });
    }

    // this.enrollment_no = '';
    // this.roll_no = '';
    // this.name = '';
  }

  save(data:any){
    data['student_names'] = this.stu_data;
    data.post = 'student'
    data.flag = 'P'
    this.api.post('students/',data).subscribe((res:any)=>{
      console.log(res);
      // this.load();
    })
    console.log(data);
  }

}
