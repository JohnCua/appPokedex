import { Component, Input, OnInit } from '@angular/core';
import { SimplePokemon } from 'src/app/interfaces/pokemon.interfaces';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input('pokemon') pokemon: SimplePokemon

  constructor() { }

  ngOnInit(): void {
  }

  selectCardPokemon(poke:any) {

    let newIdPoke = `poke${poke.id}`;
   
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => { 

      if(card.id == newIdPoke) {
        let hasClase = card.classList.contains('seleccionado');
        if(!hasClase){
          card.classList.add('seleccionado')
        } else {
          card.classList.remove('seleccionado')
        }
        
      } 
    })


  }


}
