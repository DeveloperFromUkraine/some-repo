import { ComponentTest } from '../../test/test-bed/component';
import { ExpandableFabItemComponent } from 'index';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('ExpandableFabItemComponent', () => {
    let fixture: ComponentFixture<ExpandableFabItemComponent>;
    let component: ExpandableFabItemComponent;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatIconModule], [ExpandableFabItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpandableFabItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should be truthy', () => {
        expect(component).toBeTruthy();
    });

    it('should set tooltipText', async(() => {
        let ne: HTMLInputElement = fixture.debugElement.query(By.css('span')).nativeElement;        
        component.tooltipText = 'toolTip';

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(ne.value).toEqual(component.tooltipText);            
        });
    }));
});