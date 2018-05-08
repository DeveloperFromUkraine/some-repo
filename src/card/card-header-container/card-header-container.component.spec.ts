import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHeaderContainerComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Card Header Container', () => {
  let fixture: ComponentFixture<CardHeaderContainerComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [CardHeaderContainerComponent] as Component[]);

    fixture = TestBed.createComponent(CardHeaderContainerComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
