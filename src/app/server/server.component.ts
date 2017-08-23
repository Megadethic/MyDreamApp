import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverName: string = 'Paul';
  serverStatus: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getAlertClass() {
    return this.serverStatus === 'online' ? 'alert-success' : 'alert-danger';
  }

  getFontSize() {
    return this.serverStatus === 'online' ? '14px' : '16px';
  }
}
