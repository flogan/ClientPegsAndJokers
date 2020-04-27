import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  { path: 'games', 
    component: GamesComponent
  },
  { path: 'new-game', 
    component: NewGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }