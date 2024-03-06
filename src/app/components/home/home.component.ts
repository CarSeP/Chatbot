import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InputComponent } from '../input/input.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ChatComponent,InputComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
