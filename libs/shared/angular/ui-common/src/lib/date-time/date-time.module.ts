import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DateTimeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    DateTimeComponent
  ]
})
export class DateTimeModule { }
