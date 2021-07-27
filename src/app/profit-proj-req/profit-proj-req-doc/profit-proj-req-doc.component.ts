import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { Attachments } from 'src/app/proj-req/attachments';
import { ProfitProjReq } from '../profit-proj-req';
import { ProfitProjReqService } from '../profit-proj-req.service';

export interface Indication {
  title: string;
}
@Component({
  selector: 'app-profit-proj-req-doc',
  templateUrl: './profit-proj-req-doc.component.html',
  styleUrls: ['./profit-proj-req-doc.component.scss']
})
export class ProfitProjReqDocComponent implements OnInit {
  profitProjReq!: ProfitProjReq;
  attachments!: Attachments[];
  indications!: Indication[];
  loading = true;
  failed = false;

  constructor(private route: ActivatedRoute, private profitProjReqService: ProfitProjReqService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => {
          this.loading = true;
          this.failed = false;
          return this.profitProjReqService.getSingular(id).pipe(
            catchError(err => {
              console.error(err.error.message);

              this.loading = false;
              this.failed = true;

              return EMPTY;
            }),
            map(value => {
              this.loading = false;
              this.failed = false;
              return value;
            })
          );
        })
      )
      .subscribe(profitProjReq => {
        this.profitProjReq = profitProjReq;
        this.attachments = [];
        this.indications = [{ title: '' }];

        if (profitProjReq.businessPlan)
          this.attachments.push({
            title: 'business plan',
            address: profitProjReq.businessPlan
          });
        if (profitProjReq.systemDefinition)
          this.attachments.push({
            title: 'system definition',
            address: profitProjReq.businessPlan
          });
      });
  }
}
