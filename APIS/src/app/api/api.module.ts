import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiPageRoutingModule } from './api-routing.module';

import { ApiPage } from './api.page';
import { HttpClientModule } from '@angular/common/http'
import { ApiserviceService } from '../state/apiservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [ApiPage],
  providers: [ApiserviceService]
})
export class ApiPageModule {}
