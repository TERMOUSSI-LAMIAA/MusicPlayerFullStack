import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Album } from '../../features/albums/models/album.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'http://localhost:8081/api'; 

  constructor(
    private http: HttpClient,
    private authService: AuthService // Inject AuthService to access the token
  ) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();  // Get the token from AuthService
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  
  // Get all albums for the user
  getAlbums(): Observable<Album[]> {
    return this.http.get<any>(`${this.apiUrl}/user/albums`, {
      headers: this.getAuthHeaders()  // Attach the Authorization header
    }).pipe(
      tap(response => console.log('Response from API:', response)),  // Log full response
      map(response => response.content)  // Extract the albums array if it's nested in an object
    );
  }

  // Get a specific album by its ID for the user
  getAlbumById(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/user/albums/${id}`, {
      headers: this.getAuthHeaders()  // Attach the Authorization header
    }).pipe(
      tap(response => console.log('Response from API:', response))  // Log full response
    );
  }



  // Search albums by title for the user
  searchAlbumsByTitle(title: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/user/albums/search/title?title=${title}`);
  }

 
  // Filter albums by year for the user
  filterAlbumsByYear(year: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/user/albums/filter/year?year=${year}`);
  }
}
