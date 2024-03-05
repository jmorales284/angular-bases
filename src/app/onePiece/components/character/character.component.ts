import { Component } from '@angular/core';

@Component({
  selector: 'app-onePiece-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  public name: string = 'luffy';
  public age: number = 19;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription (): string {
    return `${this.name} - ${this.age}`;
  }

  changeCharacter (): void {
    this.name = 'zoro';
  }

  changeAge (): void {
    this.age = 21;
  }

  resetForm():void {
    this.name = 'luffy';
    this.age = 19;
  }
}
