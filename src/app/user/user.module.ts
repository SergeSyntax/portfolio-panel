import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { ColSimpleComponent } from './col-simple/col-simple.component';
import { HostDirective } from './host.directive';

@NgModule({
  declarations: [UserComponent, ColSimpleComponent, HostDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    // material
    MatTableModule,
    MatSortModule,
    MatCheckboxModule
  ]
})
export class UserModule {}
