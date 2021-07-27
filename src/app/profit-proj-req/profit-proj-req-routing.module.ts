import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitProjReqDocComponent } from './profit-proj-req-doc/profit-proj-req-doc.component';
import { ProfitProjReqComponent } from './profit-proj-req/profit-proj-req.component';

const routes: Routes = [
  {
    path: '',
    component: ProfitProjReqComponent,
    children: [{ path: ':id', component: ProfitProjReqDocComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitProjReqRoutingModule {}
