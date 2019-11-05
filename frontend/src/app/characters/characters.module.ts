import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { CharacterComponent } from './character/character.component';
import { CharactersRoutingModule } from "./characters-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CharacterComponent],
    imports: [  CommonModule, 
                CharactersRoutingModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatListModule,
                MatDividerModule
            ]
})

export class CharactersModule {}