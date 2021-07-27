import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SectionComponent } from './section/section.component';
import { ItemComponent } from './item/item.component';
import { ProjReqRoutingModule } from './proj-req-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { LoadingDocComponent } from './loading-doc/loading-doc.component';

@NgModule({
  declarations: [
    SectionComponent,
    ItemComponent,
    HeaderComponent,
    NotFoundComponent,
    AttachmentsComponent,
    LoadingDocComponent
  ],
  imports: [
    CommonModule,
    ProjReqRoutingModule,
    // material
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    SectionComponent,
    ItemComponent,
    HeaderComponent,
    NotFoundComponent,
    AttachmentsComponent,
    LoadingDocComponent
  ]
})
export class ProjReqModule {}
