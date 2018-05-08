import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoBannerComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Info Banner', () => {
  let fixture: ComponentFixture<InfoBannerComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [InfoBannerComponent] as Component[]);

    fixture = TestBed.createComponent(InfoBannerComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
