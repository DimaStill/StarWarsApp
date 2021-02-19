import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from 'src/app/core/services/people.service';
import { PlanetService } from 'src/app/core/services/planet.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent implements OnInit, OnDestroy {

  planet$ = this.planetService.activePlanet$;
  residents$ = this.planet$.pipe(
    switchMap(planet => 
      this.peopleService.getResidentsOfPlanet(planet.residents)
    )
  );

  constructor(private readonly planetService: PlanetService,
    private readonly peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.planetService.setActivePlanet(undefined);
  }
}
