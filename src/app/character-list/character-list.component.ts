import { Component, OnInit } from '@angular/core';
import { Character } from '../character.interface';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private characterService: CharacterService, 
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.characterService.fetchCharacters().subscribe(data => {
  //     this.characters = data;
  //   });
  // }

  ngOnInit(): void {
    this.characterService.fetchCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load characters';
        this.loading = false;
      }
    });
  }

  navigateToCharacterDetails(id: string): void {
    this.router.navigate(['/character', id]);
  }

}
