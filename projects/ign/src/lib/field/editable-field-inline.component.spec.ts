import { Component, Input, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FieldModule } from './field.module';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'host-comp',
  template: `
    <ign-editable-field-inline
      [ariaBtnLabel]="ariaBtnLabel"
      [editIcon]="editIcon"
      [da]="da"
      [daButton]="daButton"
    >
      <input id="testInput" />
    </ign-editable-field-inline>
  `
}) class HostComponent {
  @Input() ariaBtnLabel;
  @Input() editIcon = 'mode_edit';
  @Input() da: string;
  @Input() daButton: string;
}

describe('EditableFieldInlineComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FieldModule ],
      declarations: [ HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should include the test input', () => {
    let testInput = de.query(By.css('#testInput'));
    expect(testInput.attributes.id).toBeDefined('testInput');
  });
});
