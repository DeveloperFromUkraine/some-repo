import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroupComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';

describe('Form Group', () => {
  let fixture: ComponentFixture<FormGroupComponent>;

  beforeEach(async () => {
    ComponentTest.createTestBed([], [FormGroupComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
