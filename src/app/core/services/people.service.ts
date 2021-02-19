import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from 'src/app/shared/shared/models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly httpClient: HttpClient) { }

  getPeopleByReference(reference: string): Observable<IPeople> {
    return this.httpClient.get<IPeople>(reference);
  }
}
