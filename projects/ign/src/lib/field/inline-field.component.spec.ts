import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input } from '@angular/core';
import { FieldModule } from './field.module';

@Component({
  selector: 'host-comp',
  template: `
    <ign-field-inline
      [label]="label"
    >
      <input id="testInput" />
    </ign-field-inline>
  `
}) class HostComponent {
  @Input() label: string;
}

describe('FieldInlineComponent', () => {
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

  it('should set label input', async () => {
    de = fixture.debugElement.query(By.css('.label'));
    ne = de.nativeElement;

    component.label = 'label!';
    await fixture.detectChanges();

    expect(ne.textContent).toContain(component.label);
  });
});
