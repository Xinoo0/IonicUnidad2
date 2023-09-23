import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=19');
  }
}
