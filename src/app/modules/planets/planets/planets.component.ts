import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pluck, take, tap } from 'rxjs/operators';
import { PlanetService } from 'src/app/core/services/planet.service';
import { IPlanet } from 'src/app/shared/shared/models/planet';

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
}
