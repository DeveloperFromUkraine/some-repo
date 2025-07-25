import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavListItemComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Side Nav List Item', () => {
  let fixture: ComponentFixture<SideNavListItemComponent>;
  let component: SideNavListItemComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed([], [SideNavListItemComponent] as Component[]);

    fixture = TestBed.createComponent(SideNavListItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should set icon', async () => {
    component.icon = 'icon';

    await fixture.detectChanges();
    ne = fixture.debugElement.query(By.css('.app-link-icon')).nativeElement;

    expect(ne.textContent).toContain(component.icon);
  });

  it('should set description', async () => {
    component.description = 'description';

    await fixture.detectChanges();
    ne = fixture.debugElement.query(By.css('.app-link-text')).nativeElement;

    expect(ne.textContent).toContain(component.description);
  });

  it('should emit onClick when click event emitted', () => {
    de = fixture.debugElement.query(By.css('.app-link'));
    ne = de.nativeElement;
    let spy = jasmine.createSpy('foo', () => {});

    component.onClick.subscribe(spy);
    ne.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalled();
  });

  it('should call handleClick when keyup.enter event emitted', () => {
    spyOn(component, 'handleClick');

    fixture.debugElement.triggerEventHandler('keyup.enter', { preventDefault: () => {} });

    expect(component.handleClick).toHaveBeenCalled();
  });

  it('should call handleClick when keyup.space event emitted', () => {
    spyOn(component, 'handleClick');

    fixture.debugElement.triggerEventHandler('keyup.space', { preventDefault: () => {} });

    expect(component.handleClick).toHaveBeenCalled();
  });

  it('should emit onClick event with key value', () => {
    component.key = 'test';
    let spy = jasmine.createSpy('foo', () => {});

    component.onClick.subscribe(spy);
    component.handleClick(new Event('keyup.enter'));

    expect(spy).toHaveBeenCalledWith(component.key);
  });

  // it('should match snapshot', async () => {
  //   component.icon = 'mail';
  //   component.description = 'test description';

  //   await fixture.detectChanges();

  //   expect(fixture).toMatchSnapshot();
  // });
});
