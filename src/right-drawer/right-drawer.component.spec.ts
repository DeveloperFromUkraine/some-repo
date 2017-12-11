import { RightDrawerComponent } from 'index';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentTest } from '../../test/test-bed/component';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('RightDrawerComponent', () => {
    let fixture: ComponentFixture<RightDrawerComponent>;
    let component: RightDrawerComponent;
    let de: DebugElement;
    let ne: HTMLElement;

    beforeEach(async () => {
        await ComponentTest.createTestBed([], [RightDrawerComponent]);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RightDrawerComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create title-container if title is set', () => {

    });

    it('should net create title-container if title is not set', () => {

    });

    it('should set title', () => {

    });

    it('should not set title', () => {

    });

    it('should call closeDrawer when click event emitted', () => {

    });

    it('should emit openChange event', () => {

    });
});