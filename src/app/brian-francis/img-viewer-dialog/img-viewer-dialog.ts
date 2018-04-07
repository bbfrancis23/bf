import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'img-viewer-dialog',
  template: `Hello`
})
export class ImgViewerDialog { constructor(public dialogRef: MatDialogRef<ImgViewerDialog>) { } }
