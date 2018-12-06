import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import {Component, Input} from '@angular/core';
import {ExpandableSearchModule} from './expandable-search.module';

@Component({
  selector: 'host-component',
  template: `
      <ign-expandable-search
        [focusOnSearchExpanded]="focusOnSearchExpanded">
      </ign-expandable-search>`
})
export class HostComponent {
  @Input() focusOnSearchExpanded: boolean;
}

describe('Expandable Search', () => {
  let fixture: ComponentFixture<HostComponent>;
  let de: DebugElement;
  let ne: HTMLElement;
  let icon: DebugElement;
  let searchInputDE: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExpandableSearchModule],
      declarations: [HostComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);

    fixture.detectChanges();
  });

  describe('Search button', () => {
    beforeEach(() => {
      de = fixture.debugElement.query(By.css('[da=searchButton]'));
      ne = de.nativeElement;
      icon = fixture.debugElement.query(By.css('[da=searchIcon]'));
      searchInputDE = fixture.debugElement.query(By.css('[da=searchInput]'));
    });
    it('Should display with search icon when search not expanded', () => {
      fixture.detectChanges();

      expect(icon.attributes.da).toEqual('searchIcon');
    });
    it('Should expand search on click', () => {
      ne.click();
      fixture.detectChanges();
      icon = fixture.debugElement.query(By.css('[da=searchIcon]'));

      expect(icon).toBeNull();
    });
    describe('When search is expanded', () => {
      beforeEach(() => {
        ne.click();
        fixture.detectChanges();
      });
      describe('Search button', () => {
        it('Should display with back arrow icon', () => {
          icon = fixture.debugElement.query(By.css('[da=backIcon]'));

          expect(icon.attributes.da).toEqual('backIcon');
        });
        describe('On click', () => {
          beforeEach(() => {
            ne.click();

            fixture.detectChanges();
          });
          it('Should revert search buttons back-arrow icon to search icon', () => {
            icon = fixture.debugElement.query(By.css('[da=backIcon]'));
            let searchIcon = fixture.debugElement.query(By.css('[da=searchIcon]'));

            expect(icon).toBeNull();
            expect(searchIcon.attributes.da).toEqual('searchIcon');
          });
          it('Should clear search input value', () => {
            expect(searchInputDE.nativeElement.value).toBe('');
          });
          describe('Expanded search field', () => {
            it('Should display', () => {
              expect(searchInputDE.attributes.da).toEqual('searchInput');
            });
          });
        });
      });
    });
  });
});
