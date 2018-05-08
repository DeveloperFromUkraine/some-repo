import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentEmptyStateComponent } from './list-content-empty-state.component';
import { ComponentTest } from '../../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Content Empty State', () => {
  let fixture: ComponentFixture<ListContentEmptyStateComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListContentEmptyStateComponent] as Component[]);

    fixture = TestBed.createComponent(ListContentEmptyStateComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
