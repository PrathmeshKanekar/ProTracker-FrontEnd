import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  data:any;
  constructor(private authService:AuthService,private api:ApiService){}
  
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data') || '[]');
    this.api.loadJsFile('../../shared/api.service.ts');
    // this.api.loadScript('../../../assets/js/app.js').then(() => {
    //   console.log('Script loaded successfully');
    // });
  }

  logout(){
    this.authService.logout();
  }



}
