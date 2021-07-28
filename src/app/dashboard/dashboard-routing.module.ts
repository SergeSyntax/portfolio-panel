import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'charitable',
        loadChildren: () =>
          import('../chari-proj-req/chari-proj-req.module').then(m => m.ChariProjReqModule)
      },
      {
        path: 'profitable',
        loadChildren: () =>
          import('../profit-proj-req/profit-proj-req.module').then(mod => mod.ProfitProjReqModule)
      },
      {
        path: 'accounts',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
