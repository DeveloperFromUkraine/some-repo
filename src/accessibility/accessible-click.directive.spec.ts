import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentTest } from '../../test/test-bed/component';
import { AccessibleClickDirective } from '../accessibility/accessibility.directive';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: `
        <button class="directive" ignA11yClick>button</button>
    `,
})
class DirectiveHostComponent {}

describe('Accessible Click', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let ne: HTMLElement;
  let directive: AccessibleClickDirective;

  beforeEach(async () => {
    await ComponentTest.createTestBed(
      [RouterTestingModule.withRoutes([{ path: '*', component: DirectiveHostComponent }])],
      [DirectiveHostComponent, AccessibleClickDirective]
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('.directive'));
    ne = de[0].nativeElement;
    fixture.detectChanges();
  });

  it('should trigger onAccessibleClick when keyup.enter event emitted', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    jest.spyOn(directive, 'onAccessibleClick');

    de[0].triggerEventHandler('keyup.enter', null);
    fixture.detectChanges();

    expect(directive.onAccessibleClick).toHaveBeenCalled();
  });

  it('should trigger onAccessibleClick when keyup.space event emitted', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    jest.spyOn(directive, 'onAccessibleClick');

    de[0].triggerEventHandler('keyup.space', null);
    fixture.detectChanges();

    expect(directive.onAccessibleClick).toHaveBeenCalled();
  });

  it('should trigger the click event when onAccessibleClick is called', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    let spy = jest.spyOn(directive.elementRef.nativeElement, 'click');
    let event: KeyboardEvent = new KeyboardEvent('keyup.space', null);

    directive.onAccessibleClick(event);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
