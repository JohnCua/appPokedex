import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//Material
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//componentes
import { AppComponent } from './app.component';
import { FormComponent } from './components/shared/form/form.component';
import { CardComponent } from './components/shared/card/card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/dynamics/inicio/inicio.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { CardPerfilComponent } from './components/shared/card-perfil/card-perfil.component';
import { CardPokemonComponent } from './components/shared/card-pokemon/card-pokemon.component';
import { SearchPokemonComponent } from './components/dynamics/search-pokemon/search-pokemon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FormComponent,
    DashboardComponent,
    InicioComponent,
    RegisterComponent,
    SpinnerComponent,
    CardPerfilComponent,
    CardPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
