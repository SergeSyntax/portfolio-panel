import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ChariProjReqRoutingModule } from './chari-proj-req-routing.module';
import { ChariProjReqComponent } from './chari-proj-req/chari-proj-req.component';
import { ChariProjReqDocComponent } from './chari-proj-req-doc/chari-proj-req-doc.component';
import { ProjReqModule } from '../proj-req/proj-req.module';

@NgModule({
  declarations: [ChariProjReqComponent, ChariProjReqDocComponent],
  imports: [
    CommonModule,
    ChariProjReqRoutingModule,
    // common project request items
    ProjReqModule,
    // material
    MatProgressBarModule
  ]
})
export class ChariProjReqModule {}
