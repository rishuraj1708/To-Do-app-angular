import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent {
  playerSymbol: string = 'X';
  cells: string[] = Array(10).fill(null);
  playerAName: string = "PlayerA";
  playerBName: string = "PlayerB";
  move: string = "";

  onGridCellClicked(index: number): void {
    if (this.cells[index] != null) { return; }
    this.cells[index] = this.playerSymbol;
    this.moveHandler(index, this.playerSymbol);
    this.checkGameState();
    if (this.playerSymbol == 'X') { this.playerSymbol = 'O'; }
    else { this.playerSymbol = 'X'; }

  }

  moveHandler(index: number, str: string) {
    let msg = str + ":move on:" + index + ' ';
    this.move = this.move + msg;
  }
  //win ,Draw
  checkGameState() {
    //win condition
    const winnigCombination =
      [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],//horizontal
        [1, 4, 7], [2, 5, 8], [3, 6, 9],//vertical
        [1, 5, 9], [3, 5, 7]//diagnoal
      ];

    //checking
    for (let comb of winnigCombination) {
      let [a, b, c] = comb;
      if (this.cells[a] == this.playerSymbol
        && this.cells[b] == this.playerSymbol
        && this.cells[c] == this.playerSymbol) {
        alert("WIN");
      }
    }

    //draw condition
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
      if (this.cells[i] == null) {
        isDraw = false;
        break;
      }
    }

    if (isDraw) { alert("draw"); }
  }


}

/*
export class TictactoeComponent 
{
cells:string[]=Array(10).fill(null);
playerSymbol:string='X';

onGridCellClick(index:number):void
{
    this.cells[index]=this.playerSymbol;
    if(this.playerSymbol=='X'){this.playerSymbol='O';}
    else{this.playerSymbol='X';}
  }
}
*/