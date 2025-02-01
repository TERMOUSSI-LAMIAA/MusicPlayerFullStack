import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    private readonly apiUrl = 'http://localhost:8081/api/user/songs'; 

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    getAudioStream(songId: string): Observable<ArrayBuffer> {
        const headers = this.getAuthHeaders()
            .set('Accept', 'audio/mpeg')
            .set('Content-Type', 'audio/mpeg');

        return this.http.get(`${this.apiUrl}/${songId}/stream-audio`, {
            headers: headers,
            responseType: 'arraybuffer',
            observe: 'response'
        }).pipe(
            map(response => {
                console.log('Response headers:', response.headers);
                console.log('Response type:', response.headers.get('Content-Type'));
                return response.body as ArrayBuffer;
            })
        );
    }

    private getAuthHeaders(): HttpHeaders {
        const token = this.authService.getToken();
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }
}