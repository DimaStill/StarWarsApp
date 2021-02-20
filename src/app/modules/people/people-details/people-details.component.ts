import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  people$ = this.peopleService.activeResident$;

  constructor(private readonly peopleService: PeopleService) { }

  ngOnInit(): void {
  }

}
