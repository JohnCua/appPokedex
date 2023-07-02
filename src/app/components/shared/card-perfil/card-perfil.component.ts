import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.scss']
})
export class CardPerfilComponent implements OnInit {

  srcImagenPerfil: any = '/assets/img/user.png';

  nameImgPefil: string = '';

  loadingImg = false;

  titleCard:string = 'Imagen perfil';

  infoUser: any

  edadUser = 0;



  @Input() bandera:boolean = false;

  @Output() imgBanderallena: EventEmitter<any> = new EventEmitter();


  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    this.infoUser = this.pokemonService.changeInfoUser.subscribe((resp)=>{
      this.infoUser = resp;
    })

  }

  previewImg(input:any) {
    this.nameImgPefil = input.files[0].name;
    if (input?.files?.length === 0) {
      return ;
    } else {
      this.loadingImg = true;
      var reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload =  (e) => {

          this.srcImagenPerfil = e.target?.result
      };

      this.imgBanderallena.emit(true);
    }
  }

}
