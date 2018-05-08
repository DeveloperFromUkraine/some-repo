import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemPrimaryTextComponent } from '../index';
import { ComponentTest } from '../../test/test-bed/component';
import { Component } from '@angular/core';

describe('List Item Primary Text', () => {
  let fixture: ComponentFixture<ListItemPrimaryTextComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [ListItemPrimaryTextComponent] as Component[]);

    fixture = TestBed.createComponent(ListItemPrimaryTextComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
