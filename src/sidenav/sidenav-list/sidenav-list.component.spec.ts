import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavListComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';

describe('Side Nav List', () => {
  let fixture: ComponentFixture<SideNavListComponent>;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [SideNavListComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavListComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
