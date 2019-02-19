import {
  AfterContentInit,
  OnChanges,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { ExpandableFabItemComponent } from '../expandable-fab-item/expandable-fab-item.component';
import { merge, Subject } from 'rxjs';
import { TranslationPipe } from '../../localization/translation.pipe';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ign-expandable-fab',
  templateUrl: './expandable-fab.html',
  styleUrls: ['./expandable-fab.css'],
})
export class ExpandableFabComponent implements AfterContentInit, OnChanges, OnDestroy {
  @ContentChildren(ExpandableFabItemComponent) btns: QueryList<ExpandableFabItemComponent>;
  @Input() ariaLabelOpen = 'OPEN';
  @Input() ariaLabelClose = 'CLOSE';

  translatePipe: TranslationPipe;

  activeClass: string = null;
  isOpen = false;
  ariaLabelValue: string;
  private readonly unSubscribe$ = new Subject<void>();

  constructor(changeRef: ChangeDetectorRef) {
    this.translatePipe = new TranslationPipe(changeRef);
  }

  ngOnChanges() {
    this.setAria();
  }

  ngAfterContentInit() {
    const outputs = this.btns.map(button => button.clicked);
    merge(...outputs)
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe(_ => this.handleClick());
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

  handleClick() {
    this.isOpen = !this.isOpen;
    this.setAria();
    if (this.activeClass) {
      this.activeClass = null;
    } else {
      this.activeClass = 'active';
    }
  }

  private setAria() {
    this.ariaLabelValue = this.isOpen ? this.ariaLabelClose : this.ariaLabelOpen;
    this.ariaLabelValue = this.translatePipe.transform(this.ariaLabelValue);
  }
}
