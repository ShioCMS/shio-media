// https://valor-software.com/ng2-file-upload/
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { TopHeaderComponent } from '../top-header/top-header.component'

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {
  hasBaseDropZoneOver:boolean;
  uploadForm: FormGroup;

  animal: string;
  name: string;
  constructor(
    public dialogRef: MatDialogRef<TopHeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder, private http: HttpClient) { 

      this.hasBaseDropZoneOver = false;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';

  

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  uploadSubmit() {
    console.log("uploadSubmit...")
    for (let i = 0; i < this.uploader.queue.length; i++) {
      let fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert("Each File should be less than 10 MB of size.");
        return;
      }
    }
    for (let j = 0; j < this.uploader.queue.length; j++) {
      
      let data = new FormData();
      let fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('folderId', '39cef32e-e754-4f1a-991c-c45a1ecebe7c');
      data.append('createPost', 'true');
      this.uploadFile(data).subscribe(data => alert(data.message));
    }
    this.uploader.clearQueue();
  }

  uploadFile(data: FormData): Observable<any> {
    return this.http.post('http://localhost:2710/api/v2/staticfile/upload', data);
  }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      document: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });
  }

}

