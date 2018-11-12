import { DebugElement, Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material';
import { By } from '@angular/platform-browser';

import { ComponentTest } from '../../test/test-bed/component';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let fixture: ComponentFixture<AvatarComponent>;
  let component: AvatarComponent;
  let de: DebugElement;

  beforeEach(() => {
    ComponentTest.createTestBed([MatTooltipModule] as NgModule[], [AvatarComponent] as Component[]);

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should display image', () => {
    component.image = 'someImgUrl';
    component.initials = 'FL';

    fixture.detectChanges();

    expect(de.query(By.css('#avatar'))).toBeDefined();
    expect(de.query(By.css('.image'))).toBeDefined();
    expect(de.query(By.css('.initials'))).toBeNull();
    expect(de.query(By.css('.icon'))).toBeNull();
  });

  it('should display initials', () => {
    component.image = '';
    component.initials = 'FL';

    fixture.detectChanges();

    expect(de.query(By.css('#avatar'))).toBeDefined();
    expect(de.query(By.css('.image'))).toBeNull();
    expect(de.query(By.css('.initials'))).toBeDefined();
    expect(de.query(By.css('.icon'))).toBeNull();
  });

  it('should display person icon', () => {
    component.image = '';
    component.initials = '';
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
    component.image = '';
    component.initials = 'FL';
    component.size = 's';
    component.tooltip = 'Tooltip';
    const tooltip = de.query(By.css('#avatar'));
    const ne: HTMLElement = tooltip.nativeElement;

    fixture.detectChanges();

    expect(ne.getAttribute('ng-reflect-message')).toContain('Tooltip');
  });

  it('should display a small avatar', () => {
    component.size = 's';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('s');
  });

  it('should display a large avatar', () => {
    component.size = 'l';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('l');
  });

  it('should display a large avatar by default', () => {
    component.size = 'invalidSize';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('class')).toContain('l');
  });

  it('should have attribute aria-label when tooltip is provided', () => {
    component.tooltip = 'Tooltip';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toContain('Tooltip');
  });

  it('should have attribute aria-label when aria-label is provided', () => {
    component.ariaLabel = 'Aria Label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('aria-label')).toContain('Aria Label');
  });

  it('should have attribute aria-label set to tooltip when both tooltip and ariaLabel are provided', () => {
    component.tooltip = 'Tooltip';
    component.ariaLabel = 'Aria Label';
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
    component.tooltip = 'Tooltip';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('0');
  });

  it('should have tabindex set to 0 when @Input ariaLabel is provided', () => {
    component.ariaLabel = 'Aria label';
    const avatar = de.query(By.css('#avatar'));

    fixture.detectChanges();

    expect(avatar.nativeElement.getAttribute('tabindex')).toContain('0');
  });

  it('should have tabindex set to 0 when @Input ariaLabel is provided', () => {
    component.ariaLabel = 'Aria label';
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
