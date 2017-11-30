import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ComponentTest } from '../../../test/test-bed/component';
import { SizingSmallDirective } from 'index';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <p ignSizeSmall >one</p>
        <p nuSizeSmall >two</p>
    `
})
class DirectiveHostComponent {
}

describe('SizingSmallDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;
    let directive: ComponentFixture<SizingSmallDirective>;
    const maxWidth: string = '192px';
    const flex: string = '1';
    
    beforeEach(async(() => {
        ComponentTest.createTestBed([], [DirectiveHostComponent, SizingSmallDirective]);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should set max-width to 192px', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));

        expect(de[0].nativeElement.style.maxWidth).toBe(maxWidth);
        expect(de[1].nativeElement.style.maxWidth).toBe(maxWidth);
    });

    it('should set flex to 1', () => {
        let de = fixture.debugElement.queryAll(By.css('p'));

        expect(de[0].nativeElement.style.flex).toBe(flex);
        expect(de[1].nativeElement.style.flex).toBe(flex);
    });
});