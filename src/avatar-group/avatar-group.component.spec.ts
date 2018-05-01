import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MatTooltipModule, MatIconModule } from '@angular/material';

import { AvatarGroupComponent } from '../avatar-group/avatar-group.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ComponentTest } from '../../test/test-bed/component';
import { avatars4 } from './avatars.mock';

describe('AvatarGroupComponent Test Suite', () => {
  let fixture: ComponentFixture<AvatarGroupComponent>;
  let component: AvatarGroupComponent;
  let de: DebugElement;

  beforeEach(async () => {
    await ComponentTest.createTestBed(
      [RouterTestingModule, MatTooltipModule, MatIconModule],
      [AvatarComponent, AvatarGroupComponent]
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should not display the avatars', async () => {
    let avatarGroup: DebugElement;

    fixture.detectChanges();
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

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
