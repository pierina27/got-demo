import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';

@NgModule({
    imports: [
        
        RouterModule.forChild([
            { path: 'character/:id', component: CharacterComponent }])
    ],
    exports: [ RouterModule ]
})
export class CharactersRoutingModule {}