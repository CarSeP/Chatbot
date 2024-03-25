import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  darkMode = signal(false)

  toggleTheme() {
    this.darkMode.set(!this.darkMode())

    if (this.darkMode()) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }
}
