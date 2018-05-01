import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentEmptyStateComponent } from './list-content-empty-state.component';
import { ComponentTest } from '../../../test/test-bed/component';

describe('List Content Empty State', () => {
  let fixture: ComponentFixture<ListContentEmptyStateComponent>;

  beforeEach(async () => {
    ComponentTest.createTestBed([], [ListContentEmptyStateComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContentEmptyStateComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
