import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class UsersModule { }
