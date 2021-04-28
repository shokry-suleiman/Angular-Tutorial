import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title =" Gamal mohammed"
  count = 0;
  name = '';
  print(event:any){
    console.log('event',event)
  }
}
