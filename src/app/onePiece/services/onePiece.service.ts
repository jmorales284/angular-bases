import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'luffy',
    bounty: 30000,
  },{
    id: uuid(),
    name: 'law',
    bounty: 40000
  },{
    id: uuid(),
    name: 'shanks',
    bounty: 4048900
  }]


  addCharacter(character: Character):void {

    const newCharacter = {id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index : number): void {
  //   this.characters.splice(index,1);
  // }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(Character => Character.id !== id);
  }
}
