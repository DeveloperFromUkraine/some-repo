import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentComponent } from './index';
import { ComponentTest } from '../../test/test-bed/component';
import { TranslationModule } from '../localization/translation.module';
import { NgModule, Component } from '@angular/core';

describe('List Content', () => {
  let fixture: ComponentFixture<ListContentComponent>;
  let component: ListContentComponent;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [ListContentComponent] as Component[]
    );

    fixture = TestBed.createComponent(ListContentComponent);
    component = fixture.componentInstance;
  });

  // it('should match snapshot', () => {
  //   expect(fixture).toMatchSnapshot();
  // });

  describe('When onClick event is triggered', () => {
    let spy: any;
    beforeEach(() => {
      spy = spyOn(component, 'skipListContent');
    });

    it('should call skipListContent if id is skip-list', () => {
      const event = { target: { id: 'skip-list' } };

      component.onclick(event);

      expect(spy).toHaveBeenCalled();
    });

    it('should not call skipListContent if id is not skip-list', () => {
      const event = { target: { id: '' } };

      component.onclick(event);

      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('should update view if skipListContent is called', () => {
    const scrollSpy = jasmine.createSpy('scrollIntoView');
    const focusSpy = jasmine.createSpy('focus');
    spyOn(document, 'getElementById').and.returnValue({
      scrollIntoView: scrollSpy,
      focus: focusSpy,
    });

    component.skipListContent();

    expect(scrollSpy).toHaveBeenCalledWith(true);
    expect(focusSpy).toHaveBeenCalled();
  });
});
