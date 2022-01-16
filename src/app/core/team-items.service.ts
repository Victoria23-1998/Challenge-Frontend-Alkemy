import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroResponse } from '../interface/heroResponse';
@Injectable({
  providedIn: 'root'
})
export class TeamItemsService {

  urlBase ='https://superheroapi.com/api/5320557181308017/';

  constructor(private http:HttpClient) { }
  
  getHeroForName(form:Object):Observable<HeroResponse>{
    
    return this.http.get<HeroResponse>('http://challenge-react.alkemy.org/')
  }
  
  getHeroList(id:number):Observable<HeroResponse>{
    return this.http.get<HeroResponse>(this.urlBase+id);
  }
}
