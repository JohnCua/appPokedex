import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Pokemon, Respuesta } from '../interfaces/pokemon.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  cargando$: boolean = false;
  // pokemon: Pokemon[] = [];
  // pokemonsFiltrado: Pokemon[] = [];
  filtrando: boolean = false;


  constructor(private http: HttpClient) { }


 
  searchPokemon() {

  }


}
