import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../shared/player/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  playerView: any;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const gameId = params['gameId'];
      const playerNum = params['playerNum'];
      if (gameId && playerNum){
        this.playerService.getPlayerView(gameId, playerNum).subscribe(data => {
          this.playerView = JSON.stringify(data);
        });
      }
    })



  }

}
