import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  newServerName: string = '';
  serverCreated: boolean = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.newServerName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
}
