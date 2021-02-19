import { Component, Input, OnInit } from '@angular/core';
import { IPlanet } from 'src/app/shared/shared/models/planet';

@Component({
  selector: 'app-planets-item',
  templateUrl: './planets-item.component.html',
  styleUrls: ['./planets-item.component.scss']
})
export class PlanetsItemComponent implements OnInit {
  @Input() planet: IPlanet;

  constructor() { }

  ngOnInit(): void {
  }

}
