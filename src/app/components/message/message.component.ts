import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styles: ``
})
export class MessageComponent {
  @Input({required:true}) textMessage!:String
  @Input({required:true}) bot:boolean = false
}
