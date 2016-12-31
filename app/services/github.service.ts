import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id= '13ec106d94250cbeabd0';
  private client_secret= 'c7ebb7be71adb0bef547bd8049dd255b1ee7b647';

  constructor(private _http: Http){
    console.log('Github Service Ready....');
    this.username ='bradtraversy';
  }
  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
}
