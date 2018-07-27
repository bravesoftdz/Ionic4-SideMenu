import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private keyUser: string = 'CurrentUser';

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>('https://reqres.in/api/login', {email: username, password: password})
    .pipe(
      map((user) => {

        if(user && user.token) this.storage.set(this.keyUser, user);
        return user;
        
      })
    )
  }

  logout() {
    this.storage.remove(this.keyUser)
  }

}
