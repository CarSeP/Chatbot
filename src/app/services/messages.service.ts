import { Injectable, signal } from '@angular/core';
import { HfInference } from '@huggingface/inference';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  hf = new HfInference("")
  model = "mistralai/Mistral-7B-Instruct-v0.2"
  conversation = signal<any[]>([])
  loading = signal(false)

  async addMessage(prompt: string) {
    this.loading.set(true)

    const IAMessage = await this.hf.textGeneration({
      accessToken: this.hf,
      model: this.model,
      inputs: prompt,
      parameters: {
        max_length: 100
      }
    })

    this.conversation.update(values => [...values, prompt, IAMessage.generated_text])
    this.loading.set(false)
  }

}
