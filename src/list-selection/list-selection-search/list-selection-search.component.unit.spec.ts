import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSelectionSearchComponent } from 'index';
import { ComponentTest } from '../../../test/test-bed/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('ListSelectionSearchComponent', () => {
    let component: ListSelectionSearchComponent;
    let spy;

    beforeEach(() => {
        component = new ListSelectionSearchComponent();
        spy = jest.fn();

        component.filterInput$.subscribe(spy);
    });

    it('should emit to filterInput$ when value set in FormControl', () => {
        component.searchCtrl.setValue('text');

        expect(spy).toHaveBeenCalledWith('text');
    });

    it('should emit to filterInput$ once when same value set twice in FormControl', () => {
        component.searchCtrl.setValue('text');
        component.searchCtrl.setValue('text');

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenLastCalledWith('text');
    });

    it('should emit to filterInput$ once when same value with spaces set twice in FormControl', () => {
        component.searchCtrl.setValue('text');
        component.searchCtrl.setValue('  text  ');

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('text');
    });

    it('should emit to filterInput$ twice when two different values set in FormControl', () => {
        component.searchCtrl.setValue('text');
        component.searchCtrl.setValue('value');

        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should not emit to filterInput$ if empty value emitted by FormControl', () => {
        component.searchCtrl.setValue('');

        expect(spy).toHaveBeenCalledTimes(0);
    });
});