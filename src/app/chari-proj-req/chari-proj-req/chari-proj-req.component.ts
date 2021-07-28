import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChariProjReq } from '../chari-proj-req';
import { ChariProjEvents, ChariProjReqService } from '../chari-proj-req.service';

@Component({
  selector: 'chari-proj-req',
  templateUrl: './chari-proj-req.component.html',
  styleUrls: ['./chari-proj-req.component.scss']
})
export class ChariProjReqComponent implements OnInit {
  chariProjReqs: ChariProjReq[] = [];
  currentId!: string;
  loading = true;
  constructor(
    private chariProjReqService: ChariProjReqService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chariProjReqService.getPlural().subscribe(chariProjReqs => {
      this.chariProjReqs = chariProjReqs;
      this.loading = false;
    });

    this.route.firstChild?.params.subscribe(({ id }) => {
      this.currentId = id;
    });

    this.chariProjReqService.$chariProjEvent.subscribe(event => {
      console.log(this.currentId);

      if (event === ChariProjEvents.DELETE) {
        this.chariProjReqs = this.chariProjReqs.filter(item => item.id !== this.currentId);
        this.router.navigateByUrl('/dashboard/charitable');
      }
    });
  }

  click(chariProjReq: ChariProjReq): void {
    if (!chariProjReq.reed) chariProjReq.reed = true;
  }
}
