import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoComponent } from './jogo';
import { JogoDaVelhaService } from './shared';




@NgModule({
  declarations: [
    JogoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    JogoDaVelhaService
  ],
  exports: [
    JogoComponent
  ],
})
export class JogoDaVelhaModule { }
