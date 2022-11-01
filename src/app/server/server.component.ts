import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  showMessage = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }
  onshowMessage(){
    this.showMessage = !this.showMessage;
    this.log.push(this.log.length + 1);
  }

}
