import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpreqService implements OnInit{

  constructor(private httpClient: HttpClient) {
    this.ngOnInit();
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(){
    
  }

  getService(){
    this.httpClient.get('http://localhost:3000/posts')
    .subscribe( (data) => {
      console.log(data);
    // tslint:disable-next-line:semicolon
    })
  }
}
