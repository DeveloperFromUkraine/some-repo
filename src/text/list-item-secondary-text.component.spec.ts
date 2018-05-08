import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemSecondaryTextComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Item Secondary Text', () => {
  let fixture: ComponentFixture<ListItemSecondaryTextComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListItemSecondaryTextComponent] as Component[]);

    fixture = TestBed.createComponent(ListItemSecondaryTextComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
