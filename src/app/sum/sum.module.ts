import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumComponent } from './sum/sum.component';
import { SumService } from './services/sum.service';

@NgModule({
  declarations: [
    SumComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SumComponent
  ],
  providers: [
    SumService
  ]
})
export class SumModule { }
