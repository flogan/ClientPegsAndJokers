import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../shared/player/player.service';
import { Subscription } from 'rxjs';
import { BoardSide } from './board-side';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  temp: any;
  playerView: any;
  cards: Array<any>; 
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { }

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  sides: BoardSide[] = [];
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const gameId = params['gameId'];
      const playerNum = params['playerNum'];
      if (gameId && playerNum){
        this.playerService.getPlayerView(gameId, playerNum).subscribe(data => {
          this.temp = JSON.stringify(data);
          this.playerView = data;
          this.initBoard(data);
          this.cards = (data.playerHand.cards)
        });
      }
    })
  }

  initBoard(data){
    //TODO : Make dynamic for any number of boards 3 - 8
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.lineWidth = 10;
    this.sides[0] = new BoardSide(this.playerView.board.playerSides[0], this.ctx, [500,860], 0);
    this.ctx.lineWidth = 10;
    this.sides[1] = new BoardSide(this.playerView.board.playerSides[1], this.ctx, [140,500], (3 * Math.PI) / 2);
    this.ctx.lineWidth = 10;
    this.sides[2] = new BoardSide(this.playerView.board.playerSides[2], this.ctx, [500,140], Math.PI);
    this.ctx.lineWidth = 10;
    this.sides[3] = new BoardSide(this.playerView.board.playerSides[3], this.ctx, [860,500], Math.PI / 2);
  }

  log(): void {
    console.log(this.playerView);
  }
}


