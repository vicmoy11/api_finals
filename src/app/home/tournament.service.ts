import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '@app/_models/tournament';

@Injectable({ providedIn: 'root' })
export class TournamentService {
    private apiUrl = 'http://localhost:4000/tournaments'; // Adjust the API URL as needed

    constructor(private http: HttpClient) { }

    getAll(): Observable<Tournament[]> {
        return this.http.get<Tournament[]>(`${this.apiUrl}`);
    }

    getById(tournamentId: number): Observable<Tournament> {
        return this.http.get<Tournament>(`${this.apiUrl}/${tournamentId}`);
    }

    create(tournament: Tournament): Observable<Tournament> {
        return this.http.post<Tournament>(`${this.apiUrl}`, tournament);
    }

    update(tournamentId: number, tournament: Tournament): Observable<Tournament> {
        return this.http.put<Tournament>(`${this.apiUrl}/${tournamentId}`, tournament);
    }

    delete(tournamentId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${tournamentId}`);
    }
}
