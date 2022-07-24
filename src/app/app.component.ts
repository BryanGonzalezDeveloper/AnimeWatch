import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'anime-watch-main',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
