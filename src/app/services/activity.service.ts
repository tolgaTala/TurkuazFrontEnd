import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from 'app/models/Activity';
import { ListResponseModel } from 'app/models/listResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiUrl = "https://localhost:44312/api/"
  constructor(private httpClient:HttpClient) { }

  getAllActivities():Observable<ListResponseModel<Activity>> {
    let newPath = this.apiUrl+"activities/getall";
    return this.httpClient.get<ListResponseModel<Activity>>(newPath);
  }
  add(activity:any):Observable<ResponseModel>{
    let newPath = this.apiUrl + "activities/add";
    return this.httpClient.post<ResponseModel>(newPath,activity);
  }
  update(activity:any):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"activities/update",activity)
  }
  hidden(id:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"players/delete",id)
  }
}
