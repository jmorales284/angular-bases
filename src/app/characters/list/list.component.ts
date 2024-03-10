import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public characterNames: string[] = ['luffy','zoro','nami','sanji','ussop'];
  public deletedCharacter?: string;

  removeLastCharacter():void {
    this.deletedCharacter = this.characterNames.pop();
  }
}
