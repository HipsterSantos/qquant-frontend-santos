import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Forums } from './forums.model';
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private endpoint = 'http://localhost:3000/forums';
  list: Forums[] = [];
  constructor(private httpReq: HttpClient){
    this.fetchForumsData();

  }

  fetchForumsData(){
    return this.httpReq.get<Forums[]>(this.endpoint)
    .pipe(
      map( forums => {
        return forums.map( forum => {
          this.list.push(forum);
          return {
            ...forum
          }
        })
      }
    ),
    tap(forums => {
      console.log(forums,'data from tap')
      // this.list = forums;
    })
    )
  }

  getList(){
    return this.list;
  }

}
