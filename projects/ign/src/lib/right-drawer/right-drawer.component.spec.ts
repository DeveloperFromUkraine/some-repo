import { RightDrawerComponent } from './right-drawer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentTest } from '../../test/test-bed/component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { TranslationModule } from '../localization/translation.module';
import { NgModule, Component } from '@angular/core';

describe('Right Drawer', () => {
  let fixture: ComponentFixture<RightDrawerComponent>;
  let component: RightDrawerComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [RightDrawerComponent] as Component[]
    );

    fixture = TestBed.createComponent(RightDrawerComponent);
    component = fixture.componentInstance;

    component.title = 'test';
    fixture.detectChanges();
  });

  it('should create title-container if title is set', () => {
    de = fixture.debugElement.query(By.css('.title-container'));

    expect(de).toBeTruthy();
  });

  it('should not create title-container if title is not set', () => {
    component.title = '';

    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.title-container'));

    expect(de).not.toBeTruthy();
  });

  it('should set title', () => {
    de = fixture.debugElement.query(By.css('.title'));
    ne = de.nativeElement;

    expect(ne.textContent).toContain(component.title);
  });

  it('should emit openChange event', () => {
    de = fixture.debugElement.query(By.css('button'));
    ne = de.nativeElement;
    let spy = jasmine.createSpy('foo', () => {});

    component.openChange.subscribe(spy);
    ne.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalled();
  });

  it('should call closeDrawer when button is clicked', () => {
    de = fixture.debugElement.query(By.css('button'));
    ne = de.nativeElement;
    spyOn(component, 'closeDrawer');

    ne.dispatchEvent(new Event('click'));

    expect(component.closeDrawer).toHaveBeenCalled();
  });

  it('should call toggleDrawer when button is clicked', () => {
    de = fixture.debugElement.query(By.css('button'));
    ne = de.nativeElement;
    spyOn(component, 'toggleDrawer');

    ne.dispatchEvent(new Event('click'));

    expect(component.toggleDrawer).toHaveBeenCalled();
  });

  it('should set open to false when button is clicked', () => {
    de = fixture.debugElement.query(By.css('button'));
    ne = de.nativeElement;

    component.open = true;
    ne.dispatchEvent(new Event('click'));

    expect(component.open).toBe(false);
  });

  it('should call closeDrawer when backdrop is clicked', () => {
    de = fixture.debugElement.query(By.css('#backdrop'));
    ne = de.nativeElement;
    spyOn(component, 'closeDrawer');

    ne.dispatchEvent(new Event('click'));

    expect(component.closeDrawer).toHaveBeenCalled();
  });

  it('should call toggleDrawer when backdrop is clicked', () => {
    de = fixture.debugElement.query(By.css('#backdrop'));
    ne = de.nativeElement;
    spyOn(component, 'toggleDrawer');

    ne.dispatchEvent(new Event('click'));

    expect(component.toggleDrawer).toHaveBeenCalled();
  });

  it('should set open to false when backdrop is clicked', () => {
    de = fixture.debugElement.query(By.css('#backdrop'));
    ne = de.nativeElement;

    component.open = true;
    ne.dispatchEvent(new Event('click'));

    expect(component.open).toBe(false);
  });

  it('should call handleEscape when keyup.escape emitted', () => {
    spyOn(component, 'handleEscape');

    fixture.debugElement.triggerEventHandler('keyup.escape', {});

    expect(component.handleEscape).toHaveBeenCalled();
  });

  it('should call closeDrawer when keyup.escape emitted', () => {
    spyOn(component, 'closeDrawer');

    fixture.debugElement.triggerEventHandler('keyup.escape', {});

    expect(component.closeDrawer).toHaveBeenCalled();
  });

  it('should call toggleDrawer when keyup.escape emitted', () => {
    spyOn(component, 'toggleDrawer');

    fixture.debugElement.triggerEventHandler('keyup.escape', {});

    expect(component.toggleDrawer).toHaveBeenCalled();
  });

  it('should set open to false when keyup.escape emitted', () => {
    component.open = true;

    fixture.debugElement.triggerEventHandler('keyup.escape', {});

    expect(component.open).toBe(false);
  });

  it('should call toggleDrawer when open drawer called', () => {
    spyOn(component, 'toggleDrawer');

    component.openDrawer();

    expect(component.toggleDrawer).toHaveBeenCalledWith(true);
  });

  it('should set open to true when open drawer called', () => {
    component.open = false;

    component.openDrawer();

    expect(component.open).toBe(true);
  });

  // it('should match snapshot', async () => {
  //   component.title = 'test';

  //   await fixture.detectChanges();

  //   expect(fixture).toMatchSnapshot();
  // });
});
