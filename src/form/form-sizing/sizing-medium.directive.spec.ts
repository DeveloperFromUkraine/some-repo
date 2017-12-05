import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingMediumDirective } from 'index';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { DebugElement } from '@angular/core/src/debug/debug_node';


@Component({
    template: `
        <p id="one" ignSizeMedium>medium</p>
        <p id="two" nuSizeMedium>medium</p>                
        <p id="three" ignSizeMedium="true">mediumTrue</p>
        <p id="four" ignSizeMedium="false">mediumFalse</p>
        <p id="five" nuSizeMedium="true">mediumTrue</p>
        <p id="six" nuSizeMedium="false">mediumFalse</p>
    `
})
class DirectiveHostComponent {
}

describe('SizingMediumDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    const maxWidth: string = '256px';
    const flex: string = '2';

    beforeEach(async(() => {
        ComponentTest.createTestBed([], [DirectiveHostComponent, SizingMediumDirective]);
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should set max-width to 256px', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));

        expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
        expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
    });

    it('should set max-width to 256px for ignSizeMedium set to true', () => {
        let de = fixture.debugElement.query(By.css('#three'));

        expect(de.nativeElement.style.maxWidth).toBe(maxWidth);
    });

    it('should set max-width to 256px for ignSizeMedium set to false', () => {
        let de = fixture.debugElement.query(By.css('#four'));

        expect(de.nativeElement.style.maxWidth).toBe(maxWidth);
    });

    it('should set flex to 2', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));

        expect(de[0].nativeElement.style.flex).toBe(flex);
        expect(de[1].nativeElement.style.flex).toBe(flex);
    });

    it('should set flex to 2 for nuSizeMedium set to true', () => {
        let de = fixture.debugElement.query(By.css('#five'));

        expect(de.nativeElement.style.flex).toBe(flex);
    });

    it('should set flex to 2 for nuSizeMedium set to false', () => {
        let de = fixture.debugElement.query(By.css('#six'));

        expect(de.nativeElement.style.flex).toBe(flex);
    });

    it('should set max-width to 256px once ngOnChanges is triggered by a change in the template', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));
        let neIgnMedium: HTMLElement = de[0].nativeElement;
        let neNuMedium: HTMLElement = de[1].nativeElement;
        let directive: SizingMediumDirective = de[0].injector.get(SizingMediumDirective);
        let spyApplyChanges = jest.spyOn(directive, "applyStyleChange").mockImplementation(() => {
            neIgnMedium.style.maxWidth = '256px';
            neNuMedium.style.maxWidth = '256px';
        });
        let spyNgOnChanges = jest.spyOn(directive, 'ngOnChanges').mockImplementation(() => {
            directive.applyStyleChange();
        });

        neIgnMedium.style.maxWidth = '450px';
        neNuMedium.style.maxWidth = '450px';
        directive.ngOnChanges(null);

        expect(directive.ngOnChanges).toHaveBeenCalled();
        expect(directive.applyStyleChange).toHaveBeenCalled();
        expect(neIgnMedium.style.maxWidth).toBe(maxWidth);
        expect(neNuMedium.style.maxWidth).toBe(maxWidth);
    });

    it('should set flex to 2 once ngOnChanges is triggered by a change in the template', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));
        let neIgnMedium: HTMLElement = de[0].nativeElement;
        let neNuMedium: HTMLElement = de[1].nativeElement;
        let directive: SizingMediumDirective = de[0].injector.get(SizingMediumDirective);
        let spyApplyChanges = jest.spyOn(directive, "applyStyleChange").mockImplementation(() => {
            neIgnMedium.style.flex = '2';
            neNuMedium.style.flex = '2';
        });
        let spyNgOnChanges = jest.spyOn(directive, 'ngOnChanges').mockImplementation(() => {
            directive.applyStyleChange();
        });

        neIgnMedium.style.flex = '1';
        neNuMedium.style.flex = '1';
        directive.ngOnChanges(null);

        expect(directive.ngOnChanges).toHaveBeenCalled();
        expect(directive.applyStyleChange).toHaveBeenCalled();
        expect(neIgnMedium.style.flex).toBe(flex);
        expect(neNuMedium.style.flex).toBe(flex);
    });
});