import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonArenaComponent } from './components/pokemon-arena/pokemon-arena.component';
import { BattleMenuComponent } from './components/battle-menu/battle-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonArenaComponent,
    BattleMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
