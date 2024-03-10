import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'onePiece-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter

  @Input()
  public characterList: Character[] = [{
    name: 'teach',
    bounty: 1234
  }]

  deleteCharacter(id?: string):void {
    if (!id) return;
    this.onDeleteCharacter.emit(id)
  }

}
