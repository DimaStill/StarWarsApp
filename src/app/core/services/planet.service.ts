import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { IPlanet } from 'src/app/shared/shared/models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private readonly httpClient: HttpClient) { }

  getPlanetsByNumberPage(page = 1): Observable<Array<IPlanet>> {
    return this.httpClient.get(`/api/planets/?page=${page}`).pipe(pluck('results'));
  }
}
