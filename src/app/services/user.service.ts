import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  cargando$: boolean = false;
  pokemos: [] = [];
  // productos: Product[] = [];
  // productosFiltrado: Product[] = [];
  filtrando: boolean = false;


  constructor(private http: HttpClient) { }


  getPokemons() {
    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.api_urlPokemon}`).subscribe((resp:any) => {
        this.pokemos = resp.products;
   
        this.cargando$ = true;
        // setTimeout(() => {
          
        // }, 5000);
        resolve(1);
      })
    } )
    
  }


}
