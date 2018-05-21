import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { InputMaskComponent } from './input-mask.component';
import { ElementRef, Component } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';
import { CurrencyMaskDirective } from '../currency-mask/currency-mask.directive';

describe('Currency Mask Component', () => {
  let fixture: ComponentFixture<InputMaskComponent>;
  let component: InputMaskComponent;
  let deInputEdit, deInputDisplay: DebugElement;
  let inputValue: HTMLInputElement;
  let elementRef = {
    nativeElement: {
      focus: () => {},
    },
  };

  beforeEach(() => {
    ComponentTest.createTestBed([], [InputMaskComponent, CurrencyMaskDirective] as Component[]);
    fixture = TestBed.createComponent(InputMaskComponent);
    component = fixture.componentInstance;
    component.lastDisplayMode = false;
    component.displayModeChild = { displayMode: true };

    fixture.detectChanges();
    component.ngOnInit();
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));
    deInputDisplay = fixture.debugElement.query(By.css('.displayInput'));

    fixture.detectChanges();
  });

  it('creates a new input mask component', () => {
    expect(fixture).not.toBeNull();
  });
  it('sets value to current focused input', () => {
    expect(component.lastDisplayMode).toBe(true);
  });
  it('emits an event on blur', () => {
    component.value = '100';
    let spy = spyOn(component.onValueChanged, 'emit');

    component.onBlur();

    expect(spy).toHaveBeenCalled();
  });
  it('emits a change when value is changed', () => {
    component.value = '100';
    let spy = spyOn(component.onValueChanged, 'emit');

    component.onEditBlur('120');

    expect(spy).toHaveBeenCalledWith('120');
  });
  it('emits no change when value is not changed', () => {
    component.value = '100';
    let spy = spyOn(component.onValueChanged, 'emit');

    component.onEditBlur('100');

    expect(spy).not.toHaveBeenCalled();
  });
  it('emits a change when value is changed', () => {
    component.lastDisplayMode = false;

    component.ngAfterViewChecked();

    deInputDisplay = fixture.debugElement.query(By.css('displayFieldInput'));
    let focusElement = fixture.debugElement.query(By.css('focus'));

    expect(focusElement).toBe(deInputDisplay);
  });
  it('emits a change when value is changed', () => {
    component.displayModeChild = { displayMode: false };
    component.editableInputField = elementRef as ElementRef;
    const spy = spyOn(component.editableInputField.nativeElement, 'focus');

    component.setFocus();
    expect(spy).toHaveBeenCalled();
  });
  it('should allow numbers without decimals', () => {
    component.displayModeChild = { displayMode: false };

    fixture.detectChanges();
    let testString = '123';
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));

    changeInputToApplyCurrencyMask(testString, testString.length);
    fixture.detectChanges();

    expect(inputValue.value).toBe('123');
  });
  it('should not allow letters as valid input', () => {
    component.displayModeChild = { displayMode: false };

    fixture.detectChanges();
    let testString = 'abc';
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));

    changeInputToApplyCurrencyMask(testString, testString.length);
    fixture.detectChanges();

    expect(inputValue.value).toBe('');
  });
  it('should not allow more than one period', () => {
    component.displayModeChild = { displayMode: false };

    fixture.detectChanges();
    let testString = '2..3.4';
    let count = 0;
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));

    changeInputToApplyCurrencyMask(testString, testString.length);
    fixture.detectChanges();
    for (let i = 0; i < inputValue.value.length; i++) {
      if (inputValue.value.charAt(i) === '.') {
        count += 1;
      }
    }

    expect(count > 1).toBe(false);
  });
  it('should only be four decimal places', () => {
    component.displayModeChild = { displayMode: false };

    fixture.detectChanges();
    let testString = '123.45678';
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));

    changeInputToApplyCurrencyMask(testString, testString.length);
    fixture.detectChanges();

    expect(inputValue.value).toBe('123.4567');
  });
  it('should not allow negative numbers or hyphens', () => {
    component.displayModeChild = { displayMode: false };

    fixture.detectChanges();
    let testString = '-';
    deInputEdit = fixture.debugElement.query(By.css('.editInput'));

    changeInputToApplyCurrencyMask(testString, testString.length);
    fixture.detectChanges();

    expect(inputValue.value).toBe('');
  });
  async function changeInputToApplyCurrencyMask(testingString, testingStringLength) {
    inputValue = deInputEdit.nativeElement;
    inputValue.value = testingString;

    for (let i = 0; i < testingStringLength; i++) {
      inputValue.dispatchEvent(new Event('input'));
    }

    await fixture.detectChanges();
  }
});
