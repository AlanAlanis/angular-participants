import { Injectable } from '@angular/core';
import { Participant } from './model/participant';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParticipantDataService {

  arrparticipants: Participant[];
  
  urlWebAPI = "http://localhost:52070/api/participants/";
  
  headers: Headers =  new Headers({
    'Content-Type': 'application/json',
    'Allow': 'OPTIONS, GET, POST, DELETE'
  });
options = new RequestOptions({headers: this.headers});
body = {}

  
 constructor(
   private _http: Http
 ) { this.arrparticipants = []; }

  getParticipants(): Observable <Participant[]> {
    let observableParticipants = 
      this._http.get(this.urlWebAPI).pipe(
      map(
        (response:Response) => <Participant[]>response.json()
      )
    ); 
    return observableParticipants;
  }

putParticipant(participant1: Participant): Observable<any> {
  this.body = { 
    "initials":participant1.strInitials,
    "name":participant1.strName,
    "address":participant1.strAddress,
    "preferredLanguage":participant1.strPreferredLanguage
  }
  console.log(participant1);
  let observableAny = 
    this._http.post(this.urlWebAPI, this.body, this.options)
    .pipe(map((response:Response) => response.json()
  ));
    return observableAny;
}

deleteParticipants(initials: string): Observable <Participant[]> {
  console.log(initials)
  let observableParticipants = 
    this._http.delete(this.urlWebAPI + initials).pipe(
    map(
      (response:Response) => <Participant[]>response.json()
    )
  ); 
  return observableParticipants;
}
  
}
