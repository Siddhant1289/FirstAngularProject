import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrl: './app.component.css'*/
  template:   `<h1>Angular Application Demo</h1>
              <h3>{{title}}</h3>
              <img [src]="image" height=175 width=300>
              <input type="text" name=nameText [(ngModel)]="textData"/>
              <p>{{textData}}</p>` 
})
export class AppComponent {
  title = 'Default Component';
  image = "./assets/gun.jpg";
  textData = "Siddhant";
}
