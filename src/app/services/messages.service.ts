import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  API_KEY = '';
  URL = 'https://api.openai.com/v1/completions';
  conversation: string[] = [];
  http = inject(HttpClient);

  addMessage(prompt: string) {
    const requestBody = JSON.stringify({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0,
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.API_KEY}`,
    });

    this.http.post(this.URL, requestBody, { headers }).subscribe((res: any) => {
      this.conversation.push(prompt);
      this.conversation.push(res.choices[0].text);
    });
  }
}
