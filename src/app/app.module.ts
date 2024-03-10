import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { OnePieceModule } from './onePiece/onePiece.module';
import { Characters } from './characters/characters.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    Characters,
    OnePieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
