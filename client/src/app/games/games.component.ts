import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Array<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getAllGames().subscribe(data => {
      this.games = data;
    });
  }

}
