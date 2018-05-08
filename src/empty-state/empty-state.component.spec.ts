import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Empty State', () => {
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [EmptyStateComponent] as Component[]);

    fixture = TestBed.createComponent(EmptyStateComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
