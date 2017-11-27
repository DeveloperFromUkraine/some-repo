import { Component } from '@angular/core';

@Component({
  selector: 'ign-expandable-fab',
  templateUrl: './expandable-fab.html',
  styleUrls: ['./expandable-fab.scss'],
})
export class ExpandableFabComponent {
  activeClass: string = null;
  isOpen = false;

  handleClick() {
    this.isOpen = !this.isOpen;
    if (this.activeClass) {
      this.activeClass = null;
    } else {
      this.activeClass = 'active';
    }
  }
}
