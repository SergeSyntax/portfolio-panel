import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjReqService } from '../chari-proj-req.service';

@Component({
  selector: 'chari-proj-req',
  templateUrl: './chari-proj-req.component.html',
  styleUrls: ['./chari-proj-req.component.scss']
})
export class ChariProjReqComponent implements OnInit {
  chariProjReqs: ChariProjReq[] = [];
  currentId = '';
  loading = true;
  constructor(private chariProjReqService: ChariProjReqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chariProjReqService.getPlural().subscribe(chariProjReqs => {
      this.chariProjReqs = chariProjReqs;
      this.loading = false;
    });

    this.route.firstChild?.params.subscribe(({ id }) => {
      this.currentId = id;
    });
  }

  click(chariProjReq: ChariProjReq): void {
    if (!chariProjReq.reed) chariProjReq.reed = true;
  }
}
