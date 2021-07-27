import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { Attachments } from 'src/app/proj-req/attachments';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';

@Component({
  selector: 'chari-proj-req-doc',
  templateUrl: './chari-proj-req-doc.component.html',
  styleUrls: ['./chari-proj-req-doc.component.scss']
})
export class ChariProjReqDocComponent implements OnInit {
  chariProjReq!: ChariProjReq;
  loading = true;
  failed = false;
  attachments: Attachments[] = [];

  constructor(private route: ActivatedRoute, private chariProjReqService: ChariProjReqService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => {
          this.loading = true;
          this.failed = false;
          return this.chariProjReqService.getSingular(id).pipe(
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
      .subscribe(chariProjReq => {
        this.chariProjReq = chariProjReq;
        this.attachments = [];

        if (chariProjReq.webAddress)
          this.attachments.push({
            title: 'business plan',
            address: chariProjReq.webAddress
          });
      });
  }
}
