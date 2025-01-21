import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  data:any;

  constructor(){}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('login_details') || ''); 
  }

}
