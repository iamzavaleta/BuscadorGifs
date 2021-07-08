import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "VIfy54u6L11waw2iPhstOnpQIGQxSEJd";

  private _historial: string[] = [];

  public resultados: any;

  get historial(){
    return [...this._historial]
  }

  constructor( private http: HttpClient){}

  buscarGifs(query: string){

      query = query.trim().toLocaleLowerCase();

      if( !this._historial.includes(query)){
        
        this._historial.unshift(query);
  
        this._historial= this._historial.splice(0, 10);
      }

      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=arck18N6UfLEdTp56l5oXJ1iO5BseHAG&q=${query}&limit=10`)
        .subscribe( (resp: any) => {
            console.log(resp.data)
            this.resultados = resp.data;
        })


  }
}
