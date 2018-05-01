import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectContainerComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';

describe('Select Container', () => {
  let fixture: ComponentFixture<SelectContainerComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [SelectContainerComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContainerComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
