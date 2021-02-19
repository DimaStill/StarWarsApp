import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/core/services/planet.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent implements OnInit {

  planet$ = this.planetService.activePlanet$;

  constructor(private readonly planetService: PlanetService) { }

  ngOnInit(): void {
  }
}
