import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

    private rayenUrl = environment.apiRayenSaludTutorial

  constructor(
      protected http: HttpClient
  ) { }

  list(){
      return this.http.get(this.rayenUrl + 'tutorials').pipe(
          map((data: any) => {
              return data;
          })
      );
  }

  findById(id: number){
      return this.http.get(this.rayenUrl + 'tutorials/' + id).pipe(
          map((data: any) => {
              return data;
          })
      );
  }

  findByDescription(resource: any){
      return this.http.get(this.rayenUrl + 'tutorial?description=' + resource).pipe(
          map((data: any) => {
              return data;
          })
      )
  }

  create(resource: any){
      return this.http.post(this.rayenUrl + 'createtutorial', resource).pipe(
          map((data: any) => {
              return data;
          })
      );
  }

  update(resource: any){
      return this.http.put(this.rayenUrl + 'updatetutorial', resource).pipe(
          map((data: any) => {
              return data;
          })
      );
  }

  deleteById(id: number){
      return this.http.delete(this.rayenUrl + 'deletetutorial/' + id).pipe(
          map((data: any) => {
              return data;
          })
      );
  }

  deleteAll(){
      return this.http.delete(this.rayenUrl + 'deletetutorials').pipe(
          map((data: any) => {
              return data;
          })
      );
  }



}
