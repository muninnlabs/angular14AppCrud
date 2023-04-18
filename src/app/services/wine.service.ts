import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine } from '../wine.model';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }

  id:any

  getBottles(){
    return this.http.get("http://localhost:3000/bottles")
  }

  getBottleDetail = (id:string) => {
    return this.http.get<Wine>(`http://localhost:3000/bottles/${id}`)
  }

  createBootle(data:any){
    return this.http.post<Wine>('http://localhost:3000/bottles/', data)
  }

  deleteBottle(id:string){
    return this.http.delete(`http://localhost:3000/bottles/${id}`).pipe(map(res => true), catchError(error => of(false)))
  }

}