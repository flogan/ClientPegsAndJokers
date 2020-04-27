import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/games/games.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  game: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.postNewGame().subscribe(data => {
      this.game = data;
    });
  }

}
