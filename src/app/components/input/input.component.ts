import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  prompt: string = '';
  messajesService = inject(MessagesService);

  send() {
    this.messajesService.addMessage(this.prompt);
    this.prompt = '';
  }
  keydown(event: any) {
    if (event.key === 'Enter') this.send();
  }
}
