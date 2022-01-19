import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroResponse } from '../interface/heroResponse';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  urlBase ='https://superheroapi.com/api/5320557181308017/';
  parameters: HeroResponse []=[];
  constructor(private http:HttpClient) { }
 //data que se va a cargar antes de iniciar la aplicación
  getHeroes(num:number):any{
    for(let i=1;i<=num;i++){
       this.http.get(this.urlBase+i).toPromise().then((response:any)=> {
        this.parameters.push(response);
      
      });
    }
  }

 
}
