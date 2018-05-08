import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTitleComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Card Title', () => {
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [CardTitleComponent] as Component[]);

    fixture = TestBed.createComponent(CardTitleComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
