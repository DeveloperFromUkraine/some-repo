import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextListItemComponent } from './text-list-item.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { ComponentTest } from '../../test/test-bed/component';
import { By } from '@angular/platform-browser';
import { MatListModule } from '@angular/material';

describe('Text List Item', () => {
    let fixture: ComponentFixture<TextListItemComponent>;
    let component: TextListItemComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([MatListModule], [TextListItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TextListItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('Should set primary text', async () => {
        de = fixture.debugElement.query(By.css('.primary-text'));
        ne = de.nativeElement;
        component.primaryText = 'John Doe';

        await component.ngOnChanges();
        await fixture.detectChanges();

        expect(ne.textContent).toContain(component.primaryText);
    });

    it('Should set secondary text', async () => {
        component.primaryText = 'John Doe';
        component.secondaryText = 'Inactive';

        await component.ngOnChanges();
        await fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.secondary-text'));
        ne = de.nativeElement;

        expect(ne.textContent).toContain(component.secondaryText);
    });

    it('Should set tertiary text', async () => {
        component.primaryText = 'John Doe';
        component.secondaryText = 'Inactive';
        component.tertiaryText = 'Last seen 5 minutes ago';

        await component.ngOnChanges();
        await fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.tertiary-text'));
        ne = de.nativeElement;

        expect(ne.textContent).toContain(component.tertiaryText);
    });

    it('Should set secondary text to displayed primary text if no primary text provided', async () => {
        let primaryTextDE = fixture.debugElement.query(By.css('.primary-text'));
        let primaryTextNE = primaryTextDE.nativeElement;
        let secondaryTextDE = fixture.debugElement.query(By.css('.secondary-text'));

        component.secondaryText = 'Inactive';
        await component.ngOnChanges();
        await fixture.detectChanges();

        expect(primaryTextNE.textContent).toContain(component.secondaryText);
        expect(secondaryTextDE).toBeNull();
    });

    it('Should set tertiary text to displayed secondary text if no primary text provided', async () => {
        component.secondaryText = 'Inactive';
        component.tertiaryText = 'Last seen 5 minutes ago';

        await component.ngOnChanges();
        await fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.secondary-text'));
        ne = de.nativeElement;

        expect(ne.textContent).toContain(component.tertiaryText);
    });

    it('Should show only primary text if no other text provided', async () => {
        let primaryTextDE = fixture.debugElement.query(By.css('.primary-text'));
        let primaryTextNE = primaryTextDE.nativeElement;
        let secondaryTextDE = fixture.debugElement.query(By.css('.secondary-text'));
        let tertiaryTextDE = fixture.debugElement.query(By.css('.tertiary-text'));
        component.primaryText = 'Jane Doe';

        await component.ngOnChanges();
        await fixture.detectChanges();

        expect(primaryTextNE.textContent).toContain(component.primaryText);
        expect(secondaryTextDE).toBeNull();
        expect(tertiaryTextDE).toBeNull();
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});
