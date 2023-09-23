import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestriccionEstadoService {

  nombre:BehaviorSubject<string> = new BehaviorSubject('')
  private isLogged:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get getnombre(){
    return  this.nombre.asObservable();
  }

  set setnombre(nombre: string){
    this.nombre.next(nombre)
  }

  getisLogged(){
    return this.isLogged.asObservable();
  }

  setisLogged(value:boolean){
    this.isLogged.asObservable();
  }
  constructor() { }
}
