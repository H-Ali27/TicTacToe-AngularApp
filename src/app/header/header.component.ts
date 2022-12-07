import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

squares:any[];
XisNext: boolean;
Winner:'';
counter=0;
isdraw='';
freshpage = true;
ngOnInit(): void {
  
}

newGame(){
  console.log('helo')
  this.squares = Array(9).fill(null);
  this.Winner = '';
  // this.XisNext = true; 
  this.isdraw = '';
  this.counter = 0 ;
  this.freshpage = false;
}
get Player(){
    return this.XisNext ? 'X' : 'O';
}

MakeMove(idx:number){
  if(!this.squares[idx]){
this.squares.splice(idx, 1, this.Player);
this.XisNext = !this.XisNext;
this.counter++;
}
this.Winner = this.CalculateWinner();

if(!this.Winner && this.counter == 9){
  this.isdraw = 'yes'
}
}

CalculateWinner(){
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
for(let i=0; i<lines.length; i++){
  const [a, b, c] = lines[i];
  if(
    this.squares[a] && 
    this.squares[a] === this.squares[b] &&
    this.squares[a] === this.squares[c]
  ){
    return this.squares[a];
  }
}
return null;
}
}