import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ChariProjReq } from './chari-proj-req';

export interface ChariProjReqPluralResponse {
  charitableProjectRequests: ChariProjReq[];
  results: number;
  status: string;
}

export interface ChariProjReqSingularResponse {
  charitableProjectRequest: ChariProjReq;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChariProjReqService {
  baseUrl = environment.serverUrl + '/charitableProjectReqs';

  constructor(private http: HttpClient) {}

  getPlural() {
    return this.http
      .get<ChariProjReqPluralResponse>(
        `${this.baseUrl}?order[0][col]=createdAt&order[0][direction]=DESC&order[1][col]=name&order[1][direction]=ASC`
      )
      .pipe(pluck('charitableProjectRequests'));
  }

  getSingular(id: string) {
    return this.http
      .get<ChariProjReqSingularResponse>(`${this.baseUrl}/${id}`)
      .pipe(pluck('charitableProjectRequest'));
  }
}
