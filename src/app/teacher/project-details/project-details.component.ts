import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  Project_data:any;
  imgshow:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.Project_data = this.api.get_localstorage('Project_data');
    this.load()
    
  }


  load(){
    
    this.api.get('projectdata/').subscribe((res: any) => {
      console.log(res);
      this.Project_data = res;
    })
  }

  deletedata(id:any){

    this.api.delete('projectdata/'+id+'/').subscribe((res: any) => {
      console.log(res);
     this.load()
    })

  }

   

  // @ViewChild('imageFrame') imageFrame!: ElementRef; 
  // openImageInIframe(imageData: string) { 
  //   const imageUrl = `data:image/png;base64,${imageData}`;
  //    this.imageFrame.nativeElement.src = imageUrl;
  //    }
}