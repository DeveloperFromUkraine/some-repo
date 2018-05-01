import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavHeaderComponent } from './index';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { ComponentTest } from '../../../test/test-bed/component';
import { By } from '@angular/platform-browser';

describe('Side Nav Header', () => {
  let fixture: ComponentFixture<SideNavHeaderComponent>;
  let component: SideNavHeaderComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(async () => {
    await ComponentTest.createTestBed([], [SideNavHeaderComponent]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavHeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should set title', async () => {
    de = fixture.debugElement.query(By.css('.name'));
    ne = de.nativeElement;

    component.title = 'test';
    await fixture.detectChanges();

    expect(ne.textContent).toContain(component.title);
  });

  it('should not set title if no title set', () => {
    de = fixture.debugElement.query(By.css('.name'));
    ne = de.nativeElement;

    expect(ne.textContent).not.toContain(component.title);
  });

  it('should set subtitle', async () => {
    de = fixture.debugElement.query(By.css('.position'));
    ne = de.nativeElement;

    component.subtitle = 'test';
    await fixture.detectChanges();

    expect(ne.textContent).toContain(component.subtitle);
  });

  it('should not set subtitle if no subtitle set', () => {
    de = fixture.debugElement.query(By.css('.position'));
    ne = de.nativeElement;

    expect(ne.textContent).not.toContain(component.subtitle);
  });

  it('should match snapshot', async () => {
    component.title = 'title';
    component.subtitle = 'subTitle';

    await fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
