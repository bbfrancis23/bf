import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AeoToggleButtonComponent } from './aeo-toggle-button.component';
import { MatButtonToggleModule, MatButtonToggle } from '@angular/material/button-toggle';

describe('AeoToggleButtonComponent', () => {
  let component: AeoToggleButtonComponent;
  let fixture: ComponentFixture<AeoToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonToggleModule],
      declarations: [AeoToggleButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeoToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should recognize a toggleButton', async(() => {
    fixture.detectChanges();
    const toggleButton: MatButtonToggle = fixture.componentInstance.toggleButton;
    expect(toggleButton).toBeDefined();
  }));

});


describe('AeoToggleButtonComponent', () => {
  it('should create an instance', () => {
    const comp = new AeoToggleButtonComponent();
    expect(comp).toBeTruthy();
  });
});
