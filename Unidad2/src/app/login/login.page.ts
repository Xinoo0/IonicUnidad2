import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestriccionEstadoService } from '../state/restriccion-estado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioIniciar:FormGroup;

  password: string = '';
  passwordVisible: boolean = false;

  constructor(private fb:FormBuilder, private router:Router, private service: RestriccionEstadoService) { 

    this.formularioIniciar = this.fb.group(
      {
        nombre: ['', Validators.required],
        contrasena: ['', Validators.required]
        }
        );
  }

  ngOnInit() {
  }


  grabarusuario() {

    
    const login = {
      nombre: this.formularioIniciar.get('nombre' )?.value,
      contrasena:this.formularioIniciar.get('contraseña')?.value
    
      
    }
    console.log(login)
    
    this.service.setnombre = login.nombre
    this.router.navigate(['home'])
    this.formularioIniciar.reset();
    this.formularioIniciar.reset();
  }
  
  recuperarcontrasena(){

    this.router.navigate(['restablecer'])

  }
  submitForm() {
    // Obtener los valores del formulario
    const nombre = this.formularioIniciar.get('nombre')?.value;
    const contrasena = this.formularioIniciar.get('contrasena')?.value;
  
    // Crear un objeto de datos de inicio de sesión
    const login = {
      nombre: nombre,
      contrasena: contrasena
    };
  
    // Imprimir los datos de inicio de sesión en la consola (para fines de depuración)
    console.log(nombre);
    console.log(contrasena);

    const nombreControl = this.formularioIniciar.get('nombre');
    
    if (nombreControl) {const nombreValue = nombreControl.value;

    if (this.formularioIniciar.valid) {
      this.router.navigate(['/home']);
  }
  }
  }
  
}
