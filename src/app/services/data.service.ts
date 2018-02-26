import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UserPost } from '../components/user/userpost';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log( 'Data connected ');
   }

   getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map((response: Response) => {
      return <UserPost>response.json();
    });
  }
}
