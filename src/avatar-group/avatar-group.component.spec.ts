import { DebugElement, NgModule, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AvatarGroupComponent } from '../avatar-group/avatar-group.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ComponentTest } from '../../test/test-bed/component';
import { avatars4 } from './avatars.mock';

describe('AvatarGroupComponent Test Suite', () => {
  let fixture: ComponentFixture<AvatarGroupComponent>;
  let component: AvatarGroupComponent;
  let de: DebugElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [RouterTestingModule] as NgModule[],
      [AvatarComponent, AvatarGroupComponent] as Component[]
    );

    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should not display the avatars', async () => {
    let avatarGroup: DebugElement;

    avatarGroup = de.query(By.css('#avatar-group'));

    expect(avatarGroup).toBeNull();
  });

  it('should display the avatars', () => {
    component.avatars = avatars4;
    component.cap = 3;
    let displayedAvatars;

    fixture.detectChanges();
    displayedAvatars = de.queryAll(By.css('.avatar'));

    expect(displayedAvatars.length).toBe(3);
  });

  it('should not display more avatars than the cap number', () => {
    component.avatars = avatars4;
    component.cap = 2;
    let avatars: Array<DebugElement>;

    fixture.detectChanges();
    avatars = de.queryAll(By.css('.avatar'));

    expect(avatars.length).toBe(2);
  });

  it('should have counter attribute "aria-label" set to counterAriaLabel', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.counterAriaLabel = '4 More in the Org Chart';
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('#counter'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-aria-label')).toContain('4 More in the Org Chart');
  });

  it('should have counter attribute "routerLink" set to counterLink', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.counterLink = 'counterRedirectUrl';
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('#counter'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-router-link')).toContain('counterRedirectUrl');
  });

  it('should not display context features by default', () => {
    component.avatars = avatars4;
    component.cap = 2;

    let viewAllButton: DebugElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__tool-all'));

    expect(viewAllButton).toBeNull();
  });

  it('should not display view all button if given no link', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.showContext = true;
    component.viewAllLink = undefined;

    let viewAllButton: DebugElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__tool-all'));

    expect(viewAllButton).toBeNull();
  });

  it('should display context features when enabled', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.showContext = true;
    component.viewAllLink = '/view/all';

    let viewAllButton: DebugElement;
    let viewAllButtonEl: HTMLElement;

    fixture.detectChanges();
    viewAllButton = de.query(By.css('.context__tool-all'));
    viewAllButtonEl = viewAllButton.nativeElement;

    expect(viewAllButtonEl).toBeDefined();
  });

  it('should have view all button attribute "aria-label" set to viewAllAriaLabel', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.viewAllAriaLabel = '4 More Somewhere';
    component.viewAllLink = '/test/route';
    component.showContext = true;
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('.context__tool-all'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('aria-label')).toContain('4 More Somewhere');
  });

  it('should have view all button attribute "routerLink" set to viewAllLink', () => {
    component.avatars = avatars4;
    component.cap = 2;
    component.viewAllLink = 'viewAllRedirectUrl';
    component.showContext = true;
    let counter: DebugElement;
    let ne: HTMLElement;

    fixture.detectChanges();
    counter = de.query(By.css('.context__tool-all'));
    ne = counter.nativeElement;

    expect(ne.getAttribute('ng-reflect-router-link')).toContain('viewAllRedirectUrl');
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
