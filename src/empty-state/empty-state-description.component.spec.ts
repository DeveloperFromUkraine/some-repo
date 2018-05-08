import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateDescriptionComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Empty State Description', () => {
  let fixture: ComponentFixture<EmptyStateDescriptionComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [EmptyStateDescriptionComponent] as Component[]);

    fixture = TestBed.createComponent(EmptyStateDescriptionComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
