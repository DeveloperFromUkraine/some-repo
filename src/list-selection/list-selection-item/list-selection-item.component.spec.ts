import { ComponentTest } from '../../../test/test-bed/component';
import { ListSelectionItemComponent } from './index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('List Selection Item', () => {
  let fixture: ComponentFixture<ListSelectionItemComponent>;
  let component: ListSelectionItemComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListSelectionItemComponent] as Component[]);

    fixture = TestBed.createComponent(ListSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit onClick event', () => {
    de = fixture.debugElement.query(By.css('.list-detail-container'));
    ne = de.nativeElement;
    let spy = jest.fn();

    component.onClick.subscribe(spy);
    ne.dispatchEvent(new Event('click'));

    expect(spy).toHaveBeenCalled();
  });

  it('should set da attribute', async () => {
    de = fixture.debugElement.query(By.css('.list-detail-container'));
    ne = de.nativeElement;

    component.title = 'test';
    await fixture.detectChanges();

    expect(ne.getAttribute('da')).toContain('list-item-test');
  });

  it('should set da to default value if no title passed', () => {
    de = fixture.debugElement.query(By.css('.list-detail-container'));
    ne = de.nativeElement;

    expect(ne.getAttribute('da')).toBe('list-item-undefined');
  });

  it('should set title', async () => {
    component.title = 'title';
    await fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.list-detail-title'));
    ne = de.nativeElement;

    expect(ne.textContent).toBe(component.title);
  });

  it('should set status', async () => {
    component.statusText = 'custom status';
    await fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.list-detail-status'));
    ne = de.nativeElement;

    expect(ne.textContent).toBe(component.statusText);
  });

  it('should not set title if not provided', () => {
    de = fixture.debugElement.query(By.css('.list-detail-title'));

    expect(de).not.toBeTruthy();
  });
  it('should set subtitle', async () => {
    component.subtitle = 'subtitle';
    await fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.list-detail-subtitle'));
    ne = de.nativeElement;

    expect(ne.textContent).toBe(component.subtitle);
  });

  it('should not set subtitle if not provided', () => {
    de = fixture.debugElement.query(By.css('.list-detail-subtitle'));

    expect(de).not.toBeTruthy();
  });

  it('should match snapshot', async () => {
    component.title = 'title';
    component.subtitle = 'subtitle';

    await fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
