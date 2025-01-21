import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router,private authService:AuthService) { }
  formdata: any;

  ngOnInit(): void {
    let data = this.api.get_localstorage('login_details')
    if(this.authService.isLoggedIn()){
      this.router.navigate([data.post]);
    }
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  login(data: any) {
    if (data.username == '' && data.password == '') { 
      alert('Please enter both username and password');
    }
    else{

      let result = this.authService.login(data);
      this.authService.login(data).subscribe((result: any) => {
        console.log(result);
        
        if (result.login_details.flag == 'Y') {
          this.router.navigate([result.login_details.post]);
          localStorage.setItem('login_details', JSON.stringify(result.login_details));
          localStorage.setItem('user_details', JSON.stringify(result.user_details));
          this.authService.setToken(result.login_details.token);
        }
        else if(result.login_details.flag == 'P') {
          alert('Your are not Verified');

        }
        else if(result.login_details.flag == 'R') {
          alert('You are not authorized ');
        }
        else {
          alert('Invalid username or password');
        }
      },
        (error: any) => {
  
          alert(error.status + " " + error.statusText);
          console.log(error);
  
        });
    }
  
  }
}
