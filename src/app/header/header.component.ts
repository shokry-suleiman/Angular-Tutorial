import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!:string;
  @Output() print:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.print.emit('Gamal')
  }

}
