import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAsideComponent } from './index';
import { ComponentTest } from '../../../test/test-bed/component';
import { Component } from '@angular/core';

describe('Card Aside', () => {
  let fixture: ComponentFixture<CardAsideComponent>;

  beforeEach(() => {
    ComponentTest.createTestBed([], [CardAsideComponent] as Component[]);

    fixture = TestBed.createComponent(CardAsideComponent);
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
