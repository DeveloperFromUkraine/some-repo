import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHeaderContainerComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';

describe('Card Header Container', () => {
  let fixture: ComponentFixture<CardHeaderContainerComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [CardHeaderContainerComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderContainerComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
