import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit{
  constructor(private api: ApiService) { }
  
  form_data:any;
  teachers:any;
  id:any;
  login_data:any;

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.form_data = new FormGroup({
      login_id_id: new FormControl(),
      name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required])),
      mobile_no: new FormControl('', Validators.compose([Validators.required])),
      class_name: new FormControl('', Validators.compose([Validators.required])),
      div: new FormControl('', Validators.compose([Validators.required])),
      batch: new FormControl('', Validators.compose([Validators.required])),
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),
      security_question: new FormControl('', Validators.compose([Validators.required])),
      security_question_ans: new FormControl('', Validators.compose([Validators.required])),
      post: new FormControl('teacher'),
      flag: new FormControl('Y'),
      
    });
    this.api.get('teachers/').subscribe((res:any)=>{
      console.log(res);   
      this.teachers = res;
    })
  }

  add_teacher(){
    this.form_data.reset();
  }

  save(data:any){
    console.log(data);
    data.post = 'teacher'
    data.flag = 'Y'
    
    this.api.post('teachers/',data).subscribe((res:any)=>{
      console.log(res);
      this.load();
    })
  }

  edit(id:number){
    this.id = id;
    this.api.get('teachers/'+id).subscribe((res:any)=>{
      this.login_data = res.login;
      console.log(res);
      console.log(this.login_data);
      
      this.form_data.patchValue({
        login_id_id: res.login_id_id,
        name: res.name,
        email: res.email,
        mobile_no : res.mobile_no,
        class_name : res.class_name,
        div : res.div,
        batch : res.batch,
        username: this.login_data.username,
        password: this.login_data.password,
        security_question: this.login_data.security_question,
        security_question_ans: this.login_data.security_question_ans,
        flag: this.login_data.flag
      })
    })
    
    const modalElement = document.getElementsByClassName('teachers')[0];
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  }
  delete(id:number){}
}
