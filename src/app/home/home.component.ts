import { Component, OnInit } from '@angular/core';
import { TournamentService } from '@app/_services/tournament.service';
import { Tournament } from '@app/_models/tournament';

Component ({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    tournaments: Tournament[] = [];

    constructor(private tournamentService: TournamentService) { }

    ngOnInit(): void {
        this.loadTournaments();
    }

    private loadTournaments() {
        this.tournamentService.getAll().subscribe({
            next: (tournaments) => {
                this.tournaments = tournaments;
            },
            error: (error) => {
                console.error('Error fetching tournaments:', error);
            }
        });
    }
}