import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateImageComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';

describe('Empty State Image', () => {
  let fixture: ComponentFixture<EmptyStateImageComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [EmptyStateImageComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateImageComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
