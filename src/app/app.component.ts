import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrl: './app.component.css'*/
  template:   `<h1>Angular Application Demo</h1>
              <h3>{{title}}</h3>
              <!-- <img [src]="image" height=175 width=300> -->
              <input type="text" name=nameText [(ngModel)]="textData"/>
              <p>{{textData}}</p>
              <input type=text (keyup)=onKeyUp($event)>
              <p>{{myText}}</p>
              <button (click)="changeImage()">Change Image</button>
              <img [src]="currentImageUrl" alt="Image" height=175 width=300>
              <select [(ngModel)]="currentImageUrl" (change)="changeImage()">
              <option *ngFor="let imageUrl of imageUrls" [value]="imageUrl">{{ imageUrl }}</option>
              </select>
              <img [src]="currentImageUrl" alt="Selected Image" height=175 width=300>` 
})
export class AppComponent {
  title = 'Default Component';
  image = "./assets/gun.jpg";
  textData = "Siddhant";
  myText = "Old text";
  imageUrls: string[] = [
    './assets/man.jpg',
    './assets/catcav.jpg',
    './assets/gun.jpg',
    './assets/cat.jpg',
    './assets/kid.jpg',
    './assets/dog.jpg'
  ];

  currentIndex: number = 0;
  currentImageUrl: string = this.imageUrls[0];

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.currentImageUrl = this.imageUrls[this.currentIndex];
  }

  onKeyUp(event: any){
    this.myText = event.target.value;
  }
}
