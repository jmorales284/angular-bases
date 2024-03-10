import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { OnePieceService } from '../services/onePiece.service';

@Component({
  selector: 'app-onePiece-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private onePieceService: OnePieceService) {
  }

  get characters(): Character[] {
    return [...this.onePieceService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.onePieceService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.onePieceService.addCharacter(character);
  }
}
