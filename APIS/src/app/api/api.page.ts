import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../state/apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(private Service: ApiserviceService) { }

  ngOnInit(): void{
    this.Service.getCharacters().subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('characters', JSON.stringify(data.result));
      }
    )
  }

  getCharacters() {
    const data = localStorage.getItem('characters');
    const result = JSON.parse(data);
    return result;
  }

}
