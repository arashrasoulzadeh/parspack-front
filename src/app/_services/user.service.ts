import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { AuthenticationService } from './authentication.service';
import { Process } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,private auth: AuthenticationService) { }

  
    getAll() {
         return this.http.get<Process[]>(`${environment.apiUrl}/api/ps`,{headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.auth.token
          })});
        
    }
    getFiles(){
        return this.http.get(`${environment.apiUrl}/api/file/list/files`,{headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.auth.token
          })});
    }
    createFile(name){
        return this.http.post(`${environment.apiUrl}/api/file/create/file`,{
            name
        },{headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.auth.token
          })});
    }
    createDirectory(name){
        return this.http.post(`${environment.apiUrl}/api/file/create/directory`,{
            name
        },{headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.auth.token
          })});
    }
    getDirectories(){
        return this.http.get(`${environment.apiUrl}/api/file/list/directories`,{headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.auth.token
          })});
    }
}