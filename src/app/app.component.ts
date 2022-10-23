import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  display: boolean = true

  title = 'appPokedex';

  constructor(public userService: UserService) {
      
  }
}
