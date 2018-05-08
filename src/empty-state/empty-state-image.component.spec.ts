import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateImageComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Empty State Image', () => {
  let fixture: ComponentFixture<EmptyStateImageComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [EmptyStateImageComponent] as Component[]);

    fixture = TestBed.createComponent(EmptyStateImageComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
