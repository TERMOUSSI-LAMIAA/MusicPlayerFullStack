import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { LoginRequestDTO } from '../../features/albums/models/login.dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8081/api';
    private tokenKey = 'auth_token';
    private userKey = 'current_user';

    constructor(
        private http: HttpClient,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    private getStorage() {
        return isPlatformBrowser(this.platformId) ? localStorage : null;
    }

    login(credentials: LoginRequestDTO): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, credentials)
            .pipe(
                tap(response => {
                    this.setToken(response.token);
                }),
                catchError(error => {
                    console.error('Login error:', error);
                    throw error;
                })
            );
    }

    logout(): void {
        this.removeToken();
        this.removeUser();
        this.router.navigate(['/login']);
    }

    setToken(token: string): void {
        const storage = this.getStorage();
        if (storage) {
            storage.setItem(this.tokenKey, token);
        }
    }

    getToken(): string | null {
        const storage = this.getStorage();
        return storage ? storage.getItem(this.tokenKey) : null;
    }

    removeToken(): void {
        const storage = this.getStorage();
        if (storage) {
            storage.removeItem(this.tokenKey);
        }
    }

    setUser(user: any): void {
        const storage = this.getStorage();
        if (storage) {
            storage.setItem(this.userKey, JSON.stringify(user));
        }
    }

    getUser(): any {
        const storage = this.getStorage();
        if (storage) {
            const user = storage.getItem(this.userKey);
            return user ? JSON.parse(user) : null;
        }
        return null;
    }

    removeUser(): void {
        const storage = this.getStorage();
        if (storage) {
            storage.removeItem(this.userKey);
        }
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    refreshToken(): Observable<any> {
        return this.http.post<{ token: string }>(`${this.apiUrl}/auth/refresh-token`, {})
            .pipe(
                tap(response => {
                    this.setToken(response.token);
                })
            );
    }
}
