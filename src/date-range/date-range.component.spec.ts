import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateRangeComponent } from './date-range.component';
import { ComponentTest } from '../../test/test-bed/component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { TranslationModule } from '../localization/translation.module';
import { NgModule, Component } from '@angular/core';

describe('Date Range', () => {
  let fixture: ComponentFixture<DateRangeComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed(
      [MatDatepickerModule, MatNativeDateModule, TranslationModule] as NgModule[],
      [DateRangeComponent] as Component[]
    );

    fixture = TestBed.createComponent(DateRangeComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
