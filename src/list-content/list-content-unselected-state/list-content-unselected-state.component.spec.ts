import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentUnselectedStateComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';

describe('List Content Unselected State', () => {
  let fixture: ComponentFixture<ListContentUnselectedStateComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [ListContentUnselectedStateComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContentUnselectedStateComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
