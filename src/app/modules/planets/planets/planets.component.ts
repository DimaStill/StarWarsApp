import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PlanetService } from 'src/app/core/services/planet.service';
import { IPlanet } from 'src/app/shared/shared/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  loadedPage = 1;
  planets = new Array<IPlanet>();

  constructor(private readonly planetService: PlanetService) { }

  ngOnInit(): void {
    this.getPageOfPlanets();
  }

  getPageOfPlanets() {
    this.planetService.getPlanetsByNumberPage(this.loadedPage++)
      .pipe(take(1))
      .subscribe(planets => this.planets.push(...planets))
  }
}
