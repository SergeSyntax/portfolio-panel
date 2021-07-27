import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProfitProjReq } from './profit-proj-req';

export interface ProfitProjReqPluralResponse {
  profitableProjectRequests: ProfitProjReq[];
  results: number;
  status: string;
}

export interface ProfitProjReqSingularResponse {
  profitableProjectRequest: ProfitProjReq;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfitProjReqService {
  baseUrl = environment.serverUrl + '/profitableProjectReqs';

  constructor(private http: HttpClient) {}

  getPlural() {
    return this.http
      .get<ProfitProjReqPluralResponse>(
        `${this.baseUrl}?order[0][col]=createdAt&order[0][direction]=DESC&order[1][col]=name&order[1][direction]=ASC`
      )
      .pipe(pluck('profitableProjectRequests'));
  }

  getSingular(id: string) {
    return this.http
      .get<ProfitProjReqSingularResponse>(`${this.baseUrl}/${id}`)
      .pipe(pluck('profitableProjectRequest'));
  }
}
