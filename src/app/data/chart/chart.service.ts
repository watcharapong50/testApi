import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Data } from './data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl = 'http://localhost/api/eleMeter/showAllData';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
    
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Data[]> {
    return this.http.get<Data[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Data[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Data[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Data[]>('searchHeroes', []))
      );
  }
}
