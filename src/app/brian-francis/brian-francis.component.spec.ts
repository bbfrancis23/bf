import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';

import { BrianFrancisComponent } from './brian-francis.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { AeoModule } from '../aeo/aeo.module';

describe('BrianFrancisComponent', () => {
  let component: BrianFrancisComponent;
  let fixture: ComponentFixture<BrianFrancisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AeoModule, MatIconModule],
      declarations: [BrianFrancisComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianFrancisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
