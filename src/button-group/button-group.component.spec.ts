import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Button Group', () => {
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ButtonGroupComponent] as Component[]);

    fixture = TestBed.createComponent(ButtonGroupComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
