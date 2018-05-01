import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightAlignContainerComponent } from './right-align-container.component';
import { ComponentTest } from '../../test/test-bed/component';

describe('Right Align Container', () => {
  let fixture: ComponentFixture<RightAlignContainerComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [RightAlignContainerComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAlignContainerComponent);
  });

  it('Should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
