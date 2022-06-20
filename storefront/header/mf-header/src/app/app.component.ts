import { Component } from '@angular/core';

@Component({
  selector: 'mf-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mf-header';
  currentDate = new Date();

  sendMessage() {
    sessionStorage.setItem('message', 'Hello World');
    const event = new CustomEvent('message', {
      detail: { msg: 'Hello World' },
    });

    window.dispatchEvent(event);
  }
}
