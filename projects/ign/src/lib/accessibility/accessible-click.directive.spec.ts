import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AccessibleClickDirective } from './accessible-click.directive';
import { By } from '@angular/platform-browser';
import { AccessibilityModule } from './accessibility.module';

@Component({
  template: `
        <button class="directive" ignA11yClick>button</button>
    `,
})
class DirectiveHostComponent {}

describe('Accessible Click', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let de: DebugElement[];
  let directive: AccessibleClickDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccessibilityModule],
      declarations: [DirectiveHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    de = fixture.debugElement.queryAll(By.css('.directive'));

    fixture.detectChanges();
  });

  it('should trigger onAccessibleClick when keyup.enter event emitted', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    spyOn(directive, 'onAccessibleClick');

    de[0].triggerEventHandler('keyup.enter', new Event('keyup.enter'));
    fixture.detectChanges();

    expect(directive.onAccessibleClick).toHaveBeenCalled();
  });

  it('should trigger onAccessibleClick when keyup.space event emitted', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    spyOn(directive, 'onAccessibleClick');

    de[0].triggerEventHandler('keyup.space', new Event('keyup.space'));
    fixture.detectChanges();

    expect(directive.onAccessibleClick).toHaveBeenCalled();
  });

  it('should trigger the click event when onAccessibleClick is called', () => {
    directive = de[0].injector.get(AccessibleClickDirective);
    let spy = spyOn(directive.elementRef.nativeElement, 'click');
    let event: KeyboardEvent = new KeyboardEvent('keyup.space', null);

    directive.onAccessibleClick(event);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
