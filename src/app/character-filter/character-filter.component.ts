import { Component, OnInit } from '@angular/core';
import { Character } from '../character.interface';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-filter',
  standalone: false,
  templateUrl: './character-filter.component.html',
  styleUrl: './character-filter.component.css'
})
export class CharacterFilterComponent implements OnInit {

  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {}

  onHouseSelected(house: string): void {
    this.characterService.fetchCharactersByHouse(house).subscribe(data => {
      this.characters = data;
    });
  }

}
