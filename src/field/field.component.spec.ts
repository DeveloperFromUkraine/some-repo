import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldComponent } from './field.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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
});
