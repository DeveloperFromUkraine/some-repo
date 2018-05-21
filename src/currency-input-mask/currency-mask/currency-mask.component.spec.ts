import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyMaskComponent } from './currency-mask.component';
import { Component } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';
import { DisplayMode } from '../base-input-mask/input-mask.component';

describe('Currency Mask Component', () => {
  let fixture: ComponentFixture<CurrencyMaskComponent>;
  let component: CurrencyMaskComponent;

  beforeEach(() => {
    ComponentTest.createTestBed([], [CurrencyMaskComponent, DisplayMode] as Component[]);
    fixture = TestBed.createComponent(CurrencyMaskComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  it('sets should set display to true', () => {
    expect(component.displayModeBool).toBe(true);
  });
  it('should set display to false when clicked', () => {
    component.onClick();
    expect(component.displayModeBool).toBe(false);
  });
  it('should set the value to true if emitted and has value', () => {
    component.onBlur('123');
    expect(component.displayModeBool).toBe(true);
  });
  it('should set the value to true if emitted and has no value', () => {
    component.onBlur('');
    expect(component.displayModeBool).toBe(true);
  });
});
