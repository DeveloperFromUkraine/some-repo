import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ign-list-content',
  templateUrl: './list-content.html',
  styleUrls: ['./list-content.css'],
})
export class ListContentComponent {
  active: number;

  @HostListener('click', ['$event'])
  onclick(event) {
    if (event.target.id === 'skip-list') {
      this.skipListContent();
    }
  }

  skipListContent() {
    const skipElement = document.getElementById('list-content-skip');
    skipElement.scrollIntoView(true);
    skipElement.focus();
  }
}
