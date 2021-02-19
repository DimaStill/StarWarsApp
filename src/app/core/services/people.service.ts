import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { bufferCount, mergeMap, switchMap, tap } from 'rxjs/operators';
import { IPeople } from 'src/app/shared/shared/models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly httpClient: HttpClient) { }

  getResidentsOfPlanet(residentsReference: Array<string>) {
    return from(residentsReference).pipe(
      mergeMap(residentReference => 
        this.getPeopleByReference(residentReference)
      ),
      bufferCount(residentsReference.length)
    );
  }

  getPeopleByReference(reference: string): Observable<IPeople> {
    return this.httpClient.get<IPeople>(reference);
  }
}
