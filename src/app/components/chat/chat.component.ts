import { Component, inject } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat.component.html',
  styles: ``
})
export class ChatComponent {
  messajesService = inject(MessagesService)
  conversation = this.messajesService.conversation

}
