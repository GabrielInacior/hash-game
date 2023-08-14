import { Component } from '@angular/core';
import { JogoDaVelhaService } from '../shared';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {

  constructor(private JogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.JogoDaVelhaService.inicializar();
  }

  //retorna se a tela de inicio deve ser exibida
  get showInicio(): boolean {
    return this.JogoDaVelhaService.showInicio;
  }

   //retorna se a tela do tabuleiro deve ser exibida
  get showTabuleiro(): boolean {
    return this.JogoDaVelhaService.showTabuleiro;
  }

   //retorna se a tela de final deve ser exibida
  get showFinal(): boolean {
    return this.JogoDaVelhaService.showFinal;
  }

  //inicializa os dados de um novo jogo
  iniciarJogo():void {
    this.JogoDaVelhaService.iniciarJogo();
  }

  //realiza uma jogada ao clickar em algum lugar do tabuleiro
  jogar(posX: number, posY: number): void {
    this.JogoDaVelhaService.jogar(posX, posY);
  }

  //retorna se a peça X deve ser exibida para a coordenada informada
  exibirX(posX:number, posY:number): boolean {
    return this.JogoDaVelhaService.exibirX(posX, posY);
  }

  //retorna se a peça O deve ser exibida para a coordenada informada
  exibirO(posX:number, posY:number): boolean {
    return this.JogoDaVelhaService.exibirO(posX, posY);
  }

   //retorna se a marcação de vitória deve ser exibida para a coordenada informada
  exibirVitoria(posX:number, posY:number): boolean {
    return this.JogoDaVelhaService.exibirVitoria(posX, posY);
  }

  //retorna o numero do jogador a jogar
  get jogador(): number {
    return this.JogoDaVelhaService.jogador;
  }

  //inicia um novo jogo
  novoJogo(): void {
    this.JogoDaVelhaService.novoJogo();
  }
}
