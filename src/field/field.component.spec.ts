import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FieldComponent, FieldInlineComponent, EditableFieldComponent, EditableFieldInlineComponent} from './field.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material';

describe('FieldComponent', () => {
    let fixture: ComponentFixture<FieldComponent>;
    let component: FieldComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        ComponentTest.createTestBed([], [FieldComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set label input', async () => {
        de = fixture.debugElement.query(By.css('.label'));
        ne = de.nativeElement;

        component.label = 'label!';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.label);
    });

    it('should match snapshot', async () => {
        component.label = 'label!';
        await fixture.detectChanges();

        expect(fixture).toMatchSnapshot();
    });
});

describe('FieldInlineComponent', () => {
    let fixture: ComponentFixture<FieldInlineComponent>;
    let component: FieldInlineComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        ComponentTest.createTestBed([], [FieldInlineComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldInlineComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set label input', async () => {
        de = fixture.debugElement.query(By.css('.label'));
        ne = de.nativeElement;

        component.label = 'label!';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.label);
    });
});

describe('EditableFieldComponent', () => {
    let fixture: ComponentFixture<EditableFieldComponent>;
    let component: EditableFieldComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        ComponentTest.createTestBed([MatIconModule], [EditableFieldComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditableFieldComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set label input', async () => {
        de = fixture.debugElement.query(By.css('.label'));
        ne = de.nativeElement;

        component.label = 'label!';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.label);
    });

    it('should show mode_edit icon when none specified', async() => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;
        
        const DEFAULT_LABEL =  'mode_edit';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(DEFAULT_LABEL);
    });

    it('should show user defined icon when none specified', async() => {
        de = fixture.debugElement.query(By.css('mat-icon'));
        ne = de.nativeElement;
        
        component.editIcon = 'home';
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.editIcon);
    });

    it('should call handleClick when click event emitted', async () => {
        de = fixture.debugElement.query(By.css('.mat-icon-button'));
        ne = de.nativeElement;

        let spy = jest.fn();

        component.onIconClick.subscribe(spy);
        de.triggerEventHandler('click', null);
        await fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });
});
