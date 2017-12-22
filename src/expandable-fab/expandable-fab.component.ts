import {AfterContentInit, Component, ContentChildren, OnDestroy, QueryList} from '@angular/core';
import {ExpandableFabItemComponent} from './expandable-fab-item.component';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'ign-expandable-fab',
  templateUrl: './expandable-fab.html',
  styleUrls: ['./expandable-fab.scss'],
})
export class ExpandableFabComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(ExpandableFabItemComponent) btns: QueryList<ExpandableFabItemComponent>;

  activeClass: string = null;
  isOpen = false;
  unSubscribe$ = new Subject<void>();

  ngAfterContentInit() {
    const outputs = this.btns.map(button => button.clicked);
    Observable
      .merge(...outputs)
      .takeUntil(this.unSubscribe$)
      .subscribe(_ => this.handleClick());
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

  handleClick() {
    this.isOpen = !this.isOpen;
    if (this.activeClass) {
      this.activeClass = null;
    } else {
      this.activeClass = 'active';
    }
  }
}
