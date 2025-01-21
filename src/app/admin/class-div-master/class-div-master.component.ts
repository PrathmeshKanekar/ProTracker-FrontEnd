import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-div-master',
  templateUrl: './class-div-master.component.html',
  styleUrls: ['./class-div-master.component.css']
})
export class ClassDivMasterComponent implements OnInit {

  id: any;
  classdata: any;
  divdata: any;
  batchdata: any;
  class_list: any;
  div_list: any;
  batch_list: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.id = 0;
    this.api.get('class/').subscribe((res: any) => {
      // res.sort((a:any, b:any) => a.id - b.id);   //ascending
      // res.sort((a:any, b:any) => b.id - a.id);   //descending
      // res.sort((a:any, b:any) => a.class_name.localeCompare(b.class_name));
      this.class_list = res.filter((item: any) => item.flag === "active");  //active
      this.class_list = res;
      console.log(res);
    })
    this.api.get('div/').subscribe((res: any) => {
      this.div_list = res;
      console.log(res);
    })
    this.api.get('batch/').subscribe((res: any) => {
      this.batch_list = res;
      console.log(res);
    })
    this.classdata = new FormGroup({
      class_name: new FormControl('', Validators.compose([Validators.required])),
      flag: new FormControl('active')
    });
    this.divdata = new FormGroup({
      div_name: new FormControl('', Validators.compose([Validators.required])),
      flag: new FormControl('active')
    });
    this.batchdata = new FormGroup({
      batch_name: new FormControl('', Validators.compose([Validators.required])),
      flag: new FormControl('active')
    });
  }

  class_submit(data: any) {
    const isDuplicate = this.class_list.some((res: any) => res.class_name === data.class_name);
    const isDuplicateid = this.class_list.some((res: any) => res.id === data.id);
    console.log("1");

    if (isDuplicate && !isDuplicateid) {
      alert("Duplicate class name found");
      return;
    }
    if (this.id != 0) {
      this.api.put('class/' + this.id + '/', data).subscribe((res: any) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        this.load();
      })
    }
    else {
      if (!isDuplicate) {
        this.api.post('class/', data).subscribe((res: any) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.load();
        })
      }
    }
  }
  div_submit(data: any) {
    const isDuplicate = this.div_list.some((res: any) => res.div_name === data.div_name);
    const isDuplicateid = this.div_list.some((res: any) => res.id === data.id);

    if (isDuplicate && !isDuplicateid) {
      alert("Duplicate class name found");
      return;
    }
    if (this.id != 0) {
      this.api.put('div/' + this.id + '/', data).subscribe((res: any) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        this.load();
      })
    }
    else {
        if (!isDuplicate) {
        this.api.post('div/', data).subscribe((res: any) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.load();
        })
      }
    }

  }
  batch_submit(data: any) {
    const isDuplicate = this.batch_list.some((res: any) => res.batch_name === data.batch_name);
    const isDuplicateid = this.batch_list.some((res: any) => res.id === data.id);

    if (isDuplicate && !isDuplicateid) {
      alert("Duplicate class name found");
      return;
    }

    if (this.id != 0) {
      this.api.put('batch/' + this.id + '/', data).subscribe((res: any) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been Updated",
          showConfirmButton: false,
          timer: 1500
        });
        this.load();
      })
    }
    else {
        if (!isDuplicate) {
        this.api.post('batch/', data).subscribe((res: any) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.load();
        })
      }
    }

  }

  data_delete(api: any, id: number) {
    this.api.delete(api + '/' + id + '/').subscribe((res: any) => {
      console.log(res);
      this.load();
    })
  }
  edit(api: any, data: any) {
    this.id = data.id;
    if (api == 'class') {
      this.classdata.patchValue({
        class_name: data.class_name,
        flag: data.flag
      })
    }
    else if (api == 'div') {
      this.divdata.patchValue({
        div_name: data.div_name,
        flag: data.flag
      })
    }
    else if (api == 'batch') {
      this.batchdata.patchValue({
        batch_name: data.batch_name,
        flag: data.flag
      })
    }
  }

  status(api: any, data: any, status: any) {
    this.id = data.id;

    let flag;
    if (status == 'A') {
      data.flag = 'active'
    }
    else if (status == 'D') {
      data.flag = 'deactive'
    }

    console.log(data);

    if (api == 'class') {
      this.class_submit(data);
      console.log("ji");

    }
    else if (api == 'div') {
      this.div_submit(data);
    }
    else if (api == 'batch') {
      this.batch_submit(data);
    }

  }

}
