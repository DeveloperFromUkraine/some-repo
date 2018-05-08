import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateTitleComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Empty State Title', () => {
  let fixture: ComponentFixture<EmptyStateTitleComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [EmptyStateTitleComponent] as Component[]);

    fixture = TestBed.createComponent(EmptyStateTitleComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
