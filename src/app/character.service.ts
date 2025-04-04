import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) { }

  fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  fetchCharactersByHouse(house: string): Observable<Character[]> {
    const houseUrl = `${this.apiUrl}/house/${house}`;
    return this.http.get<Character[]>(houseUrl);
  }

  fetchCharacterDetails(id: string): Observable<Character> {
    const url = `https://hp-api.onrender.com/api/character/${id}`;
    return this.http.get<Character>(url);
  }


}
