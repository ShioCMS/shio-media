import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url = 'http://localhost:2711/api/v2/photos';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.httpClient.get<Photo>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePhoto(photo: Photo): Observable<Photo> {
    return this.httpClient.post<Photo>(this.url, JSON.stringify(photo), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePhoto(photo: Photo): Observable<Photo> {
    return this.httpClient.put<Photo>(this.url + '/' + photo.id, JSON.stringify(photo), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletePhoto(photo: Photo) {
    return this.httpClient.delete<Photo>(this.url + '/' + photo.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}