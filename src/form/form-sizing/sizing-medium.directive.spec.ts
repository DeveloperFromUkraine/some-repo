import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingMediumDirective } from 'index';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { DebugElement } from '@angular/core/src/debug/debug_node';


@Component({
    template: `
        <p class="directive" ignSizeMedium>medium</p>
        <p class="directive" nuSizeMedium>medium</p>                
        <h1 class="directive" ignSizeMedium="true">mediumTrue</h1>
        <h3 class="directive" nuSizeMedium="true">mediumTrue</h3>        
        <textarea class="directive" ignSizeMedium="false">mediumFalse</textarea>
        <p class="directive" nuSizeMedium="false">mediumFalse</p>
    `
})
class DirectiveHostComponent {
}

describe('SizingMediumDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    let de: DebugElement[];
    const maxWidth: string = '256px';
    const flex: string = '2';

    beforeEach(async(() => {
        ComponentTest.createTestBed([], [DirectiveHostComponent, SizingMediumDirective]);
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
        de = fixture.debugElement.queryAll(By.css('.directive'));
    });

    it('should set max-width to 256px', () => {
        expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
        expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
    });

    it('should set max-width to 256px for ignSizeMedium and nuSizeMedium set to true', () => {
        expect(de[2].nativeElement.style.maxWidth).toBe(maxWidth);
        expect(de[3].nativeElement.style.maxWidth).toBe(maxWidth);        
    });

    it('should set max-width to 256px for ignSizeMedium and nuSizeMedium set to false', () => {
        expect(de[4].nativeElement.style.maxWidth).toBe(maxWidth);  
        expect(de[5].nativeElement.style.maxWidth).toBe(maxWidth);                
    });

    it('should set flex to 2', () => {
        let de = fixture.debugElement.queryAll(By.css('.directive'));

        expect(de[0].nativeElement.style.flex).toBe(flex);
        expect(de[1].nativeElement.style.flex).toBe(flex);
    });

    it('should set flex to 2 for nuSizeMedium and ignSizeMedium set to true', () => {
        expect(de[2].nativeElement.style.flex).toBe(flex);
        expect(de[3].nativeElement.style.flex).toBe(flex);        
    });

    it('should set flex to 2 for nuSizeMedium and ignSizeMedium set to false', () => {
        expect(de[4].nativeElement.style.flex).toBe(flex);
        expect(de[5].nativeElement.style.flex).toBe(flex);        
    });

    describe('NgOnChanges', () => {
        let neIgnMedium: HTMLElement;
        let neNuMedium: HTMLElement;
        let directive: SizingMediumDirective;
        let spyApplyChanges;
        let spyNgOnChanges;

        beforeEach(() => {
            neIgnMedium = de[0].nativeElement;
            neNuMedium = de[1].nativeElement;
            directive = de[0].injector.get(SizingMediumDirective);
            spyApplyChanges = jest.spyOn(directive, 'applyStyleChange').mockImplementation(() => {
                neIgnMedium.style.maxWidth = '256px';
                neNuMedium.style.maxWidth = '256px';
                neIgnMedium.style.flex = '2';
                neNuMedium.style.flex = '2';
            });
            spyNgOnChanges = jest.spyOn(directive, 'ngOnChanges').mockImplementation(() => {
                directive.applyStyleChange();
            });
        });

        it('should set max-width to 256px once triggered', () => {
            neIgnMedium.style.maxWidth = '450px';
            neNuMedium.style.maxWidth = '450px';
            directive.ngOnChanges(null);
    
            expect(directive.ngOnChanges).toHaveBeenCalled();
            expect(directive.applyStyleChange).toHaveBeenCalled();
            expect(neIgnMedium.style.maxWidth).toBe(maxWidth);
            expect(neNuMedium.style.maxWidth).toBe(maxWidth);
        });
    
        it('should set flex to 2 once triggered', () => {
            neIgnMedium.style.flex = '1';
            neNuMedium.style.flex = '1';
            directive.ngOnChanges(null);
    
            expect(directive.ngOnChanges).toHaveBeenCalled();
            expect(directive.applyStyleChange).toHaveBeenCalled();
            expect(neIgnMedium.style.flex).toBe(flex);
            expect(neNuMedium.style.flex).toBe(flex);
        });
    });
});