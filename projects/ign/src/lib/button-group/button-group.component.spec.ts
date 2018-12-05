import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonGroupModule } from './button-group.module';

@Component({
  template: `
        <ign-button-group class="button-group">
            <button
                class="cancel-button">
                Cancel
            </button>
            <button
                class="save-button">
                Save and Import
            </button>
        </ign-button-group>
    `,
})
class HostComponent {}

describe('Button Group', () => {
  let fixture: ComponentFixture<HostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonGroupModule],
      declarations: [HostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should project buttons', () => {
    let cancelBtn = de.query(By.css('.cancel-button'));
    let saveBtn = de.query(By.css('.save-button'));

    expect(cancelBtn).toBeDefined();
    expect(saveBtn).toBeDefined();
  });

  describe('margin-left', () => {
    it('should not be modified for the first child', () => {
      let cancelBtnNE = de.query(By.css('.cancel-button')).nativeElement;

      expect(getComputedStyle(cancelBtnNE).marginLeft).toBe('0px');
    });
    it('should be 1rem/16px for the second child', () => {
      let saveBtnNE = de.query(By.css('.save-button')).nativeElement;

      expect(getComputedStyle(saveBtnNE).marginLeft).toBe('16px');
    });
  });
});
