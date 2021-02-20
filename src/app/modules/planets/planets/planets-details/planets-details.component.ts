import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from 'src/app/core/services/people.service';
import { PlanetService } from 'src/app/core/services/planet.service';
import { IPeople } from 'src/app/shared/models/people';

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
    private readonly peopleService: PeopleService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.planetService.setActivePlanet(undefined);
  }

  openResidentDetails(people: IPeople) {
    this.peopleService.setActivePeople(people);
    this.router.navigate(['resident'])
  }
}
