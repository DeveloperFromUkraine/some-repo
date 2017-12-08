import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldComponent } from './field.component';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';

describe('FieldComponent', () => {
    let fixture: ComponentFixture<FieldComponent>;
    let component: FieldComponent;

    beforeEach(async() => {
        ComponentTest.createTestBed([], [FieldComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should set label input', async() => {
        component.label = 'label!';

        await fixture.detectChanges();
        let ne: HTMLElement = fixture.debugElement.query(By.css('.label')).nativeElement;

        expect(ne.textContent).toContain(component.label);
    });
});