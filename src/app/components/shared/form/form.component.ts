import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  entrenadorForm = this._formBuilder.group({
    name:  ['', [Validators.required]],
    hobby:  ['', [Validators.required]],
    birthday:  ['', [Validators.required]],
    doc:  ['', Validators.required]
  });

  submitted = false;

  //material 

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbyCtrl = new FormControl('');
  filteredHobbys: Observable<string[]>;
  fruits: string[] = [];
  hobbys: string[] = ['Jugar Futbol', 'Jugar Basquetball', 'Jegar Tennis', 'Jugar Voleibol', 'Jugar Fifa', 'Jugar Videojuegos'];

  @ViewChild('hobbyInput') hobbyInput!: ElementRef<HTMLInputElement>;

  constructor(private _formBuilder: FormBuilder,  public userService:UserService) {
  
    this.filteredHobbys = this.hobbyCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.hobbys.slice())),
    );
   }

  ngOnInit(): void {

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.onfocus = () =>{
          input?.previousElementSibling?.classList.add('top');
          input?.previousElementSibling?.classList.add('focus');
          input?.parentElement?.classList.add('focus');
        }
  
        input.onblur = () =>{

          input.value = input.value.trim();
          if(input.value.trim().length == 0) {
            input?.previousElementSibling?.classList.remove('top');
          }
          input?.previousElementSibling?.classList.remove('focus');
          input?.parentElement?.classList.remove('focus');
        }

    });


  }


  submitForm() {
    this.submitted = true;

    // this.contactFormService.postContactoForulario(this.contactoForm.value).subscribe((respuesta)=> {
    //   console.log('respuesta')
    // })

    console.log('hola mundo')
    this.userService.getPokemons().then(()=>{
      setTimeout(() => {
        this.userService.cargando$ = false;
      }, 5000);
    });

    }

    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
  
      // Add our fruit
      if (value) {
        this.fruits.push(value);
      }
  
      // Clear the input value
      event.chipInput!.clear();
  
      this.hobbyCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
   
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.hobbyInput.nativeElement.value = '';
      this.hobbyCtrl.setValue(null);
    }
  

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.hobbys.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }

}
