import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSelectionComponent } from './index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Selection', () => {
  let fixture: ComponentFixture<ListSelectionComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListSelectionComponent] as Component[]);

    fixture = TestBed.createComponent(ListSelectionComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
