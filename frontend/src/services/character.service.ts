import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../models/character.model'

@Injectable({
    providedIn: 'root'
  })
export class CharacterService {

    constructor(private httpClient: HttpClient) {}
  
    async getcharacters(page?: number, limit?: number) {
      let params = page ? '?page='+ page: '';
      params += page && limit ? ':limit='+ limit: (limit ? '?limit='+ limit: '');
      
        let apiURL = 'http://localhost:3000/characters'+params;
        try {
          let response = await this.httpClient.get(apiURL).toPromise();
          return response;
        } catch(e) {
          return await { message: "Error" };
        }
    }

    async getCharacter(id: string) {
        let apiURL = 'http://localhost:3000/got/character';
        let response = await this.httpClient.get(`${apiURL}/${id}`).toPromise();
        return response;
    } catch (error) {
      throw new Error(`Unable to get countries that use ${error}`);
    }
  }