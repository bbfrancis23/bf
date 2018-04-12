import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../../app.service';

@Component({
  selector: 'img-viewer-dialog',
  template: `
  <div class="text-center">
    <span mat-dialog-title>{{title}}</span>
    <mat-dialog-content>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li  *ngFor="let img of images; let i = index" (click)="imagesIndex = i" matTooltip="{{img?.title}}" [ngClass]="{'active': imagesIndex === i}"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block " [src]="images[imagesIndex].src"  style="height: 50vh; ">
      <div class="carousel-caption d-none d-md-block">
        <p class="alert alert-primary"><a [href]="images[imagesIndex].link" target="_blank">{{images[imagesIndex]?.title}}</a></p>
      </div>
    </div>
  </div>
  <a  class="carousel-control-prev" (click)="prevImg()">
    <button  mat-mini-fab color="accent">
      <mat-icon aria-label="Previous Imgage">keyboard_arrow_left</mat-icon>
    </button>
  </a>
  <a  class="carousel-control-next" (click)="nextImg()" >
    <button  mat-mini-fab color="accent">
      <mat-icon aria-label="Previous Imgage">keyboard_arrow_right</mat-icon>
    </button>
  </a>
</div></mat-dialog-content>
<br>
<button mat-mini-fab  [mat-dialog-close]="true"  ><mat-icon  aria-label="Okay">check</mat-icon></button>
</div>`,
  //styleUrls: ['./settings-dialog.scss']
})
export class ImgViewerDialog {
  title: '';
  images: [{ src: '', title: '', link: '' }];
  imagesIndex = 0;

  constructor(public dialogRef: MatDialogRef<ImgViewerDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images;
    this.title = data.title;

  }

  nextImg() { this.imagesIndex = ((this.imagesIndex + 1) >= this.images.length) ? 0 : (this.imagesIndex + 1) }

  prevImg() { this.imagesIndex = this.imagesIndex === 0 ? (this.images.length - 1) : (this.imagesIndex - 1) }
}
