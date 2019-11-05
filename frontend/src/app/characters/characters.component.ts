import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {PageEvent} from '@angular/material';

import { CharacterService } from "../../services/character.service";

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css'],
    providers:  [ CharacterService ]
})

export class CharactersComponent { 
    characters: any;
    errorMessage: string;
    successMessage: string;
    length: string;
    pageSize = 10;

    // MatPaginator Output
    pageEvent: PageEvent;

    constructor(private apiService: CharacterService, private _router: Router){}

    ngOnInit(){
        this.getCharacters();
     }

     goDetail(id: string){
        this._router.navigate(['/character/'+id]);
     }
     
     async getCharacters(event?){
        if(event){
            this.pageEvent = event;
        }
        this.apiService.getcharacters( this.pageEvent ? this.pageEvent.pageIndex: 1, this.pageSize ).then((res)=>{
            this.characters = res["docs"];
            this.length = res["totalDocs"];
      },
      () => this.errorMessage = "Error finding characters.");
     }
}