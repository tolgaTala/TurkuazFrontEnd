import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'app/models/player';
import { ListResponseModel } from 'app/models/listResponseModel';
import { PlayerDto } from 'app/models/playerDto';
import { ResponseModel } from 'app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = "https://localhost:44312/api/users/"
  constructor(private httpClient:HttpClient) { }

  getPlayers():Observable<ListResponseModel<Player>> {
    let newPath = this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModel<Player>>(newPath);
  }
  getPlayersDto():Observable<ListResponseModel<PlayerDto>> {
    let newPath = this.apiUrl+"players/getalldto";
    return this.httpClient.get<ListResponseModel<PlayerDto>>(newPath);
  }
  add(player:any):Observable<ResponseModel>{
    let newPath = this.apiUrl + "players/add";
    return this.httpClient.post<ResponseModel>(newPath,player);
  }
  update(player:any):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"players/update",player)
  }
  updateWithImage(player:any):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"players/updateImage",player)
  }
  hidden(list:number[]):Observable<ResponseModel>{
    console.log("serviste ",list);    
    return this.httpClient.post<ResponseModel>(this.apiUrl+"players/hidden",list)
  }
}
