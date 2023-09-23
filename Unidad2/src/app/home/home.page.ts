import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestriccionEstadoService } from '../state/restriccion-estado.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre : string = ''
  constructor(private router:Router, private service :RestriccionEstadoService) {

    this.service.getnombre.subscribe((nombre)=> {this.nombre = nombre})

  }

  ngOnInit() {
  }
  volverlogin(){
    this.router.navigate(['/login'])
  }

}
