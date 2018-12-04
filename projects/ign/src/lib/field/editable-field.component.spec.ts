import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input, Output, EventEmitter } from '@angular/core';

import { FieldModule } from './field.module';

@Component({
  selector: 'host-comp',
  template: `
    <ign-editable-field
      [ariaBtnLabel]="ariaBtnLabel"
      [editIcon]="editIcon"
      [da]="da"
      [daButton]="daButton"
      [label]="label"
      (onIconClick)="onIconClick.emit($event)"
    >
      <input id="testInput" />
    </ign-editable-field>
  `
}) class HostComponent {
  @Input() label: string;
  @Input() ariaBtnLabel;
  @Input() editIcon = 'mode_edit';
  @Input() da: string;
  @Input() daButton: string;
  @Output() onIconClick = new EventEmitter();
}

describe('EditableFieldComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let component: HostComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FieldModule ],
      declarations: [ HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should set label input', () => {
    de = fixture.debugElement.query(By.css('.label'));
    ne = de.nativeElement;

    component.label = 'label!';
    fixture.detectChanges();

    expect(ne.textContent).toContain(component.label);
  });

  it('should default to "Edit" if no input is passed in for the aria-label', () => {
    de = fixture.debugElement.query(By.css('.mat-icon-button'));

    fixture.detectChanges();

    expect(de.attributes['aria-label']).toBe('Edit');
  });

  it('should set the aria-label', () => {
    de = fixture.debugElement.query(By.css('.mat-icon-button'));

    component.ariaBtnLabel = 'button label';
    fixture.detectChanges();

    expect(de.attributes['aria-label']).toBe(component.ariaBtnLabel);
  });

  it('should show mode_edit icon when none specified', () => {
    de = fixture.debugElement.query(By.css('mat-icon'));
    ne = de.nativeElement;

    const DEFAULT_LABEL = 'mode_edit';
    fixture.detectChanges();

    expect(ne.textContent).toContain(DEFAULT_LABEL);
  });

  it('should show user defined icon when none specified', () => {
    de = fixture.debugElement.query(By.css('mat-icon'));
    ne = de.nativeElement;

    component.editIcon = 'home';
    fixture.detectChanges();

    expect(ne.textContent).toContain(component.editIcon);
  });

  it('should call handleClick when click event emitted', () => {
    de = fixture.debugElement.query(By.css('.mat-icon-button'));

    let spy = jasmine.createSpy('foo', () => {});

    component.onIconClick.subscribe(spy);
    de.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

});
