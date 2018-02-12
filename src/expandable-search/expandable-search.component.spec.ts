import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableSearchComponent } from './expandable-search.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

describe('ExpandableSearchComponent', () => {
    let fixture: ComponentFixture<ExpandableSearchComponent>;
    let component: ExpandableSearchComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatFormFieldModule, MatIconModule, MatInputModule], [ExpandableSearchComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandableSearchComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    describe('Search button', () => {
        beforeEach(() => {
            de = fixture.debugElement.query(By.css('[da=searchButton]'));
            ne = de.nativeElement;
        });
        it('Should display when search not expanded', () => {
            fixture.detectChanges();

            expect(ne).not.toBeNull();
        });
        it('Should expand search on click', () => {
            ne.click();
            fixture.detectChanges();
            let searchDE = fixture.debugElement.query(By.css('[da=searchButton]'));

            expect(searchDE).toBeNull();
            expect(component.searchExpanded).toBe(true);
        });
    });
    describe('When search is expanded', () => {
        beforeEach(() => {
            component.searchExpanded = true;

            fixture.detectChanges();
        });
        describe('Cancel search button', () => {
            beforeEach(() => {
                de = fixture.debugElement.query(By.css('[da=cancelSearchButton]'));
                ne = de.nativeElement;
            });
            it('Should display', () => {
                expect(ne).not.toBeNull();
            });
            describe('On click', () => {
                let inputDE: DebugElement;
                let inputNE: HTMLElement;
                beforeEach(() => {
                    inputDE = fixture.debugElement.query(By.css('input'));
                    inputNE = inputDE.nativeElement;
                    component.searchInput.nativeElement.value = 'Emp';

                    ne.click();

                    fixture.detectChanges();
                });
                it('Should collapse cancel search button', () => {
                    let searchButtonDE = fixture.debugElement.query(By.css('[da=cancelSearchButton]'));

                    expect(searchButtonDE).toBeNull();
                });
                it('Should clear search input value', () => {
                    expect(component.searchInput.nativeElement.value).toBe('');
                });
                it('Should call emitSearchEvents', () => {
                    jest.spyOn(component, 'emitSearchEvents');

                    de.triggerEventHandler('click', null);

                    expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
                });

                it('Should emit searchEvent', () => {
                    let spy = jest.fn();

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
                    jest.spyOn(component, 'emitSearchEvents');

                    de.triggerEventHandler('keyup', null);

                    expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
                });

                it('Should emit searchEvent', () => {
                    let spy = jest.fn();

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
                jest.spyOn(component, 'emitSearchEvents');

                de.triggerEventHandler('click', null);

                expect(component.emitSearchEvents).toHaveBeenCalledTimes(1);
            });

            it('Should emit searchEvent', () => {
                let spy = jest.fn();

                component.searchCriteria$.subscribe(spy);
                de.triggerEventHandler('click', null);

                expect(spy).toHaveBeenCalled();
            });
        });
    });
    it('Should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});
