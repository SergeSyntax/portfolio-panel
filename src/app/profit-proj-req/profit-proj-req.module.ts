import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ProfitProjReqRoutingModule } from './profit-proj-req-routing.module';
import { ProjReqModule } from '../proj-req/proj-req.module';
import { ProfitProjReqComponent } from './profit-proj-req/profit-proj-req.component';
import { ProfitProjReqDocComponent } from './profit-proj-req-doc/profit-proj-req-doc.component';
import { IndicationsComponent } from './indications/indications.component';

@NgModule({
  declarations: [
    ProfitProjReqComponent,
    ProfitProjReqDocComponent,
    IndicationsComponent
  ],
  imports: [
    CommonModule,
    ProfitProjReqRoutingModule,
    // material
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    // common project request items
    ProjReqModule
  ]
})
export class ProfitProjReqModule {}
