import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingContainerComponent } from './loading-container.component';
import { ComponentTest } from '../../test/test-bed/component';
import { DebugElement, Component, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslationModule } from '../localization/translation.module';

describe('Loading Container', () => {
  let fixture: ComponentFixture<LoadingContainerComponent>;
  let component: LoadingContainerComponent;
  let de: DebugElement;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [LoadingContainerComponent] as Component[]
    );

    fixture = TestBed.createComponent(LoadingContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should have spinner-container if loading', () => {
    // strange issue with the jasmine clock, just uninstall before installing
    jasmine.clock().uninstall();
    jasmine.clock().install();
    // jest.useFakeTimers();
    component.ngOnInit();
    // jest.runAllTimers();
    jasmine.clock().tick(401);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.spinner-container'));

    expect(de).toBeTruthy();
    jasmine.clock().uninstall();
  });

  it('should not have spinner-container if not loading', () => {
    component.loading = false;

    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.spinner-container'));

    expect(de).toBeNull();
  });

  // it('should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });
});
