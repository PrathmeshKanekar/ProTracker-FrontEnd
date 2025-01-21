import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-verify-student',
  templateUrl: './verify-student.component.html',
  styleUrls: ['./verify-student.component.css']
})
export class VerifyStudentComponent implements OnInit {

  students: any;
  user_details: any;
  flag:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.user_details = this.api.get_localstorage('user_details');
    this.load();
    this.changeFlag({ target: { value: 'P' } });
  }

  load() {
    
  }
  changeFlag(event:any){
    this.students = [];
    this.flag = event.target.value;
    this.api.get('students/get_students/' + this.flag + '/' + this.user_details.id + '/').subscribe((res: any) => {
      console.log(res);
      this.students = res;
    },
    (error:any)=>{
      this.students = [];
    })
  }


  Verify_Status(id: any, status: any) {
    let data
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].login.id == id)
        {
          data = this.students[i].login;
          data.flag = status;
          this.api.put('login/' + id + '/', data).subscribe((res: any) => {
            this.load();
          })
        }
      }
    }


}

