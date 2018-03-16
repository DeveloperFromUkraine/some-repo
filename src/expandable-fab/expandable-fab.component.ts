import {AfterContentInit, Component, ContentChildren, OnDestroy, QueryList, Input} from '@angular/core';
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
  @Input() ariaLabelOpen: string;
  @Input() ariaLabelClose: string = 'close';

  activeClass: string = null;
  isOpen = false;
  ariaLabelValue: string;
  private readonly unSubscribe$ = new Subject<void>();

  ngOnChanges() {
    this.ariaLabelValue = this.isOpen ? this.ariaLabelClose : this.ariaLabelOpen;
  }

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
    this.ariaLabelValue = this.isOpen ? this.ariaLabelClose : this.ariaLabelOpen;

    if (this.activeClass) {
      this.activeClass = null;
    } else {
      this.activeClass = 'active';
    }
  }
}