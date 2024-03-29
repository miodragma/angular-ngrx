import { Component, Inject, OnInit } from '@angular/core';

import { MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: string;

  constructor(@Inject(MD_DIALOG_DATA) private data: string) { }

  ngOnInit() {
    this.image = this.data;
  }

}
