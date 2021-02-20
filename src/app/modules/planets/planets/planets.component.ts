import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetService } from 'src/app/core/services/planet.service';
import { IPlanet } from 'src/app/shared/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  loadedPage = 0;
  planets = this.planetService.planets;
  isDisabledButton = this.planetService.isAllPlanetsLoaded;

  constructor(private readonly planetService: PlanetService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.getNextPageOfPlanets();
  }

  getNextPageOfPlanets() {
    this.planetService.getPlanetsByNumberPage(++this.loadedPage);
  }

  openPlanetDetails(planet: IPlanet) {
    this.planetService.setActivePlanet(planet);
    this.router.navigate(['planets/details'])
  }
}
