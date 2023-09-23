import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  formularioRecuperar:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.formularioRecuperar = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]

  })
}
  
  ngOnInit() {
  }

  volveralogin(){
    this.router.navigate(['/login'])
  }


}
