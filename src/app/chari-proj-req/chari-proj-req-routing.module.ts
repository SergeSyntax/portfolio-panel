import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChariProjReqDocComponent } from './chari-proj-req-doc/chari-proj-req-doc.component';
import { ChariProjReqComponent } from './chari-proj-req/chari-proj-req.component';

const routes: Routes = [
  {
    path: '',
    component: ChariProjReqComponent,
    children: [
      {
        path: ':id',
        component: ChariProjReqDocComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChariProjReqRoutingModule {}
