import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {MultiSelectModule} from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ToolbarModule,
    MultiSelectModule,
    ChipModule,
    TableModule,
    TabViewModule,
    DropdownModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ToolbarModule,
    MultiSelectModule,
    ChipModule,
    TableModule,
    TabViewModule,
    DropdownModule
  ]
})
export class PrimengModule { }
