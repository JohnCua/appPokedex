import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  display: boolean = true

  title = 'appPokedex';

  cargandoDatos = false;

  constructor(public pokemonService: PokemonService) {
      
  }

  ngOnInit(): void {
   this.pokemonService.changeInfoUser.subscribe((resp)=>{
    this.cargandoDatos = true;
      setTimeout(() => {
       this.cargandoDatos= false
      }, 1000);
    })
   
}

}