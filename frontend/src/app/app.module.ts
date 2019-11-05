import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app.routing.module';
import { CharacterService } from './../services/character.service';
import { CharactersModule } from './characters/characters.module';
import { MatCardModule, MatButtonModule, MatIconModule, MatListModule, MatDividerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [ CharacterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
