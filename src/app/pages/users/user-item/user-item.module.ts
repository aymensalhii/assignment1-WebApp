import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserItemRoutingModule } from './user-item-routing.module';
import { UserItemComponent } from './user-item.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';

@NgModule({
  declarations: [
    UserItemComponent
  ],
  imports: [
    CommonModule,
    UserItemRoutingModule,
    PrimengModule
  ]
})
export class UserItemModule { }
