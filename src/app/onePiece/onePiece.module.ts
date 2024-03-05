import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterComponent } from './components/character/character.component';
import { ListComponent } from "./components/list/list.component";



@NgModule({
  declarations:[
    CharacterComponent,
    ListComponent
  ],
  exports:[
    CharacterComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class OnePieceModule {

}
