import { ComponentFixture , TestBed } from '@angular/core/testing';
import { NavListComponent } from './nav-list.component';
import { NavListModule } from './nav-list.module';
import { ComponentTest } from '../../test/test-bed/component';

describe('NavListComponent', () => {
    let fixture: ComponentFixture<NavListComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([NavListModule]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavListComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});
