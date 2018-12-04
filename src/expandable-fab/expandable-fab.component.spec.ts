import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableFabComponent } from './expandable-fab.component';
import { ComponentTest } from '../../test/test-bed/component';
import { DebugElement, Component, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslationModule } from '../localization/translation.module';
import { ExpandableFabItemComponent } from '..';

@Component({
  template: `
    <ign-expandable-fab>
      <ign-expandable-fab-item icon="add"></ign-expandable-fab-item>
    </ign-expandable-fab>
  `,
})
class ExpandableFabHostComponent {}

describe('Expandable Fab', () => {
  let fixture: ComponentFixture<ExpandableFabHostComponent>;
  let component: ExpandableFabComponent;
  let de: DebugElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [
        ExpandableFabHostComponent,
        ExpandableFabComponent,
        ExpandableFabItemComponent,
      ] as Component[]
    );

    fixture = TestBed.createComponent(ExpandableFabHostComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();
  });

  it('should trigger handleClick when click event emitted', () => {
    de = fixture.debugElement.query(By.css('.icon-container'));
    jest.spyOn(component, 'handleClick');

    de.triggerEventHandler('click', null);

    expect(component.handleClick).toHaveBeenCalled();
  });

  describe('when handleClick is triggered', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('.icon-container'));
    });

    it('should set activeClass to active if activeClass is null', () => {
      de.triggerEventHandler('click', null);

      expect(component.activeClass).toBe('active');
    });

    it('should set activeClass to null if activeClass is not null', () => {
      component.activeClass = 'not null';

      de.triggerEventHandler('click', null);

      expect(component.activeClass).toBe(null);
    });

    it('should set ariaLabelValue to open if isOpen is true', () => {
      component.isOpen = true;

      de.triggerEventHandler('click', null);

      expect(component.ariaLabelValue).toBe(
        component.translatePipe.transform(component.ariaLabelOpen)
      );
    });

    it('should set ariaLabelValue to close if isOpen is false', () => {
      component.isOpen = false;

      de.triggerEventHandler('click', null);

      expect(component.ariaLabelValue).toBe(
        component.translatePipe.transform(component.ariaLabelClose)
      );
    });
  });

  describe('When onChanges lifecycle hook is triggered', () => {
    it('should set ariaLabelValue to close if isOpen is true', () => {
      component.isOpen = true;

      component.ngOnChanges();

      expect(component.ariaLabelValue).toBe(
        component.translatePipe.transform(component.ariaLabelClose)
      );
    });

    it('should set ariaLabelValue to open if isOpen is false', () => {
      component.isOpen = false;

      component.ngOnChanges();

      expect(component.ariaLabelValue).toBe(
        component.translatePipe.transform(component.ariaLabelOpen)
      );
    });
  });

  it('should call handleClick when the child emits a clicked event', () => {
    const spy = spyOn(component, 'handleClick');

    component.btns.first.clicked.emit();
    component.ngAfterContentInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should have active classes if isOpen is true', () => {
    component.isOpen = true;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.active'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.icon-primary-active'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.icon-secondary-active'))).toBeTruthy();
  });

  it('should not have active class if isOpen is false', () => {
    expect(fixture.debugElement.query(By.css('.active'))).not.toBeTruthy();
    expect(fixture.debugElement.query(By.css('.icon-primary-active'))).not.toBeTruthy();
    expect(fixture.debugElement.query(By.css('.icon-secondary-active'))).not.toBeTruthy();
  });

  it('should match snapshot', () => {
    component.isOpen = true;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
