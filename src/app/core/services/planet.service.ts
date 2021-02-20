import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pluck, take, tap } from 'rxjs/operators';
import { IPlanet } from 'src/app/shared/models/planet';
import { IResponse } from 'src/app/shared/models/response';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = Array<IPlanet>();
  isAllPlanetsLoaded = new BehaviorSubject(false); 
  private activePlanet = new BehaviorSubject<IPlanet>(undefined);
  activePlanet$ = this.activePlanet.asObservable();

  constructor(private readonly httpClient: HttpClient) { }

  getPlanetsByNumberPage(page = 1) {
    return this.httpClient.get<IResponse<IPlanet>>(`http://swapi.dev/api/planets/?page=${page}`)
      .pipe(
        take(1),
        tap(response => {
          this.isAllPlanetsLoaded.next(response.count <= page * 10)
        }),
        pluck("results")
      ).subscribe(planets => this.planets.push(...planets));
  }

  setActivePlanet(planet: IPlanet) {
    this.activePlanet.next(planet);
  }
}
