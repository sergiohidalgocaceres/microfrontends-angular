import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'mf-appointment',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mf-appointment';

  ngOnInit() {
    console.log(sessionStorage.getItem('message'));
    fromEvent(window, 'message').subscribe((event: any) =>
      console.log(event.detail?.msg)
    );
  }
}
