import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle } from '@angular/material';

@Component({
  selector: 'aeo-toggle-button',
  templateUrl: './aeo-toggle-button.component.html',
  styleUrls: ['./aeo-toggle-button.component.scss']
})
export class AeoToggleButtonComponent implements OnInit {

  @ViewChild(MatButtonToggle) toggleButton: MatButtonToggle;

  constructor() { }

  ngOnInit() {

  }


}
