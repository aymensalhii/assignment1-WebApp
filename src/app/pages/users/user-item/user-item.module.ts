import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserItemRoutingModule } from './user-item-routing.module';
import { UserItemComponent } from './user-item.component';


@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule,
    UserItemRoutingModule
  ]
})
export class UserItemModule { }
