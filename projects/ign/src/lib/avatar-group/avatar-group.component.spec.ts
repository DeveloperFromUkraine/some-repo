import { DebugElement, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { avatars4 } from './avatars.mock';
import { Avatar } from './avatar-group.types';
import { AvatarGroupModule } from './avatar-group.module';

@Component({
  selector: 'host-comp',
  template: `
    <ign-avatar-group
      [avatars]="avatars"
      [cap]="cap"
      [showCounter]="showCounter"
      [showContext]="showContext"
      [showTooltips]="showTooltips"
      [counterOffset]="counterOffset"
      [counterLink]="counterLink"
      [counterAriaLabel]="counterAriaLabel"
      [viewAllLink]="viewAllLink"
      [viewAllAriaLabel]="viewAllAriaLabel"
    >
    </ign-avatar-group>
  `
}) class HostComponent {
  @Input() avatars: Avatar[];
  @Input() cap = 8;
  @Input() showCounter = true;
  @Input() showContext = false;
  @Input() showTooltips = true;
  @Input() counterOffset = 0;
  @Input() counterLink: string;
  @Input() counterAriaLabel: string;
  @Input() viewAllLink: string;
  @Input() viewAllAriaLabel: string;

  // @Output() avatarClick = new EventEmitter<Avatar>();
  // @Output() counterClick = new EventEmitter();
  // @Output() viewAllClick = new EventEmitter();
}

describe('AvatarGroupComponent Test Suite', () => {
  let fixture: ComponentFixture<HostComponent>;
  let comp: HostComponent;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AvatarGroupModule, RouterTestingModule ],
      declarations: [ HostComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should not display the avatars', async () => {
    let avatarGroup: DebugElement;

    avatarGroup = de.query(By.css('#avatar-group'));

    expect(avatarGroup).toBeNull();
  });

  it('should display the avatars', () => {
    comp.avatars = avatars4;
    comp.cap = 3;
    let displayedAvatars;

    fixture.detectChanges();
    displayedAvatars = de.queryAll(By.css('.avatar'));

    expect(displayedAvatars.length).toBe(3);
  });

  it('should not display more avatars than the cap number', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    let avatars: Array<DebugElement>;

    fixture.detectChanges();
    avatars = de.queryAll(By.css('.avatar'));

    expect(avatars.length).toBe(2);
  });

  it('should have counter attribute "aria-label" set to counterAriaLabel', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.counterAriaLabel = '4 More in the Org Chart';
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('#counter'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-aria-label')).toContain('4 More in the Org Chart');
  });

  it('should have counter attribute "routerLink" set to counterLink', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.counterLink = 'counterRedirectUrl';
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('#counter'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-router-link')).toContain('counterRedirectUrl');
  });

  it('should not display context features by default', () => {
    comp.avatars = avatars4;
    comp.cap = 2;

    let viewAllButton: DebugElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__all'));

    expect(viewAllButton).toBeNull();
  });

  it('should not display view all button if given no link', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.showContext = true;
    comp.viewAllLink = undefined;

    let viewAllButton: DebugElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__all'));

    expect(viewAllButton).toBeNull();
  });

  it('should display context features when enabled', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.showContext = true;
    comp.viewAllLink = '/view/all';

    let viewAllButton: DebugElement;
    let viewAllButtonEl: HTMLElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__all'));
    viewAllButtonEl = viewAllButton.nativeElement;

    expect(viewAllButtonEl).toBeDefined();
  });

  it('should have view all button attribute "aria-label" set to viewAllAriaLabel', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.viewAllAriaLabel = '4 More Somewhere';
    comp.viewAllLink = '/test/route';
    comp.showContext = true;
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('.context__all'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('aria-label')).toContain('4 More Somewhere');
  });

  it('should have view all button attribute "routerLink" set to viewAllLink', () => {
    comp.avatars = avatars4;
    comp.cap = 2;
    comp.viewAllLink = 'viewAllRedirectUrl';
    comp.showContext = true;
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('.context__all'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-router-link')).toContain('viewAllRedirectUrl');
  });
});
