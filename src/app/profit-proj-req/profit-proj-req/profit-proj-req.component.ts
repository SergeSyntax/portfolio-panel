import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfitProjReq } from '../profit-proj-req';
import { ProfitProjReqService } from '../profit-proj-req.service';

@Component({
  selector: 'app-profit-proj-req',
  templateUrl: './profit-proj-req.component.html',
  styleUrls: ['./profit-proj-req.component.scss']
})
export class ProfitProjReqComponent implements OnInit {
  profitProjReqs!: ProfitProjReq[];
  currentId = '';
  loading = true;

  constructor(private profitProjReqService: ProfitProjReqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.profitProjReqService.getPlural().subscribe(profitProjReqs => {
      this.profitProjReqs = profitProjReqs;
      this.loading = false;
    });

    this.route.firstChild?.params.subscribe(({ id }) => {
      this.currentId = id;
    });
  }

  click(profitProjReq: ProfitProjReq) {
    if (!profitProjReq.reed) profitProjReq.reed = true;
  }
}
