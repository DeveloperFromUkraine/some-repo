import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersistentSearchComponent } from './persistent-search.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { Component, NgModule } from '@angular/core';
import { TranslationModule } from '../localization/translation.module';
import { TranslationMap } from '../localization/translation-map';

describe('Persistent Search Component', () => {
  let fixture: ComponentFixture<PersistentSearchComponent>;
  let component: PersistentSearchComponent;
  let de: DebugElement;
  let ne: HTMLElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [PersistentSearchComponent] as Component[]
    );

    fixture = TestBed.createComponent(PersistentSearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  describe('Input field', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('input'));
      ne = de.nativeElement;
    });
    describe('On key up', () => {
      it('Should call emitSearchEvents', () => {
        spyOn(component, 'emitSearchEvents');

        de.triggerEventHandler('keyup', null);

        expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
      });

      it('Should emit searchEvent', () => {
        let spy = jasmine.createSpy('foo', () => {});

        component.searchCriteria$.subscribe(spy);
        de.triggerEventHandler('keyup', null);

        expect(spy).toHaveBeenCalled();
      });
    });
  });
  describe('Clear button', () => {
    beforeEach(() => {
      component.searchInput.nativeElement.value = 'test';

      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('button'));
      ne = de.nativeElement;
    });
    it('Should display when value present', () => {
      expect(ne).not.toBeNull();
    });
    describe('When clicked', () => {
      it('Should remove value', () => {
        ne.click();

        fixture.detectChanges();

        expect(component.searchInput.nativeElement.value).toBe('');
      });
    });
    it('Should call emitSearchEvents', () => {
      spyOn(component, 'emitSearchEvents');

      de.triggerEventHandler('click', null);

      expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
    });

    it('Should emit searchEvent', () => {
      let spy = jasmine.createSpy('foo', () => {});

      component.searchCriteria$.subscribe(spy);
      de.triggerEventHandler('click', null);

      expect(spy).toHaveBeenCalled();
    });
  });
  describe('placeholder', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('input'));
      ne = de.nativeElement;
    });
    it('Should be set to passed in value', () => {
      component.placeholder = 'Search employees';

      fixture.detectChanges();

      expect(ne.getAttribute('placeholder')).toBe('Search employees');
    });
    it('Should be set to the default value when no value is passed in', () => {
      fixture.detectChanges();

      expect(ne.getAttribute('placeholder')).toBe(TranslationMap['SEARCH']);
    });
  });
  describe('On escape key press', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('input'));
      ne = de.nativeElement;
    });
    it('Should set value to an empty string', () => {
      de.triggerEventHandler('keyup.escape', null);

      fixture.detectChanges();

      expect(component.searchInput.nativeElement.value).toBe('');
    });
    it('Should call emitSearchEvents', () => {
      spyOn(component, 'emitSearchEvents');

      de.triggerEventHandler('keyup.escape', null);

      expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
    });
    it('Should emit searchEvent', () => {
      let spy = jasmine.createSpy('foo', () => {});

      component.searchCriteria$.subscribe(spy);
      de.triggerEventHandler('keyup.escape', null);

      expect(spy).toHaveBeenCalledWith({ searchBy: '' });
    });
  });
  // it('Should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });
});
