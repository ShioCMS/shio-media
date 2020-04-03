import { Component, OnInit  } from '@angular/core';
import { PhotoService } from './services/photo.service';
import { Photo } from './models/photo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'shiohara-stock';

  photo = {} as Photo;
  photos: Photo[];

  constructor(private photoService: PhotoService) {}
  
  ngOnInit() {
    this.getPhotos();
  }

  savePhoto(form: NgForm) {
    if (this.photo.id !== undefined) {
      this.photoService.updatePhoto(this.photo).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.photoService.savePhoto(this.photo).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos;
    });
  }

  deletePhoto(photo: Photo) {
    this.photoService.deletePhoto(photo).subscribe(() => {
      this.getPhotos();
    });
  }

  editPhoto(photo: Photo) {
    this.photo = { ...photo };
  }

  cleanForm(form: NgForm) {
    this.getPhotos();
    form.resetForm();
    this.photo = {} as Photo;
  }
}
