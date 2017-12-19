import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SideNavListItemComponent } from './index';
import { ComponentTest } from "../../../test/test-bed/component";

describe('SideNavListItemComponent', () => {
    let fixture: ComponentFixture<SideNavListItemComponent>;
    let component: SideNavListItemComponent;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [SideNavListItemComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavListItemComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should match snapshot', async () => {
        component.icon = 'mail';
        component.description = 'test description';

        await fixture.detectChanges();
        
        expect(fixture).toMatchSnapshot();
    });
});