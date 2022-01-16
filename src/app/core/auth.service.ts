import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  isLoggedIn():boolean{
    const userLogged= localStorage.getItem('token')
    if(userLogged === null || ''){
      return false
    }else{
      return true
    }
  }
 
  login(form:Object):Observable<Object>{
    
    return this.http.post<Object>('http://challenge-react.alkemy.org/',form)
  }
}