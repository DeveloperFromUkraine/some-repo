import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemContentComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Item Content', () => {
  let fixture: ComponentFixture<ListItemContentComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListItemContentComponent] as Component[]);

    fixture = TestBed.createComponent(ListItemContentComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
