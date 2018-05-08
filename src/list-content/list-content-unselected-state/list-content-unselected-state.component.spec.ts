import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContentUnselectedStateComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Content Unselected State', () => {
  let fixture: ComponentFixture<ListContentUnselectedStateComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListContentUnselectedStateComponent] as Component[]);

    fixture = TestBed.createComponent(ListContentUnselectedStateComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
