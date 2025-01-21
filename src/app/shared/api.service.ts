import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl="http://127.0.0.1:8000/api/";
  constructor(private http:HttpClient) {}

  get(api: string) {
    //console.log(this.baseurl + api);    
    return this.http.get(this.baseurl + api)
  };

  post(api: string, data: any) {
    return this.http.post(this.baseurl + api, data)
  };

  put(api: string, data: any) {
    return this.http.put(this.baseurl + api, data)
  };

  delete(api: string) {
    return this.http.delete(this.baseurl + api)
  };


  getStudents(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  get_localstorage(key:string){
    return JSON.parse(localStorage.getItem(key) || '[]');
  }


  public loadJsFile(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    });
  }
}
