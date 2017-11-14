import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {famMembers} from "./familyData";
/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {
  public people ;
  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
    let myPeople = famMembers;
    this.people = myPeople ;
  }

  getPeople(){
    return this.people;
  }

}
