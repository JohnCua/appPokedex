import { Component, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  isLinear = false;

  pokemonsSelected: SimplePokemon [] = [];
  selectedMini: boolean = false;

  constructor(public pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

  searchPokemon(search:any) {
    if(search.trim().lenght == 0) {
      return;
    }
    this.pokemonService.getSearchPokemon(search);
  }


  selectCardPokemon(poke:any) { 

    let index = this.pokemonsSelected.indexOf(poke);
    
    if( index > -1 ) {
      this.pokemonsSelected.splice(index,1)
    } else  {
      this.pokemonsSelected.push(poke)
    }

    if(this.pokemonsSelected.length>2) {
      this.selectedMini = true;
    } else {
      this.selectedMini = false;
    }

  }


 


}
