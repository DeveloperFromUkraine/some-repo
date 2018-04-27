import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';
import { TranslationDirective } from './translation.directive';
import { TranslationModule } from './translation.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslationMap } from './translation-map';
import { TranslationService } from './translation.service';

@Component({
    template: `
        <p translateIDS da="component">SEARCH</p>
        <img/>
    `
})
class HostComponent {
}

describe('Translation Directive', () => {
    let directive: TranslationDirective;
    let fixture: ComponentFixture<HostComponent>;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([TranslationModule], [HostComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('[da=component]'));
        directive = de.injector.get(TranslationDirective);
    });

    it('should call for updateTranslation when the translation mapping is changed', () => {
        const spy = jest.spyOn(directive, "updateTranslation");

        TranslationService.updateTranslation("SEARCH", "Search");

        expect(spy).toHaveBeenCalled();
     })

    it('should change the text from translation keys to string', () => {
        ne = de.nativeElement;

        expect(ne.innerHTML).toBe("Search");
    });

    it('should return the correct translated string when getTranslation is called', () => {
        const translation = directive.getTranslation("SEARCH", TranslationMap);

        expect(translation).toContain("Search");
    });

    it("should update the contents of the components when the language is updated", () => { 
        jest.spyOn(directive, "setContent");
        jest.spyOn(directive, "getContent");
        let nodes: NodeList = de.nativeElement.childNodes;
        directive.element = de;

        directive.updateTranslation(TranslationMap);

        // check that correct functions called
        expect(directive.setContent).toHaveBeenCalledWith(nodes[0], "Search");
        expect(directive.getContent).not.toHaveBeenCalled();

        // check that element content set properly
        const value = directive.getContent(nodes[0]);

        expect(value).toContain("Search");
    });

    it("should call getContent if originalContent undefined", () => { 
        jest.spyOn(directive, "setContent");
        jest.spyOn(directive, "getContent");
        directive.element = de;
        let nodes: NodeList = de.nativeElement.childNodes;
        nodes[0].originalContent = undefined; 
        nodes[0].data = "SEARCH";
        
        directive.updateTranslation(TranslationMap);

        // check that correct functions called
        expect(directive.setContent).toHaveBeenCalledWith(nodes[0], "Search");
        expect(directive.getContent).toHaveBeenCalled();
    });

    it("should get the node data when textContent not available", () => { 
        directive.element = de;
        let nodes: NodeList = de.nativeElement.childNodes;
        nodes[0].textContent = undefined; 
        nodes[0].data = "SEARCH";

        directive.setContent(nodes[0], "Data");

        expect(nodes[0].data).toBe("Data");
    });

    it("should return node data if textContent is not available", () => { 
        directive.element = de;
        let nodes: NodeList = de.nativeElement.childNodes;
        nodes[0].textContent = undefined; 
        nodes[0].data = "data";

        const data = directive.getContent(nodes[0]);

        expect(data).toBe("data");
    });
});