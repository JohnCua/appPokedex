import { Component, OnInit } from '@angular/core';
import { PokemonPaginatedResponse, Result, SimplePokemon } from 'src/app/interfaces/pokemon.interfaces';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  isLinear = false;

  pokemons: SimplePokemon[] = []

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getPokemons(6).subscribe((resp:PokemonPaginatedResponse) => {
  
        this.pokemons = this.mapPokemonList(resp.results);
        console.log(this.pokemons);
    });
  }


  mapPokemonList(pokemonList: Result[]) {

     return pokemonList.map(({name, url}) => {
      
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, picture, name }
    })
  }


}
