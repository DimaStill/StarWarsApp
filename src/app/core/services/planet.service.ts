import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { IPlanet } from 'src/app/shared/shared/models/planet';
import { IResponse } from 'src/app/shared/shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = Array<IPlanet>();
  isAllPlanetsLoaded = new BehaviorSubject(false); 

  constructor(private readonly httpClient: HttpClient) { }

  getPlanetsByNumberPage(page = 1) {
    return this.httpClient.get<IResponse<IPlanet>>(`http://swapi.dev/api/planets/?page=${page}`)
      .pipe(
        tap(response => {
          this.isAllPlanetsLoaded.next(response.count <= page * 10)
        }),
        pluck("results")
      ).subscribe(planets => this.planets.push(...planets));
  }
}
