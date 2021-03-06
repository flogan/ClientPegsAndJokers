import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PlayerViewComponent } from './player-view/player-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'games', 
    component: GamesComponent
  },
  { 
    path: 'new-game', 
    component: NewGameComponent
  },
  {
    path: 'board-view/:gameId/:playerNum',
    component: PlayerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
