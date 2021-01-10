import { Component, Input, OnInit } from '@angular/core';
import { NgxAsideComponent } from 'ngx-aside/lib/aside.component';
import { ModalWindowComponent } from 'ngx-modal-window';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() messagesAppModal: ModalWindowComponent;
  @Input() notificationsPanel: NgxAsideComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
