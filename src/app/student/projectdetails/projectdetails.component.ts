import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { Validators } from '@angular/forms';
import { ImageUploadServiceService } from 'src/app/shared/image-upload-service.service';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  projectdetails!: FormGroup; // Using definite assignment assertion
  base64textString: string = '';
  imgstr:any='';

  constructor(
    private api: ApiService,
    private imageUploadService: ImageUploadServiceService,
    private imageCompress: NgxImageCompressService,
    private uploadService: ApiService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.projectdetails = new FormGroup({
      group_no: new FormControl('', Validators.compose([Validators.required])),
      image_data: new FormControl('', Validators.compose([Validators.required])),
      details: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  submit(data: any) {
    data.image_data = this.base64textString; // Assign base64 string to image_data
    console.log(data);
    this.api.post("projectdata/", data).subscribe((result: any) => {
      console.log(result);
    });
  }

  handleFileSelect(evt: Event) {
    const target = evt.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    const binaryString = readerEvt.target.result as string;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);
  }

}
