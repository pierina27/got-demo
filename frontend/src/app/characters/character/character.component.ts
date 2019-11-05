import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from "../../../services/character.service";
import { Character } from 'src/models/character.model';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css'],
    providers:  [ CharacterService ]
})

export class CharacterComponent { 
    character: Character;
    errorMessage: string;

    constructor(private apiService: CharacterService, private activeRoute: ActivatedRoute){}

    ngOnInit(){
        const routeParams = this.activeRoute.snapshot.params;
        if(routeParams.id){
            this.getCharacter(routeParams.id);
        } else {
            this.errorMessage = "Favor seleccionar un id válido"
        }
     }

     getCharacter(id: string){
       this.apiService.getCharacter(id).then((res)=>{
            this.character = {
                books: res['books'] ? res['books']: [],
                gender: res['gender'] ? res['gender'] : '' ,
                house:  res['house'] ? res['house'] : '' ,
                image:  res['image'] ? res['image'] : '' ,
                name:  res['name'] ? res['name'] : '' ,
                rank: res['rank'] ? res['rank'] : '' ,
                slug:  res['slug'] ? res['slug'] : '' ,
                titles: res['titles'] ? res['titles']: [],
            };
      },
      () => this.errorMessage = "Error buscando el Personaje.");
     }

}