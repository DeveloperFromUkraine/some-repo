import { DebugElement, Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AvatarModule } from './avatar.module';

@Component({
  selector: 'host-comp',
  template: `
    <ign-avatar
      [image]="image"
      [initials]="initials"
      [size]="size"
      [tooltip]="tooltip"
      [ariaLabel]="ariaLabel"
    >
    </ign-avatar>
  `
}) class HostComponent {
  @Input() image: string;
  @Input() initials: string;
  @Input() size: string;
  @Input() tooltip: string;
  @Input() ariaLabel: string;
}

describe('AvatarComponent', () => {
  let comp: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AvatarModule ],
      declarations: [ HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should display image', () => {
    comp.image = 'someImgUrl';

    fixture.detectChanges();

    expect(de.query(By.css('#avatar'))).toBeDefined();
    expect(de.query(By.css('.image'))).toBeDefined();
    expect(de.query(By.css('.initials'))).toBeNull();
    expect(de.query(By.css('.icon'))).toBeNull();
  });

  it('should display initials', () => {
    comp.image = '';
    comp.initials = 'FL';

    fixture.detectChanges();

    expect(de.query(By.css('#avatar'))).toBeDefined();
    expect(de.query(By.css('.image'))).toBeNull();
    expect(de.query(By.css('.initials'))).toBeDefined();
    expect(de.query(By.css('.icon'))).toBeNull();
  });

  it('should display person icon', () => {
    comp.image = '';
    comp.initials = '';
    const avatarDiv = de.query(By.css('#avatar'));
    const avatarImg = de.query(By.css('.image'));
    const avatarInitials = de.query(By.css('.initials'));
    const avatarMatIcon = de.query(By.css('.icon'));

    fixture.detectChanges();

    expect(avatarDiv).toBeDefined();
    expect(avatarImg).toBeNull();
    expect(avatarInitials).toBeNull();
    expect(avatarMatIcon).toBeDefined();
  });

  it('should display a tooltip', () => {
    comp.image = '';
    comp.initials = 'FL';
    comp.size = 's';
    comp.tooltip = 'Tooltip';
    const tooltip = de.query(By.css('#avatar'));
    const ne: HTMLElement = tooltip.nativeElement;

    fixture.detectChanges();

    expect(ne.getAttribute('ng-reflect-message')).toContain('Tooltip');
  });

  it('should display a small avatar', () => {
    comp.size = 's';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('s');
  });

  it('should display a large avatar', () => {
    comp.size = 'l';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('l');
  });

  it('should display a large avatar by default', () => {
    comp.size = 'invalidSize';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('l');
  });

  it('should have attribute aria-label when tooltip is provided', () => {
    comp.tooltip = 'Tooltip';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toContain('Tooltip');
  });

  it('should have attribute aria-label when aria-label is provided', () => {
    comp.ariaLabel = 'Aria Label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toContain('Aria Label');
  });

  it('should have attribute aria-label set to tooltip when both tooltip and ariaLabel are provided', () => {
    comp.tooltip = 'Tooltip';
    comp.ariaLabel = 'Aria Label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toContain('Tooltip');
  });

  it('should have aria-label set to default when neither tooltip nor aria-label are provided', () => {
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toEqual('');
  });

  it('should have tabindex set to 0 when @Input tooltip is provided', () => {
    comp.tooltip = 'Tooltip';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('0');
  });

  it('should have tabindex set to 0 when @Input ariaLabel is provided', () => {
    comp.ariaLabel = 'Aria label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('0');
  });

  it('should have tabindex set to 0 when @Input ariaLabel is provided', () => {
    comp.ariaLabel = 'Aria label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('0');
  });

  it('should have tabindex set to -1 by default', () => {
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('-1');
  });
});
