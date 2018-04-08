import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../../app.service';

@Component({
  selector: 'img-viewer-dialog',
  template: `

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li  *ngFor="let img of images; let i = index" (click)="imagesIndex = i" matTooltip="{{img.title}}" ></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="http://boats.iboats.com"><img class="d-block " [src]="images[imagesIndex].src" alt="First slide" style="height: 75vh"></a>
      <div class="carousel-caption d-none d-md-block">
        <p class="alert alert-primary">{{images[imagesIndex].title}}</p>
      </div>
    </div>
  </div>
  <a  class="carousel-control-prev" (click)="imagesIndex = imagesIndex - 1">
    <button  mat-mini-fab color="accent">
      <mat-icon aria-label="Previous Imgage">keyboard_arrow_left</mat-icon>
    </button>
  </a>
  <a  class="carousel-control-next" (click)="nextImg()" >
    <button  mat-mini-fab color="accent">
      <mat-icon aria-label="Previous Imgage">keyboard_arrow_right</mat-icon>
    </button>
  </a>
</div>`,
  //styleUrls: ['./settings-dialog.scss']
})
export class ImgViewerDialog {

  images: [{}];
  imagesIndex = 0;

  constructor(public dialogRef: MatDialogRef<ImgViewerDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images;

  }

  clicky(i) {
    console.log(i);
  }

  nextImg() {


    this.imagesIndex = ((this.imagesIndex + 1) >= this.images.length) ? 0 : (this.imagesIndex + 1);
  }

  prevImg() {

  }
}
