import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data.json');
  }

  getUserDetails(id: string): Observable<any> {
    return this.http.get<any[]>('/assets/data.json').pipe(
      map(users => users.find(user => user.id === id))
    );
  }

  extractFirstCharacters(fullName: string): string {
    if(fullName) {
      const words = fullName.split(' ');
      let c = '';
      if (words.length >= 2) {
        c += words[0].charAt(0);
        c += words[words.length - 1].charAt(0);
      }
      return c;
    }
    return '';
  }
}
