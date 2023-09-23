import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestriccionEstadoService } from './state/restriccion-estado.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {

  constructor(private Service: RestriccionEstadoService, private Router: Router )
  { }
  canActivate(): boolean{
    let isLogged:boolean = false;
    this.Service.getisLogged().subscribe((value)=>{
      isLogged = value;
      if(!value){
        this.Router.navigateByUrl('/home');
        console.log('funciona');
      }
    });
    return isLogged;
  }
  
}
