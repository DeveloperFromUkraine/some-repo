import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListContentComponent, ListContentCardComponent } from "./index";
import { ComponentTest } from "../../test/test-bed/component";
import { TranslationModule } from '../localization/translation.module';

describe('List Content', () => {
    let fixture: ComponentFixture<ListContentComponent>;

    beforeEach(async () => {
        await ComponentTest.createTestBed([TranslationModule], [ListContentComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListContentComponent);
    });

    it('should match snapshot', () => {
        expect(fixture).toMatchSnapshot();
    });
});