import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimengModule { }