import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateDescriptionComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';

describe('Empty State Description', () => {
  let fixture: ComponentFixture<EmptyStateDescriptionComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [EmptyStateDescriptionComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateDescriptionComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
