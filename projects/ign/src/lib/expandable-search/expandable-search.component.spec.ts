import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableSearchComponent } from './expandable-search.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { TranslationModule } from '../localization/translation.module';
import { Component, NgModule } from '@angular/core';

describe('Expandable Search', () => {
  let fixture: ComponentFixture<ExpandableSearchComponent>;
  let component: ExpandableSearchComponent;
  let de: DebugElement;
  let ne: HTMLElement;
  let icon: DebugElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [ExpandableSearchComponent] as Component[]
    );

    fixture = TestBed.createComponent(ExpandableSearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('Search button', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('[da=searchButton]'));
      ne = de.nativeElement;
      icon = fixture.debugElement.query(By.css('[da=searchIcon]'));
    });
    it('Should display with search icon when search not expanded', () => {
      fixture.detectChanges();

      expect(icon).not.toBeNull();
    });
    it('Should expand search on click', () => {
      spyOn(component.searchInput.nativeElement, 'focus');
      ne.click();
      fixture.detectChanges();
      icon = fixture.debugElement.query(By.css('[da=searchIcon]'));

      expect(icon).toBeNull();
      expect(component.searchExpanded).toBe(true);
      expect(component.searchInput.nativeElement.focus).toHaveBeenCalledTimes(1);
    });
  });
  describe('When search is expanded', () => {
    beforeEach(() => {
      component.searchExpanded = true;

      fixture.detectChanges();
    });
    describe('Search button', () => {
      beforeEach(() => {
        de = fixture.debugElement.query(By.css('[da=searchButton]'));
        ne = de.nativeElement;
      });
      it('Should display with back arrow icon', () => {
        icon = fixture.debugElement.query(By.css('[da=backIcon]'));
        expect(icon).not.toBeNull();
      });
      describe('On click', () => {
        beforeEach(() => {
          component.searchInput.nativeElement.value = 'Emp';

          ne.click();

          fixture.detectChanges();
        });
        it('Should revert search buttons back-arrow icon to search icon', () => {
          icon = fixture.debugElement.query(By.css('[da=backIcon]'));

          expect(icon).toBeNull();
        });
        it('Should clear search input value', () => {
          expect(component.searchInput.nativeElement.value).toBe('');
        });

        it('Should emit searchEvent', () => {
          let spy = jasmine.createSpy('foo', () => {});

          component.searchCriteria$.subscribe(spy);
          de.triggerEventHandler('click', null);

          expect(spy).toHaveBeenCalled();
        });
      });
    });
    describe('Expanded search field', () => {
      beforeEach(() => {
        de = fixture.debugElement.query(By.css('input'));
        ne = de.nativeElement;
      });
      it('Should display', () => {
        expect(ne).not.toBeNull();
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
    describe('Search clear button', () => {
      beforeEach(() => {
        component.searchInput.nativeElement.value = 'Emp';

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('[da=clearButton]'));
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
  });
  // it('Should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });
});
