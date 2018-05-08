import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentComponent } from './index';
import { ComponentTest } from '../../test/test-bed/component';
import { TranslationModule } from '../localization/translation.module';
import { NgModule, Component } from '@angular/core';

describe('List Content', () => {
  let fixture: ComponentFixture<ListContentComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [TranslationModule] as NgModule[],
      [ListContentComponent] as Component[]
    );

    fixture = TestBed.createComponent(ListContentComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
