import { Component, OnInit } from '@angular/core';
import { Player } from 'app/models/player';
import { PlayerService } from 'app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players:Player[];
  playersYears:number[] = [1]
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
    this.playerService.getPlayers().subscribe(response=>{
      this.players = response.data
      console.log(this.players);    
      this.getPlayersYears(this.players);  
    })
  }
  getPlayersYears(playersY:Player[]){
      playersY.forEach(element => {
        if(true){
          console.log(element.birthdayDate);
          
            // this.playersYears.push(element.birthdayDate.getFullYear);
            console.log(this.playersYears);
            
        }
      });
  }

}
