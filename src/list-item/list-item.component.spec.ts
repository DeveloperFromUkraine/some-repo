import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Item', () => {
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListItemComponent] as Component[]);

    fixture = TestBed.createComponent(ListItemComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
