import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { InputMaskComponent } from './input-mask.component';
import { ChangeDetectorRef, ElementRef, Component } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';

describe('Input Mask Component', () => {
  let fixture: ComponentFixture<InputMaskComponent>;
  let component: InputMaskComponent;
  let de, deInputEdit, deInputDisplay: DebugElement;
  let ne: HTMLElement;
  let cdRef = {
    detectChanges: () => {},
  };
  let elementRef = {
    nativeElement: {
      focus: () => {},
    },
  };

  beforeEach(() => {
    ComponentTest.createTestBed([], [InputMaskComponent] as Component[]);
    fixture = TestBed.createComponent(InputMaskComponent);
    component = fixture.componentInstance;
    component.lastDisplayMode = false;
    component.displayModeChild = { displayMode: true };

    fixture.detectChanges();

    deInputEdit = fixture.debugElement.query(By.css('editableFieldInput'));
    deInputDisplay = fixture.debugElement.query(By.css('displayFieldInput'));
    component.ngOnInit();

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
});
