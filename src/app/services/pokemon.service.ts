import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemon.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  cargando$: boolean = false;
  pokemons$: SimplePokemon[] = [];
  pokemonsFiltrado$: SimplePokemon[] = [];
  filtrando$: boolean = false;


  constructor(private http: HttpClient) {
    this.getPokemons();
   }


  getPokemons(limit=6)  {

    return new Promise( (resolve, reject) => {
      this.http.get(`${environment.api_urlPokemon}/pokemon?limit=${limit}`).subscribe((resp:any) => {
        this.pokemons$ = this.mapPokemonList(resp?.results);
        console.log(this.pokemons$)
        this.cargando$ = false;
        resolve(1);
      })
      
    }) 
  }


  mapPokemonList(pokemonList: Result[]) {

    return pokemonList.map(({name, url}) => {
     
     const urlParts = url.split('/');
     const id = urlParts[urlParts.length - 2];
     const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
     return { id, picture, name }
   })
 }

  getSearchPokemon(search:any) {

    this.filtrando$ = true;
    this.pokemonsFiltrado$ = [];

    return new Promise( (resolve, reject) => {
       
          this.http.get(`${environment.api_urlPokemon}/pokemon/${search}/`).subscribe((resp:any | undefined) => {

            console.log(resp)
            this.pokemonsFiltrado$.push(this.mapPoke(resp));
            resolve(1);
            
        }, (err)=> {
          console.log('No se encontro pokemon')
        })
        
      })
        
  }

  mapPoke(resp:any):any {
    const { id , name, sprites } = resp;

    let poke:SimplePokemon = { id:id, name:name, picture:sprites?.other?.['official-artwork']?.front_default };

    return poke;
  }

}
