import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Footer', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [FooterComponent] as Component[]);

    fixture = TestBed.createComponent(FooterComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
