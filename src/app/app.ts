import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentPage = 1;

  nextPage() {
    if (this.currentPage < 6) {
      this.currentPage++;
    }
  }

  reset() {
    this.currentPage = 1;
  }
}
